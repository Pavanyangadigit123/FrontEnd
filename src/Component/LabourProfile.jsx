import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./LabourProfile.css";
import Layout from "./Layout/Layout";

const LabourProfile = ({ user }) => {
  const { state } = useLocation();
  const { labour } = state;
  const navigate = useNavigate();

  // console.log("user",user);
  console.log(labour);

  const handleBookLabour = () => {
    navigate("/booking", { state: { labour ,user} });
  };

  return (
    <Layout>
      <div className="labour-profile-container">
        <div className="labour-profile-card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 text-center labour-profile-header">
                <img
                  src={labour.profilePic || "https://via.placeholder.com/150"}
                  alt={`${labour.firstName} ${labour.lastName}`}
                  className="img-fluid rounded-circle labour-profile-image"
                />
                <h4>{labour.firstName} {labour.lastName}</h4>
                <p>{labour.city}, {labour.state}</p>
              </div>
              <div className="col-md-8 labour-profile-info">
                <h5>Personal Information</h5>
                <p><strong>Email:</strong> {labour.email}</p>
                <p><strong>Phone Number:</strong> {labour.phoneNumber}</p>
                <p><strong>Area:</strong> {labour.area}</p>
                <p><strong>City:</strong> {labour.city}</p>
                <p><strong>State:</strong> {labour.state}</p>
                <p><strong>Country:</strong> {labour.country}</p>
                <p><strong>Zip Code:</strong> {labour.zipCode}</p>
                <p><strong>Daily Wages:</strong> ${labour.dailyWages}</p>
                <p><strong>Availability:</strong> {labour.availability ? "Available" : "Not Available"}</p>
                
                <div className="labour-skills-section">
                  <h5>Skills</h5>
                  <ul>
                    {labour.labourSkillDtos?.length > 0 ? (
                      labour.labourSkillDtos.map((skill, index) => (
                        <li key={index}>
                          <strong>Skill:</strong> {skill.skillName} | <strong>Experience:</strong> {skill.yearsOfExperience} years | <strong>Proficiency:</strong> {skill.proficiencyLevel}
                        </li>
                      ))
                    ) : (
                      <p>No skills listed.</p>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <button 
              className="btn btn-primary mt-3"
              onClick={handleBookLabour}
            >
              Book Labour
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LabourProfile;
