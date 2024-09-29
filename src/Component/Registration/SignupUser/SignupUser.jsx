import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import "./SignupUser.css";
import { storage } from "../../../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupUser = () => {
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
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [otp, setOtp] = useState("");

  const navigate=useNavigate();
  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  // Password validation function
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(validatePassword(newPassword));
  };

  const handleFileChange = async (e) => {
    try {
      const file = e.target.files[0];
      await uploadProfilePicture(file); // Call the function to upload the file
    } catch (error) {
      console.log(error);
    }
  };

  const uploadProfilePicture = async (file) => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const storageRef = ref(storage, `profile_pics/${file.name}`);
    // const storageRef = ref(storage, 'profile_pics/' + file.name)
    try {
      // Upload the file to Firebase Storage
      await uploadBytes(storageRef, file);
      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);
      console.log("File available at", downloadURL);
      setProfilePic(downloadURL);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const emailVerify = async () => {
    if (password !== confirmPassword) {
      alert("Please confirm your password");
    } else {
      try {
        const response = await axios
          .post("http://localhost:9000/api/v1/validator", {
            value: email,
          })
          .catch(() =>
            alert("Internal server error while generating otp")
          );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios
        .post("http://localhost:9000/api/v1/validator/verify", {
          value: email,
          otp: otp,
        })
        .catch(() => window.alert("Invalid otp enter valid otp"));
      if (response.status === 200) {
        setOtp("");
        window.alert(response?.data);
        const userData = {
          firstName,
          lastName,
          email,
          phoneNumber,
          area,
          city,
          state,
          country,
          zipCode,
          profilePic,
          password,
        };
        console.log(userData);
    
        if (password !== confirmPassword) {
          window.alert("Please confirm your password");
        }
    
        const emailIsValid = validateEmail(email);
        const passwordIsValid = validatePassword(password);
    
        setIsEmailValid(emailIsValid);
        setIsPasswordValid(passwordIsValid);
    
        if (!emailIsValid) {
          alert("Please enter a valid email");
          return;
        } else if (!passwordIsValid) {
          alert("Please enter a valid  password according to the guidelines.");
          return;
        }
    
        try {
          const response = await fetch("http://localhost:9000/api/v1/user/signUp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });
    
          if (response.ok) {
            alert("Registration is Completed");
            navigate("/signin");
            window.location.reload();
          } else {
            alert("Error in registration");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      area,
      city,
      state,
      country,
      zipCode,
      profilePic,
      password,
    };
    console.log(userData);

    if (password !== confirmPassword) {
      window.alert("Please confirm your password");
    }

    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);

    setIsEmailValid(emailIsValid);
    setIsPasswordValid(passwordIsValid);

    if (!emailIsValid) {
      alert("Please enter a valid email");
      return;
    } else if (!passwordIsValid) {
      alert("Please enter a valid  password according to the guidelines.");
      return;
    }

    try {
      const response = await fetch("http://localhost:9000/api/v1/user/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Registration is Completed");
      } else {
        alert("Error in registration");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Layout>
      <h1
        className="text-center mt-3"
        style={{ fontSize: "30px", marginBottom: "5px" }}
      >
        Register
      </h1>
      <div className="container signup-container1 p-4">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-control"
                  id="firstName"
                  placeholder="Enter first name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="form-control"
                  id="state"
                  placeholder="Enter state"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="form-control"
                  id="lastName"
                  placeholder="Enter last name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="form-control"
                  id="city"
                  placeholder="Enter city"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={`form-control ${
                    !isPasswordValid ? "is-invalid" : ""
                  }`}
                  id="password"
                  placeholder="Enter password"
                />
                {!isPasswordValid && (
                  <small className="text-danger">
                    Password must be at least 8 characters long, contain 1
                    uppercase letter, 1 lowercase letter, 1 number, and 1
                    special character.
                  </small>
                )}
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="city">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`form-control ${
                    !isEmailValid ? "is-invalid" : ""
                  }`}
                  id="email"
                  placeholder="Enter email"
                />
                {!isEmailValid && (
                  <small className="text-danger">
                    Please enter a valid email address.
                  </small>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="area">Area</label>
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="form-control"
                  id="area"
                  placeholder="Enter area"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="form-control"
                  id="zipCode"
                  placeholder="Enter zip code"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="form-control"
                  id="country"
                  placeholder="Enter country"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label htmlFor="profilePic">Profile Picture</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e)}
                  className="form-control"
                  id="profilePic"
                />
              </div>
            </div>
          </div>
          <div className="text-center1">
            <button
              type="button"
              onClick={() => emailVerify()}
              className="btn btn-primary21"
               data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div
        className="modal fade"
        id="myModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        // ref={modalRef}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Verify your Email
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p>
                Before completing the registration process please enter the otp
                which has been sent your <b> '{email}'</b>
              </p>
              <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
               
                onClick={() => verifyOtp()}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignupUser;
