import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import "./Signin.css";
import axios from "axios";


const Signin = () => {
 
 
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleRegisterClick = (e) => {
    e.preventDefault();
    navigate('/register-options');
  };

  const handleSignupLabour = () => {
    navigate("/SignupLabour");
  };

  const handleSignupUser = () => {
    navigate("/SignupUser");
  };

  // Google sign in
  const signInWithGoogle = async (event) => {
  
    window.open(
      "http://localhost:8080/realms/LABOURHUB/protocol/openid-connect/auth?response_type=code&client_id=LHFE&kc_idp_hint=google",
      "google login",
      "toolbar=no, menubar=no, width=700, height=700, top=100, left=300"
    );
   
  };

  return (
    <Layout>
      <section className="vh-100">
        <div className="container py-5 h-80">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <div className="form-container5">
                <form>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      // value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      id="form1Example13"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form1Example13">
                      Email address
                    </label>
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="password"
                      // value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="form1Example23"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form1Example23">
                      Password
                    </label>
                  </div>
                  <div className="d-flex justify-content-around align-items-center mb-4">
                    <a href="#!">Forgot password?</a>
                  </div>
                  <div className="d-flex justify-content-around align-items-center mb-4">  
                    <button
                      type="submit"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Sign in
                    </button>
                  </div>
                  <div className="text-center">
                    <p>Not a member? <a href="#!" onClick={handleRegisterClick}>Register</a></p>
                  </div>
                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0 text-muted">
                      OR
                    </p>
                  </div>
                  <div className="text-center">
                    <a
                      data-mdb-ripple-init
                      className="btn btn-primary btn-lg btn-block mx-auto"
                      style={{ backgroundColor: " #dd4b39", width: "300px" }}
                      href="#!"
                      role="button"
                      onClick={signInWithGoogle}
                    >
                      <i className="fab fa-google me-2"></i> Continue with
                      Google
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signin;
