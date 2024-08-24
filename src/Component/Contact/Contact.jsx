import React from 'react';
import './Contact.css';
import Layout from '../Layout/Layout';

const Contact = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: 'center', margin: '0' }}>
Contact us
</h1>
    <div className="contact-form-container">
      <form className="contact-form">
       
        {/* Name input */}
        <div className="form-outline mb-4">
          <input type="text" id="form4Example1" className="form-control" />
          <label className="form-label" htmlFor="form4Example1">Name</label>
        </div>

        {/* Email input */}
        <div className="form-outline mb-4">
          <input type="email" id="form4Example2" className="form-control" />
          <label className="form-label" htmlFor="form4Example2">Email address</label>
        </div>

        {/* Message input */}
        <div className="form-outline mb-4">
          <textarea className="form-control" id="form4Example3" rows="4"></textarea>
          <label className="form-label" htmlFor="form4Example3">Message</label>
        </div>

        {/* Submit button */}
        <button type="button" className="btn btn-primary btn-block mb-4">
          Send
        </button>
      </form>
    </div>
    </Layout>
  );
};

export default Contact;
