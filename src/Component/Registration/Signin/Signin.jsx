import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import "./Signin.css";
import axios from "axios";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

const Signin = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  console.log(user);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    navigate("/register-options");
  };

  const handleSignupLabour = () => {
    navigate("/SignupLabour");
  };

  const handleSignupUser = () => {
    navigate("/SignupUser");
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => signWithGoogle(codeResponse),
    onError: (error) => toast.error("Google login failed. Please try again."),
  });

  const signWithGoogle = async (codeResponse) => {
    try {
      const requestBody = {
        accessToken: codeResponse?.access_token,
      };
      const response = await axios
        .post(`http://localhost:9000/api/v1/user/signInWithGoogle`, requestBody)
        .catch((err) => {
          console.error(err);
          window.alert("An error occurred during login. Please try again.");
        });

      if (response?.status === 200) {
        console.log(response);
        window.alert("Logged in Successfully.");
        const token = response.headers["access_token"];
        localStorage.setItem("token", token);
        // Update auth context state
        updateAuth({
          token: token,
          username: "",
          role: "",
        });
        setTimeout(() => {
          setUser(null);
          navigate("/");
        }, 3000);
      } else if (response?.status === 401) {
        window.alert("Enter valid Credentials...!");
      }
    } catch (error) {
      window.alert("An error occurred during login. Please try again.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    try {
      delete axios.defaults.headers.common["Authorization"];
      const response = await axios.post(
        "http://localhost:9000/api/v1/user/signIn",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        window.alert(response.data);
        // console.log(response.headers);
        localStorage.setItem("token", response.headers["access_token"]);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.headers["access_token"]}`;
        navigate("/");
      } else {
        window.alert("Enter valid Credentials...!");
      }
    } catch (error) {
      console.error("Error:", error);
      // setResponseMessage('Error occurred while creating user');
    }
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
                      name="email"
                      onChange={handleChange}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form1Example13">
                      Email address
                    </label>
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
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
                      onClick={(event) => handleSubmit(event)}
                    >
                      Login In
                    </button>
                  </div>
                  <div className="text-center">
                    <p>
                      Not a member?{" "}
                      <a href="#!" onClick={handleRegisterClick}>
                        Register
                      </a>
                    </p>
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
                      onClick={() => googleLogin()}
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
