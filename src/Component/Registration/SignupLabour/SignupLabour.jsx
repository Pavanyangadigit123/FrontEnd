import React, { useState, useEffect } from 'react';
import Layout from '../../Layout/Layout';
import './SignupLabour.css';

const SignupLabour = () => {
  // State variables for Personal Details
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State variables for Location Details
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [dailyWages, setDailyWages] = useState('');
  const [availability, setAvailability] = useState('');

  // State variables for Skill Details
  const [skills, setSkills] = useState([]);
  const [skillEntries, setSkillEntries] = useState([]);

  // Fetch available skills when the component mounts
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/skill');
        if (response.ok) {
          const skillsData = await response.json();
          setSkills(skillsData);
        } else {
          console.error('Failed to fetch skills');
        }
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);

  // Handlers for adding and removing skill entries
  const handleAddSkillEntry = () => {
    setSkillEntries([...skillEntries, { skillId: '', yearsOfExperience: '', proficiencyLevel: '' }]);
  };

  const handleRemoveSkillEntry = (index) => {
    setSkillEntries(skillEntries.filter((_, i) => i !== index));
  };

  const handleSkillChange = (index, field, value) => {
    setSkillEntries(skillEntries.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    ));
  };

  // Submit handler for Personal Details form
  const handlePersonalDetailsSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    alert('Personal details submitted');
  };

  // Submit handler for Location Details form
  const handleLocationDetailsSubmit = (e) => {
    e.preventDefault();
    alert('Location details submitted');
  };

  // Submit handler for Skill Details form
  const handleSkillDetailsSubmit = async (e) => {
    e.preventDefault();
    const labourSkillDtos = skillEntries.map((entry) => ({
      skillId: entry.skillId,
      yearsOfExperience: entry.yearsOfExperience,
      proficiencyLevel: entry.proficiencyLevel,
    }));

    const userData = {
      email,
      phoneNumber,
      area,
      firstName,
      lastName,
      city,
      state,
      zipCode,
      country,
      profilePic,
      dailyWages: parseFloat(dailyWages),
      availability,
      labourSkillDtos,
    };

    try {
      const response = await fetch('http://localhost:8080/api/v1/labour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert('Skill details submitted, registration completed');
      } else {
        alert('Error in submitting skill details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Layout>
      <h1 className="text-center mt-3">Register</h1>

      {/* Personal Details Form */}
      <div className="container form-container" style={{ marginBottom: '30px' }}>
        <form onSubmit={handlePersonalDetailsSubmit}>
          <h3>Personal Details</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="form-control"
                placeholder="Enter first name"
              />
            </div>
         
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

          <div className="form-row">
     
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="form-control"
                placeholder="Enter last name"
              />
            </div>
       
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="form-row">
          <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="dailywages">Daily Wages</label>
              <input
                type="password"
                value={dailyWages}
                onChange={(e) => setDailyWages(e.target.value)}
                className="form-control"
                placeholder="Enter Wages"
              />
            </div>
         
         
          
          </div>
          <div className="form-row">
          <div className="form-group">

              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="form-control"
                placeholder="Enter Phone Number"
              />
            </div>

         
           
            <div className="form-group">
              <label htmlFor="availabilty">Availability</label>
              <input
                type="availability"
                value={confirmPassword}
                onChange={(e) => setAvailability(e.target.value)}
                className="form-control"
                placeholder="Enter availabilitiy"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary1 mt-2">
            Submit Personal Details
          </button>
        </form>
      </div>

      {/* Location Details Form */}
      <div className="container form-container" style={{ marginBottom: '30px' }}>
        <form onSubmit={handleLocationDetailsSubmit}>
          <h3>Location Details</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="area">Area</label>
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="form-control"
                placeholder="Enter Area"
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="form-control"
                placeholder="Enter City"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="form-control"
                placeholder="Enter State"
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip code</label>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="form-control"
                placeholder="Enter Zip code"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="form-control"
                placeholder="Enter country"
              />
            </div>
            <div className="form-group">
              <label htmlFor="profilePic">Profile Picture</label>
              <input
                type="file"
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                className="form-control"
                placeholder="Upload profile picture"
              />
            </div>
          </div>
          <div>

          </div>

          <button type="submit" className="btn btn-primary1 mt-2">
            Submit Location Details
          </button>
        </form>
      </div>

      {/* Skill Details Form */}
      <div className="container form-container">
  <form onSubmit={handleSkillDetailsSubmit}>
    <h3>Skill Details</h3>
    <div className="form-group">
      {skillEntries.map((entry, index) => (
        <div key={index} className="form-row skill-entry">
          <div className="form-group">
            <label htmlFor={`skillSelect-${index}`}>Select a Skill</label>
            <select
              id={`skillSelect-${index}`}
              className="form-control"
              value={entry.skillId}
              onChange={(e) =>
                handleSkillChange(index, "skillId", e.target.value)
              }
            >
              <option value="">Select a skill</option>
              {skills.map((skill) => (
                <option key={skill.id} value={skill.id}>
                  {skill.skillName}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor={`yearsOfExperience-${index}`}>
              Years of Experience
            </label>
            <input
              type="number"
              id={`yearsOfExperience-${index}`}
              value={entry.yearsOfExperience}
              onChange={(e) =>
                handleSkillChange(index, "yearsOfExperience", e.target.value)
              }
              className="form-control"
              placeholder="Enter years of experience"
            />
          </div>

          <div className="form-group">
            <label htmlFor={`proficiencyLevel-${index}`}>
              Proficiency Level
            </label>
            <select
              id={`proficiencyLevel-${index}`}
              className="form-control"
              value={entry.proficiencyLevel}
              onChange={(e) =>
                handleSkillChange(index, "proficiencyLevel", e.target.value)
              }
            >
              <option value="">Select proficiency level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          <button
            type="button"
            className="btn btn-danger mt-2"
            onClick={() => handleRemoveSkillEntry(index)}
          >
            Remove Skill
          </button>
        </div>
      ))}

      <button
        type="button"
        className="btn btn-secondary1 mt-3"
        onClick={handleAddSkillEntry}
      >
        Add Skill
      </button>
    </div>

    <button type="submit" className="btn btn-primary1 mt-2">
      Submit Skill Details
    </button>
  </form>
</div>

    </Layout>
  );
};

export default SignupLabour;
