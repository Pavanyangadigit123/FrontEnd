import React, { useRef, useState } from 'react';
import './Contact.css';
import Layout from '../Layout/Layout';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

const Contact = () => {
  const captchaRef = useRef(null);

  const [disableSubmit, setSubmitbutton] = useState(true);

  const [contact, setUser] = useState({
    name: "",
    emailId: "",
    subject: "",
    token:""
  });

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const tokenValue = await captchaRef.current.getValue();
    setUser((prevData) => ({ ...prevData, token: tokenValue }));
    console.log(contact);

    

    try {
      const  response = await axios.post("http://localhost:9000/api/v1/contact", contact)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    // captchaRef.current.reset();

  }



  const handleChange = async(event) => {
    const { name, value } = event.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Layout>
      <h1 style={{ textAlign: 'center', margin: '0' }}>
Contact us
</h1>
    <div className="contact-form-container">
      <form className="contact-form">
       
        {/* Name input */}
        <div className="form-outline mb-4">
          <input type="text" id="form4Example1" onChange={(e) => handleChange(e)} className="form-control" name="name" />
          <label className="form-label" htmlFor="form4Example1" >Name</label>
        </div>

        {/* Email input */}
        <div className="form-outline mb-4">
          <input type="email" id="form4Example2"  onChange={(e) => handleChange(e)} className="form-control" name="emailId" />
          <label className="form-label" htmlFor="form4Example2">Email address</label>
        </div>

        {/* Message input */}
        <div className="form-outline mb-4">
          <textarea  onChange={(e) => handleChange(e)} className="form-control" id="form4Example3" rows="4" name="subject"></textarea>
          <label className="form-label" htmlFor="form4Example3">Message</label>
        </div>

        <ReCAPTCHA
              sitekey="6LeuZEAqAAAAAJD7yqg3tJkeCQ0rclkHU5lmkIzw"
              ref={captchaRef}
              onChange={() => setSubmitbutton(false)}
            />

        {/* Submit button */}
        <button type="button"  onClick={(e) => handleSubmit(e)}
         disabled={disableSubmit} className="btn btn-primary btn-block mb-4">
          Send
        </button>
      </form>
    </div>
    </Layout>
  );
};

export default Contact;
