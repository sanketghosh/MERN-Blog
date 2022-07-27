import React from "react";
import "./Header.css";

export default function Header() {
  return (
    // whole header component
    <div className="header">
      {/* two header titles  */}
      <div className="headerTitles">
        {/* one small and another large title  */}
        <span className="headerTitleSmall">React & Node</span>
        <span className="headerTitleLarge">Blog</span>
      </div>
      {/* header image  */}
      <img
        src="https://images.pexels.com/photos/4578665/pexels-photo-4578665.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="react img"
        className="headerImage"
      />
    </div>
  );
}
