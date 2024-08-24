import React, { useState, useEffect } from 'react';
import Layout from '../../Layout/Layout';
import './SignupLabour.css';

const SignupLabour = () => {
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
  const [dailyWages, setDailyWages] = useState("");
  const [availability, setAvailability] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillEntries, setSkillEntries] = useState([{ skillId: '', yearsOfExperience: '', proficiencyLevel: '' }]);

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

  const handleAddSkillEntry = () => {
    setSkillEntries([...skillEntries, { skillId: '', yearsOfExperience: '', proficiencyLevel: '' }]);
  };

  const handleRemoveSkillEntry = (index) => {
    const newSkillEntries = skillEntries.filter((_, i) => i !== index);
    setSkillEntries(newSkillEntries);
  };

  const handleSkillChange = (index, field, value) => {
    const newSkillEntries = skillEntries.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    );
    setSkillEntries(newSkillEntries);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      window.alert("Password doesn't match");
      return;
    }

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
        alert('Registration is completed');
      } else {
        alert('Error in registration');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Layout>
      <h1 className="text-center mt-3">Register</h1>
      <div className="container form-container">
        <form onSubmit={handleSubmit}>
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
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="form-control"
                placeholder="Enter last name"
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
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="form-control"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>

          <div className="form-row">
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
              <label htmlFor="profilePic">Profile pic</label>
              <input
                type="file"
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                className="form-control"
                placeholder="Upload profile picture"
              />
            </div>
          </div>

    <div className="form-row">
  <div className="form-group">
    <label htmlFor="dailyWages">Daily Wages</label>
    <input
      type="text"
      value={dailyWages}
      onChange={(e) => setDailyWages(e.target.value)}
      className="form-control"
      placeholder="Enter Daily Wages"
    />
  </div>
  <div className="form-group">
    <label htmlFor="availability">Availability</label>
    <input
      type="text"
      value={availability}
      onChange={(e) => setAvailability(e.target.value)}
      className="form-control"
      placeholder="Enter Availability"
    />
  </div>
</div>

          {skillEntries.map((entry, index) => (
            <div key={index} className="form-row">
              <div className="form-group">
                <label htmlFor={`skillSelect-${index}`}>Select a Skill</label>
                <select
                  id={`skillSelect-${index}`}
                  className="form-control"
                  value={entry.skillId}
                  onChange={(e) => handleSkillChange(index, 'skillId', e.target.value)}
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
                <label htmlFor={`yearsOfExperience-${index}`}>Years of Experience</label>
                <input
                  type="number"
                  id={`yearsOfExperience-${index}`}
                  value={entry.yearsOfExperience}
                  onChange={(e) => handleSkillChange(index, 'yearsOfExperience', e.target.value)}
                  className="form-control"
                  placeholder="Enter years of experience"
                />
              </div>

              <div className="form-group">
                <label htmlFor={`proficiencyLevel-${index}`}>Proficiency Level</label>
                <select
                  id={`proficiencyLevel-${index}`}
                  className="form-control"
                  value={entry.proficiencyLevel}
                  onChange={(e) => handleSkillChange(index, 'proficiencyLevel', e.target.value)}
                >
                  <option value="">Select proficiency level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>

              
            </div>
          ))}

                <button
                type="button"
                className="btn btn-danger mt-2"
                onClick={() => handleRemoveSkillEntry(index)}
              >
                Remove Skill
              </button>

  <div className="form-row">
  <button
    type="button"
    className="btn btn-secondary mt-3"
    onClick={handleAddSkillEntry}
  >
    Add Another Skill
  </button>
  {skillEntries.length > 1 && (
    <button
      type="button"
      className="btn btn-danger mt-3"
      onClick={() => handleRemoveSkillEntry(skillEntries.length - 1)}
    >
      Remove Skill
    </button>
  )}
</div>
<div className='submit-btn'>
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SignupLabour;
