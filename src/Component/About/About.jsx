import React from 'react';
import Layout from '../Layout/Layout.jsx';
import './About.css';
import aboutImage from '../../assets/HomePage1.png'; // Replace with your actual image path

const About = () => {
  return (
    <Layout>
      <div className="about">
        <section className="about-section">
          <div className="about-image">
            <img src={aboutImage} alt="Labour Hub" />
          </div>

          <div className="about-content">
            <h2>About Us</h2>
            <p>
              Labour Hub is your go-to platform for connecting skilled labourers
              with job opportunities. We specialize in creating a seamless
              experience for both workers and employers by offering tools for job
              listings, profile creation, and wage negotiation. Our mission is to
              empower labourers and simplify the hiring process.
            </p>
          </div>
        </section>
        <section className="cards-section">
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower skilled labourers by providing them with
              easy access to job opportunities and tools to grow their careers.
            </p>
          </div>

          <div className="card">
            <h3>Our Services</h3>
            <p>
              We offer a range of services including job listings, profile
              creation, wage negotiation, and feedback collection to ensure a
              seamless hiring process.
            </p>
          </div>

          <div className="card">
            <h3>Profile Creation</h3>
            <p>
              Create a comprehensive profile to showcase your skills and connect
              with potential employers who are looking for reliable labourers.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
