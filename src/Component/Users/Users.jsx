import React, { useEffect, useState } from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import axios from 'axios';
import {useAuth} from "../../context/auth"
import "../Admin/Users/Users.css"

const Users = ({  }) => {
  const[auth] = useAuth();
  const [users, setUsers] = useState([]);

  // Fetch users from the backend
  useEffect(() => {
    axios.get('http://localhost:9000/api/v1/user', {
      headers: {
        Authorization: auth?.token,
      }
    })
    .then(response => {
      setUsers(response.data);
      // console.log(response.data);
    })
    .catch(error => {
      console.error("There was an error fetching the users!", error);
    });
  }, []);

  // Delete a user
  const deleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios.delete(`http://localhost:9000/api/v1/user/user-id/${userId}`, {
        headers: {
          Authorization: auth?.token,
        }
      })
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
        alert('User deleted');
      })
      .catch(error => {
        console.error("There was an error deleting the user!", error);
      });
    }
  };

  return (
    <div className="user-list">
      <h2><BsPeopleFill /> Users</h2>
      <div className="user-cards">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <h3>{user.firstName}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phoneNumber}</p>
            <p>City: {user.city}</p>
            <button className="delete-btn" onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
