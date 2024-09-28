import React from 'react';
import './AdminProfile.css'; // Import the CSS file for styling

const AdminProfile = () => {
    const adminDetails = JSON.parse(localStorage.getItem("adminDetails")); // Retrieve admin details from local storage
    console.log("admindetails:",adminDetails);
    return (
        <div className="admin-profile-card1">
            {adminDetails ? (
                <>
                    <div className="profile-pic1">
                        <img src={adminDetails.profilePic} alt="Profile" />
                    </div>
                    <div className="admin-details">
                        <h2>{adminDetails.firstName}</h2>
                        <p>Email: {adminDetails.email}</p>
                        <p>Phone Number: {adminDetails.phoneNumber}</p>
                        <p>City: {adminDetails.city}</p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default AdminProfile;
