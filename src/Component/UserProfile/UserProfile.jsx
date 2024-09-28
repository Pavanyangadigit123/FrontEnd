

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useAuth } from '../../context/auth';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import Firebase Storage methods
// import { storage } from '../../firebaseConfig'; // Firebase configuration
// import Layout from '../Layout/Layout';
// import '../UserProfile/UserProfile.css';

// const UserProfile = () => {
//   const [userDetails, setUserDetails] = useState({});
//   const [profilePic, setProfilePic] = useState('');
//   const [auth] = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (auth?.userId) {
//       axios.get(`http://localhost:9000/api/v1/user/user-id/${auth?.userId}`, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: auth?.token,
//         },
//       })
//         .then((response) => {
//           setUserDetails(response.data);
//           setProfilePic(response.data.profilePic);
//         })
//         .catch((error) => console.error('Error fetching user details:', error));
//     } else {
//       console.error('User ID not found');
//     }
//   }, [auth]);

//   const handleFileChange = async (e) => {
//     try {
//       const file = e.target.files[0];
//       if (file) {
//         const newProfilePicURL = await uploadProfilePicture(file); // Upload and get the new profile pic URL
//         setProfilePic(`${newProfilePicURL}?t=${new Date().getTime()}`); // Add cache-busting query
//         await updateProfilePicInDB(newProfilePicURL); // Update in the database
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const uploadProfilePicture = async (file) => {
//     if (!file) {
//       alert("Please select a file first!");
//       return;
//     }

//     const storageRef = ref(storage, `profile_pics/${file.name}`); // Firebase storage reference
//     try {
//       // Upload the file to Firebase Storage
//       await uploadBytes(storageRef, file);
//       // Get the download URL
//       const downloadURL = await getDownloadURL(storageRef);
//       console.log("File available at", downloadURL);
//       return downloadURL; // Return the download URL
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   const updateProfilePicInDB = async (downloadURL) => {
//     try {
//       const updatedData = {
//         ...userDetails, // Keep the rest of the user details unchanged
//         profilePic: downloadURL, // Only update the profilePic field
//       };

//       // Call the backend API to update the profile picture
//       await axios.put(`http://localhost:9000/api/v1/user/user-id/${auth?.userId}`, updatedData, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: auth?.token,
//         },
//       });

//       console.log('Profile picture updated in the database');
//     } catch (error) {
//       console.error('Error updating profile picture in the database:', error);
//     }
//   };

//   const handleEditProfile = () => {
//     navigate('/edit-profile');
//   };

//   return (
//     <Layout>
//       <div className="profile-container">
//         <div className="profile-card">
//           <div className="profile-pic-container">
//             <img
//               className="profile-pic"
//               src={profilePic || 'default-pic.png'}
//               alt="Profile"
//               onError={(e) => { e.target.src = 'default-pic.png'; }} // Fallback for broken images
//             />
//             <label htmlFor="file-input" className="edit-icon">
//               <i className="fas fa-edit"></i>
//             </label>
//             <input id="file-input" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
//           </div>
//           <h3>{userDetails.firstName}</h3>
//           <p>Email: {userDetails.email}</p>
//           <p>Phone: {userDetails.phoneNumber}</p>
//           <div className="profile-buttons">
//             <button onClick={() => navigate('/view-details')}>View Details</button>
//             <button onClick={handleEditProfile}>Edit Profile</button>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default UserProfile;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import Firebase Storage methods
import { storage } from '../../firebaseConfig'; // Firebase configuration
import Layout from '../Layout/Layout';
import '../UserProfile/UserProfile.css';

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [profilePic, setProfilePic] = useState('');
  const [showDetails, setShowDetails] = useState(false); // Toggle for showing more details
  const [isEditing, setIsEditing] = useState(false); // Toggle for editing profile
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(!auth?.token){
      navigate("/signin")
  }
    if (auth?.userId) {
      axios.get(`http://localhost:9000/api/v1/user/user-id/${auth?.userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth?.token,
        },
      })
        .then((response) => {
          setUserDetails(response.data);
          setProfilePic(response.data.profilePic);
          setEmail(response.data.email);
          setPhoneNumber(response.data.phoneNumber);
        })
        .catch((error) => console.error('Error fetching user details:', error));
    } else {
      console.error('User ID not found');
    }
  }, [auth]);

    const handleFileChange = async (e) => {
    try {
      const file = e.target.files[0];
      if (file) {
        const newProfilePicURL = await uploadProfilePicture(file); // Upload and get the new profile pic URL
        setProfilePic(`${newProfilePicURL}?t=${new Date().getTime()}`); // Add cache-busting query
        await updateProfilePicInDB(newProfilePicURL); // Update in the database
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadProfilePicture = async (file) => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const storageRef = ref(storage, `profile_pics/${file.name}`); // Firebase storage reference
    try {
      // Upload the file to Firebase Storage
      await uploadBytes(storageRef, file);
      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);
      console.log("File available at", downloadURL);
      return downloadURL; // Return the download URL
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const updateProfilePicInDB = async (downloadURL) => {
    try {
      const updatedData = {
        ...userDetails, // Keep the rest of the user details unchanged
        profilePic: downloadURL, // Only update the profilePic field
      };

      // Call the backend API to update the profile picture
      await axios.put(`http://localhost:9000/api/v1/user/user-id/${auth?.userId}`, updatedData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth?.token,
        },
      });

      console.log('Profile picture updated in the database');
    } catch (error) {
      console.error('Error updating profile picture in the database:', error);
    }
  };


  const handleEditProfile = () => {
    setIsEditing(true); // Show edit form
  };

  const handleSaveProfile = async () => {
    const updatedData = {
      email,
      phoneNumber
    };

    try {
      await axios.put(`http://localhost:9000/api/v1/user/user-id/${auth?.userId}`, updatedData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth?.token,
        },
      });
      alert('Profile updated successfully');
      setIsEditing(false); // Close edit form after saving
      setUserDetails({ ...userDetails, email, phoneNumber }); // Update displayed details
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  const handleViewDetails = () => {
    setShowDetails(true); // Show additional details
  };

  return (
    <Layout>
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-pic-container">
            <img
              className="profile-pic"
              src={profilePic || 'default-pic.png'}
              alt="Profile"
            />
            <label htmlFor="file-input" className="edit-icon">
              <i className="fas fa-edit"></i>
            </label>
            <input id="file-input" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
          </div>

          {/* Display User Details */}
          {!isEditing ? (
            <>
              <h3>{userDetails.firstName}</h3>
              <p>Email: {userDetails.email}</p>
              <p>Phone: {userDetails.phoneNumber}</p>
              {showDetails && (
                <>
                  <p>Area: {userDetails.area}</p>
                  <p>City: {userDetails.city}</p>
                  <p>Zipcode: {userDetails.zipcode}</p>
                  <p>Country: {userDetails.country}</p>
                </>
              )}
              <div className="profile-buttons">
                <button onClick={handleViewDetails}>View Details</button>
                <button onClick={handleEditProfile}>Edit Profile</button>
              </div>
            </>
          ) : (
            <>
              {/* Edit Profile Form */}
              <h3>Edit Profile</h3>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Phone:</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <div className="profile-buttons">
                <button onClick={handleSaveProfile}>Save</button>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
