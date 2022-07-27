import React from "react";
import "./Settings.css";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Settings() {
  return (
    // whole settings container
    <div className="settings">
      {/* a wrapper  */}
      <div className="settingsWrapper">
        {/* two titles : update and delete  */}
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>

        {/* update email, name etc form  */}
        <form className="settingsForm">
          {/* profile pic stuffs */}

          {/* profile pic label  */}
          <label>Profile Picture</label>
          {/* prof pic settings  */}
          <div className="userProfPic">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            {/* update profile pic file input label  */}
            <label htmlFor="fileInput">
              <svg
                className="settingsProfPicIcon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
              </svg>
              {/* input of that profile image  */}
              <input type="file" id="fileInput" className="fileInput" />
            </label>
          </div>

          {/* stuffs to update  */}
          <label>Username</label>
          <input type="text" placeholder="username" />
          <label>Email</label>
          <input type="email" placeholder="email id" />
          <label>Password</label>
          <input type="password" placeholde="password" />

          {/* update button  */}
          <button className="settingsSubmitButton">Update Settings</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
