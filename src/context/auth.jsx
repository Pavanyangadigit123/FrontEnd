import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("token");
    // const user = localStorage.getItem("user");
    // const userId = localStorage.getItem("user_id"); // Add this line to get the user ID
    return {
    //   user: user ? JSON.parse(user) : null,
      token: token || "",
    //   user_id: userId || null, // Set user ID
    };
  });

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = auth.token;
  }, [auth.token]);

  const updateAuth = (newAuth) => {
    setAuth(newAuth);
    localStorage.setItem("token", newAuth.token);
    // localStorage.setItem("user", JSON.stringify(newAuth.user));
    // localStorage.setItem("user_id", newAuth.user_id); // Update user ID in local storage
  };

  return (
    <AuthContext.Provider value={[auth, updateAuth]}>
      {children}
    </AuthContext.Provider>
  );
};



const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };