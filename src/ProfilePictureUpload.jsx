// src/components/ProfilePictureUpload.js

import React, { useState } from 'react';
import { storage } from '../src/firebaseConfig'; // Import the storage object from your Firebase configuration
import { ref, uploadBytes } from 'firebase/storage'; // Import necessary Firebase storage functions

const ProfilePictureUpload = () => {
  // State to store the selected file
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]); // Store the selected file
      console.log("File selected:", event.target.files[0]);
    }
  };

  // Function to upload the selected profile picture to Firebase Storage
  const uploadProfilePicture = async () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    // Create a storage reference
    const storageRef = ref(storage, 'profile_pics/' + selectedFile.name);

    try {
      // Upload the file to Firebase Storage
      await uploadBytes(storageRef, selectedFile);
      console.log('Uploaded a file successfully!');
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file.');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Upload Profile Picture</h1>
      {/* Input for selecting a file */}
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {/* Button to upload the file */}
      <button onClick={uploadProfilePicture} style={{ marginTop: '10px' }}>
        Upload Picture
      </button>
    </div>
  );
};

export default ProfilePictureUpload;
