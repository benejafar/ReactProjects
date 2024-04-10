import React from "react";
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";
import logo from "../../assets/assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import upload_icon from "../../assets/assets/upload.png";
import more_icon from "../../assets/assets/more.png";
import notification_icon from "../../assets/assets/notification.png";
import profileIcon from "../../assets/assets/jack.png";

const Navbar = () => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <CiMenuBurger className="menu-icon" size={25} />
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <IoMdSearch />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="upload_icon" />{" "}
        <img src={more_icon} alt="more_icon" />
        <img src={notification_icon} alt="notification icon" />
        <img src={profileIcon} className="user-icon" alt="profile icon" />
      </div>
    </nav>
  );
};

export default Navbar;
