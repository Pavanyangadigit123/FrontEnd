import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Unauthorized = () => {

    const navigate = useNavigate();
    useEffect(() => {

      setTimeout(() => {
        navigate("/")
      }, 5000);
    }, []);
  return (
    <div style={{ minHeight: "90vh" }}>
      <div className="container">
        <div className="row mx-auto w-50">
          <Link to="/">
            <img
              src="https://indexsy.com/wp-content/uploads/2023/06/how-to-fix-401-unauthorized-error.png"
              alt="Un Authorized Access"
              className="img-fluid m-5"
              width={800}
            />
            <p className="btn btn-primary mx-5">Go to Homepage</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Unauthorized;