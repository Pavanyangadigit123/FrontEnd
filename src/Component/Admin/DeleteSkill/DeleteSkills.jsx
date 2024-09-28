import React, { useState, useEffect } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import axios from 'axios';
import "../DeleteSkill/DeleteSkills.css"
import {useAuth} from "../../../context/auth";

const DeleteSkills = () => {
  const [skills, setSkills] = useState([]);
  const[auth] = useAuth();

  // Fetch skills from the backend when the component mounts
  useEffect(() => {
    axios.get('http://localhost:9000/api/v1/skill')
      .then(response => {
        setSkills(response.data); // assuming response.data is an array of skills
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching skills:', error);
      });
  }, []);

  // Function to delete a skill
  const handleDelete = (id) => {
    axios.delete(`http://localhost:9000/api/v1/skill/skill-id/${id}` ,{
      headers: {
        Authorization: auth?.token,
      }
    })
      .then(() => {
        setSkills(skills.filter(skill => skill.id !== id)); // Update UI after deletion
      })
      .catch(error => {
        console.error('Error deleting skill:', error);
      });
  };

  return (
    <div className="delete-skills-page">
      <h2>Delete Skills</h2>
      <ul className="skills-list">
        {skills.map(skill => (
          <li key={skill.id} className="skills-list-item">
            <div className="skill-box">
              <span className="skill-name">{skill.skillName}</span>
              <button 
                className="delete-button12" 
                style={{ width: '100px' }}
                onClick={() => handleDelete(skill.id)}
              >
                <BsTrashFill /> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteSkills;
