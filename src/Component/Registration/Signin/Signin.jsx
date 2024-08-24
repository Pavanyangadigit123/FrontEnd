import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Layout from '../../Layout/Layout';
import './Signin.css';

const Signin = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate(); 

  const handleRegisterClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setShowDropdown(prevState => !prevState); // Toggle the dropdown visibility
    console.log("Dropdown toggled:", !showDropdown); // Debugging: Check the state change
  };

  const handleSignupLabour = () => {
    navigate('/SignupLabour');
  };

  const handleSignupUser = () => {
    navigate('/SignupUser');
  };

  return (
    <Layout>
      <div className="signin-container">
        <form className="signin-form">
          {/* Email input */}
          <div data-mdb-input-init className="form-outline mb-2">
            <input type="email" id="form2Example1" className="form-control" />
            <label className="form-label" htmlFor="form2Example1">Email address</label>
          </div>
          {/* Password input */}
          <div data-mdb-input-init className="form-outline mb-2">
            <input type="password" id="form2Example2" className="form-control" />
            <label className="form-label" htmlFor="form2Example2">Password</label>
          </div>
          {/* 2 column grid layout for inline styling */}
          <div className="row mb-2">
            <div className="col d-flex justify-content-center">
              {/* Checkbox */}
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="form2Example31" defaultChecked />
                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
              </div>
            </div>
            <div className="col">
              {/* Simple link */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>
          {/* Submit button */}
          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-2">Sign in</button>
          {/* Register buttons */}
          <div className="text-center">
            <p>Not a member? <a href="#!" onClick={handleRegisterClick}>Register</a></p>
            {/* Conditional rendering for the dropdown */}
            {showDropdown && (
              <div className="dropdown-menu" style={{ display: 'block', position: 'absolute', backgroundColor:"lightblue", boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
                <button onClick={handleSignupLabour} className="dropdown-item">Signup as Labour</button>
                <button onClick={handleSignupUser} className="dropdown-item">Signup as User</button>
              </div>
            )}
            <p>or sign up with:</p>
            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f" />
            </button>
            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google" />
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signin;
