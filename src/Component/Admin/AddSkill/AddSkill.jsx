import React, { useState } from 'react';
import '../AddSkill/AddSkill.css'; // Adjust the path as necessary
import { useAuth } from '../../../context/auth';

const AddSkill = () => {
//   const [skillId, setSkillId] = useState('');
  const [skillName, setSkillName] = useState('');
  const [skillDescription, setSkillDescription] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const[auth]=useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const skillData = {
    //   skillId,
      skillName,
      skillDescription,
    };

    try {
      const response = await fetch('http://localhost:9000/api/v1/skill/addSkill', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: auth?.token,
        },
        body: JSON.stringify(skillData)
      });
      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to add skill');
      }

      const result = await response.json();
      console.log(result);
      setSuccess(true);
    //   setSkillId('');
      setSkillName('');
      setSkillDescription('');
      setError(null);
    } catch (err) {
      setError(err.message);
      setSuccess(false);
    }
  };

  return (
    <div className="add-skill-container">
      <form className="add-skill-form" onSubmit={handleSubmit}>
        <h2>Add Skill</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">Skill added successfully!</p>}
        {/* <div>
          <label>Skill ID:</label>
          <input
            type="text"
            value={skillId}
            onChange={(e) => setSkillId(e.target.value)}
            required
          />
        </div> */}
        <div>
          <label>Skill Name:</label>
          <input
            type="text"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Skill Description:</label>
          <textarea
            value={skillDescription}
            onChange={(e) => setSkillDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
};

export default AddSkill;
