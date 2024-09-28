import React, { useState } from 'react';
import axios from 'axios';
import '../Notification/AddNotification.css'
import { useAuth } from '../../../context/auth';

const AddNotification = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const[auth]=useAuth();

    // Fetch admin ID from local storage
    const adminId = JSON.parse(localStorage.getItem("adminDetails"))?.id; // Assuming admin ID is stored under userId
    console.log("adminId",adminId);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!adminId) {
            alert("Admin ID is not available");
            return;
        }

        if (!title || !description) {
            alert("Please fill in all fields.");
            return;
        }

        const notificationData = {
            title,
            description,
        };

        try {
            const response = await axios.post(`http://localhost:9000/api/v1/notification/admin-id/${adminId}`, notificationData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: auth?.token
                },
            });

            if (response.status === 200) {
                alert("Notification added successfully!");
                // Optionally reset form fields
                setTitle('');
                setDescription('');
            }
        } catch (error) {
            console.error("Error adding notification:", error);
            alert("Failed to add notification. Please try again.");
        }
    };

    return (
        <div className="notification-form-container">
            <form onSubmit={handleSubmit} className="notification-form">
                <h2>Add Notification</h2>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Add Notification</button>
            </form>
        </div>
    );
};

export default AddNotification;
