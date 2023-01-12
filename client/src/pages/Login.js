import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Login = () => {
  return (
    <div className="main-container">
      <div className="nav-container">
        <h2 className="main-text">Login</h2>
        <input
          type="text"
          className="input-field"
          placeholder="Username"
          required
        />
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          required
        />
        <button className="cm-btn">Login</button>
        <p className="error">this is an error</p>
        <span className="account-link">
          Don't have an Account{" "}
          <Link className="all-links" to="/register">
            Register
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
