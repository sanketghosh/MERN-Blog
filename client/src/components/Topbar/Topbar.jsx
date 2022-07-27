import React from "react";
import { Link } from "react-router-dom";
import NavIcons from "./Icons/NavIcons";
import "./Topbar.css";

export default function Topbar() {
  return (
    //whole topbar divided into three parts
    <div className="top">
      {/* top left part */}
      <div className="topLeft">
        <NavIcons />
      </div>
      {/* top center part */}
      <div className="topCenter">
        {/* list div  */}

        <ul className="topList">
          {/* list items  */}

          {/* ---- home link ----  */}
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <li className="topListItem">HOME</li>
          </Link>

          {/* ---- about us link ----  */}
          <Link
            to="aboutus"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="topListItem">ABOUT</li>
          </Link>
          {/* ----contact link -----  */}
          <Link
            to="contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="topListItem">CONTACT</li>
          </Link>
          {/* ---- write blog link -----  */}
          <Link
            to="write-blog"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li className="topListItem">WRITE</li>
          </Link>
          {/* ----- logout link ---- */}
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>

      {/* top right part i.e search & prof pic  */}
      <div className="topRight">
        <Link to="user-settings">
          <img
            className="navProfImage"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </Link>
        <svg
          className="navSearchIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
        </svg>
      </div>
    </div>
  );
}
