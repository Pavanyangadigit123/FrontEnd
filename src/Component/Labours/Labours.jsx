import React, { useEffect, useState } from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import axios from 'axios';
import {useAuth} from "../../context/auth"
import "../Admin/Users/Users.css"

const Labours = ({  }) => {
  const[auth] = useAuth();
  const [labours, setLabours] = useState([]);

  // Fetch users from the backend
  useEffect(() => {
    axios.get('http://localhost:9000/api/v1/labour', {
      headers: {
        Authorization: auth?.token,
      }
    })
    .then(response => {
        setLabours(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.error("There was an error fetching the Labours!", error);
    });
  }, []);

  // Delete a user
  const deleteUser = (labourId) => {
    if (window.confirm("Are you sure you want to delete this Labour?")) {
      axios.delete(`http://localhost:9000/api/v1/labour/labour-id/${labourId}`, {
        headers: {
          Authorization: auth?.token,
        }
      })
      .then(() => {
        setLabours(labours.filter(labour => labour.id !== labourId));
        alert('Labour deleted');
      })
      .catch(error => {
        console.error("There was an error deleting the labour!", error);
      });
    }
  };

  return (
    <div className="user-list">
      <h2><BsPeopleFill /> Labours</h2>
      <div className="user-cards">
        {labours.map(labour => (
          <div className="user-card" key={labour.id}>
            <h3>{labour.firstName}</h3>
            <p>Email: {labour.email}</p>
            <p>Phone: {labour.phoneNumber}</p>
            <p>City: {labour.city}</p>
            <button className="delete-btn" onClick={() => deleteUser(labour.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Labours;
