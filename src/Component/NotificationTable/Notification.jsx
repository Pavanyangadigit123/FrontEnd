import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import Layout from '../Layout/Layout';
import '../NotificationTable/Notification.css'
import { useNavigate } from 'react-router-dom';

const Notification = () => {
    const [notifications, setNotifications] = useState([]);
    const [error, setError] = useState(null);
    const[auth]=useAuth();
    const navigate=useNavigate();

    useEffect(() => {
        if(!auth?.token){
            navigate("/signin")
        }
        const fetchNotifications = async () => {
            try {
                const response = await axios.get('http://localhost:9000/api/v1/notification',{
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: auth?.token
                    },
                });
                if (response.status === 200) {
                    setNotifications(response.data); // Adjust if the response data format is different
                }
            } catch (error) {
                setError("Error fetching notifications");
                console.error("Error fetching notifications:", error);
            }
        };

        fetchNotifications();
    }, []);

   

    return (
        <Layout>
        <div className="notification-table-container">
            <h2 style={{ textAlign: 'center' }}>Notifications</h2>
            {error && <p className="error-message">{error}</p>}
            <table className="notification-table">
                <thead>
                    <tr>
                        <th className="sl-no">Sl No</th>
                        <th className="title">Title</th>
                        <th className="description">Description</th>
                        <th className="created-time">Created Time</th>
                    </tr>
                </thead>
                <tbody>
                    {notifications.length > 0 ? (
                        notifications.map((notification, index) => (
                            <tr key={notification.id}>
                                <td className="sl-no">{index + 1}</td>
                                <td className="title">{notification.title}</td>
                                <td className="description">{notification.description}</td>
                                <td className="created-time">{notification.createdTime ? new Date(notification.createdTime).toLocaleString() : 'N/A'}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>No notifications available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </Layout>
    );
};

export default Notification;
