import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" placeholder="username" />
        <label>Email</label>
        <input type="email" placeholder="email" />
        <label>Password</label>
        <input type="password" placeholder="password" />
        <label>Confirm Password</label>
        <input type="password" placeholder="confirm password" />
        <button className="register-button">Register</button>
        <button className="register-login-button">LogIn</button>
      </form>
    </div>
  );
}
