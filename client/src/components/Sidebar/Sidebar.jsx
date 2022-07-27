import React from "react";
import "./Sidebar.css";
import NavIcons from "../Topbar/Icons/NavIcons";

export default function Sidebar() {
  return (
    // whole sidebar div
    <div className="sidebar">
      {/* sidebar item 1  */}
      <div className="sidebarItem">
        {/* title of that item */}
        <span className="sidebarTitle">ABOUT ME</span>
        {/* img of first sidebar  */}
        <img
          src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        {/* paragraph of 1st sidebar  */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          itaque perferendis natus, sed assumenda, totam rem eius nisi veniam ut
          odio ducimus quibusdam blanditiis enim ullam! Saepe necessitatibus eum
          fugit soluta, labore rem asperiores, dolores quis temporibus at optio!
        </p>
      </div>

      {/* sidebar item 2  */}
      <div className="sidebarItem">
        {/* title of that item  */}
        <span className="sidebarTitle">CATEGORIES</span>
        {/* sidebar list  */}
        <ul className="sidebarList">
          {/* list items  */}
          <li className="sidebarListItem">LIFE</li>
          <li className="sidebarListItem">MUSIC</li>
          <li className="sidebarListItem">STYLE</li>
          <li className="sidebarListItem">SPORT</li>
          <li className="sidebarListItem">CINEMA</li>
          <li className="sidebarListItem">TECH</li>
        </ul>
      </div>

      {/* sidebar item 3 div  */}
      <div className="sidebarItem">
        {/* title of that item  */}
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <NavIcons />
        </div>
      </div>
    </div>
  );
}
