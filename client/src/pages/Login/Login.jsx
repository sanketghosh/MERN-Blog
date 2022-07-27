import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="email" placeholder="email" />
        <label>Password</label>
        <input type="password" placeholder="password" />
        <button className="login-button">LogIn</button>
        <button className="login-register-button">Register</button>
      </form>
    </div>
  );
}
