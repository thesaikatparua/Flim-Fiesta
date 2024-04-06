import React from "react"; // { useState }
import logo from "../../assets/logo.png";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Header = () => {
  
  return (
    <>
      <nav>
        <div className="navleft">
          <div className="logo">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={logo} alt="logo" className="nav_logo" />
            </Link>
          </div>
          <div className="upcoming">
            <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
              <p>Upcoming</p>
            </Link>
          </div>
        </div>

        <div className="navright">
          <Link to="/search" target="_blank" style={{ textDecoration: "none", color: "black" }}>
            <div className="input-wrapper">
              <FaSearch id="search-icon" />
              <p>Search here...</p>
            </div>
          </Link>

          <div className="location">
            <Link to="#" style={{ textDecoration: "none" }}>
              <FaLocationDot id="location-icon" style={{ color: "#000" }} />
            </Link>
          </div>

          <div className="login">
          <Link to="/login" target="_blank"
          style={{ textDecoration: "none" }}>
          <button>Sign In</button>
          </Link>
          </div>

          
        </div>
      </nav>
    </>
  );
};

export default Header;
