import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import './SignupUser.css';
import { storage } from '../../../firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const SignupUser = () => {
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFileChange = async (e) => {
        try {
          const file = e.target.files[0];
          await uploadProfilePicture(file); // Call the function to upload the file
        } catch (error) {
          console.log(error);
        }
      };
    
      const uploadProfilePicture = async (file) => {
        if (!file){
          alert('Please select a file first!');
           return;}
      
        const storageRef = ref(storage, `profile_pics/${file.name}`);
        // const storageRef = ref(storage, 'profile_pics/' + file.name)
        try {
          // Upload the file to Firebase Storage
          await uploadBytes(storageRef, file);
          // Get the download URL
          const downloadURL = await getDownloadURL(storageRef);
          console.log("File available at", downloadURL);
          setProfilePic(downloadURL);
        } catch (error) {
          console.error("Error uploading file:", error);
          }
      };
    

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      area,
      city,
      state,
      country,
      zipCode,
      profilePic,
      password
    };
     console.log(userData);

    if (password !== confirmPassword) {

      window.alert("Please confirm your password");
    }

    try {
      const response = await fetch('http://localhost:9000/api/v1/user/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Registration is Completed");
      } else {
        alert("Error in registration");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Layout>
      <h1 className='text-center mt-3' style={{fontSize:'30px', marginBottom:'5px'}}>Register</h1>
      <div className="container signup-container1 p-4">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="firstName">First Name</label>
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control" id="firstName" placeholder="Enter first name" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="state">State</label>
                <input type="text" value={state} onChange={e => setState(e.target.value)} className="form-control" id="state" placeholder="Enter state" />
              </div>
            </div>
           </div>


          <div className="row">
          <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="form-control" id="lastName" placeholder="Enter last name" />
              </div>
           </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="city">City</label>
                <input type="text" value={city} onChange={e => setCity(e.target.value)} className="form-control" id="city" placeholder="Enter city" />
              </div>
            </div>
        </div>

        <div className="row">
          <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" value={confirmPassword} onChange={e => setPassword(e.target.value)} className="form-control" id="password" placeholder="Enter password" />
              </div>
           </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="city">Confirm Password</label>
                <input type="text" value={city} onChange={e => setConfirmPassword(e.target.value)} className="form-control" id="confirmPassword" placeholder="Confirm Password" />
              </div>
            </div>
        </div>


          {/* <div className="form-row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
            </div>
            <div className="col-md-6">
       <div className="form-group">
       <label htmlFor="confirmPassword"> Password</label>
       <input
         type="password"
         value={confirmPassword}
         onChange={(e) => setConfirmPassword(e.target.value)}
         className="form-control"
         placeholder="Confirm Password"
       />
     </div>
   </div>
   </div> */}


          <div className="row">
          <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter email" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="area">Area</label>
                <input type="text" value={area} onChange={e => setArea(e.target.value)} className="form-control" id="area" placeholder="Enter area" />
              </div>
            </div>
           
            
          </div>
          <div className="row">
          <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="form-control" id="phoneNumber" placeholder="Enter phone number" />
              </div>
            </div>
           
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="zipCode">Zip Code</label>
                <input type="text" value={zipCode} onChange={e => setZipCode(e.target.value)} className="form-control" id="zipCode" placeholder="Enter zip code" />
              </div>
            </div>
           
          </div>
          <div className="row">
          <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="country">Country</label>
                <input type="text" value={country} onChange={e => setCountry(e.target.value)} className="form-control" id="country" placeholder="Enter country" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="profilePic">Profile Picture</label>
                <input type="file"  onChange={(e) => handleFileChange(e)} className="form-control" id="profilePic" />
              </div>
            </div>
          </div>
          <div className="text-center">
          <button type="submit" onClick={handleSubmit} className="btn btn-primary2  " style={{textAlign:'center'}}>Submit</button>
          </div>
          </form>
      </div>
    </Layout>
  );
};

export default SignupUser;
