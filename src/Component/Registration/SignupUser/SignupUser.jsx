import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import './SignupUser.css';

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
    };

    try {
      const response = await fetch('http://localhost:8080/api/v1/user', {
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
      <h1 className='text-center mt-3'>Register</h1>
      <div className="container signup-container p-4">
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
                <label htmlFor="lastName">Last Name</label>
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="form-control" id="lastName" placeholder="Enter last name" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter email" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="form-control" id="phoneNumber" placeholder="Enter phone number" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="area">Area</label>
                <input type="text" value={area} onChange={e => setArea(e.target.value)} className="form-control" id="area" placeholder="Enter area" />
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
                <label htmlFor="state">State</label>
                <input type="text" value={state} onChange={e => setState(e.target.value)} className="form-control" id="state" placeholder="Enter state" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="country">Country</label>
                <input type="text" value={country} onChange={e => setCountry(e.target.value)} className="form-control" id="country" placeholder="Enter country" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="zipCode">Zip Code</label>
                <input type="text" value={zipCode} onChange={e => setZipCode(e.target.value)} className="form-control" id="zipCode" placeholder="Enter zip code" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="profilePic">Profile Picture</label>
                <input type="file" onChange={e => setProfilePic(e.target.files[0])} className="form-control" id="profilePic" />
              </div>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-block mt-3">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default SignupUser;
