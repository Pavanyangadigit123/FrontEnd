import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationOptions.css'; // Import the CSS file

const RegistrationOptions = () => {
  const navigate = useNavigate();

  const handleSignupUser = () => {
    navigate('/SignupUser');
  };

  const handleSignupLabour = () => {
    navigate('/SignupLabour');
  };

  return (
    <div className="container text-center">
      <div className="card registration-card">
        <div className="card-body">
          <h2 className="card-title">Sign Up As</h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <button 
                className="btn btn-primary btn-lg w-100"
                onClick={handleSignupUser}
              >
                Sign Up as User
              </button>
            </div>
            <div className="col-md-6 mb-3">
              <button 
                className="btn btn-secondary btn-lg w-100"
                onClick={handleSignupLabour}
              >
                Sign Up as Labour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationOptions;
