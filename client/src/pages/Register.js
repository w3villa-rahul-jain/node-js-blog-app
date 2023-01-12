import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Register = () => {
  return (
    <div className="main-container">
      <div className="nav-container">
        <h2 className="main-text">Register</h2>
        <input
          type="text"
          className="input-field"
          placeholder="Username"
          required
        />
        <input
          type="email"
          className="input-field"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          required
        />
        <button className="cm-btn">Register</button>
        <p className="error">this is an error</p>
        <span className="account-link">
           Have an Account please
          <Link className="all-links" to="/login">
            Login Now
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
