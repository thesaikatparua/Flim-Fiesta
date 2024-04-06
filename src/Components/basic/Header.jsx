import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import { FaCity } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const [selected, setSelected] = useState('');
  const [isActive, setIsActive] = useState(false);
  const options = [
    { name: 'Kolkata', icon: <FaCity /> },
    { name: 'Hyderabad', icon: <FaCity /> },
    { name: 'Mumbai', icon: <FaCity /> },
    { name: 'Delhi-NCR', icon: <FaCity /> },
    { name: 'Bengaluru', icon: <FaCity /> },
    { name: 'Chennai', icon: <FaCity /> },
    { name: 'Pune', icon: <FaCity /> },
  ];

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
          <Link to="/search" style={{ textDecoration: "none", color: "black" }}>
            <div className="input-wrapper">
              <FaSearch id="search-icon" />
              <p>Search here...</p>
            </div>
          </Link>

          <div className="dropdown">
            <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
              {selected}
              <Link to="/dropdown" style={{ textDecoration: "none" }}>
                <span><FaLocationDot /></span>
              </Link>
            </div>
            {isActive && (
              <div className="dropdown-content">
                {options.map((option) => (
                  <div
                    key={option.name}
                    onClick={() => {
                      setSelected(option.name);
                      setIsActive(false);
                    }}
                    className="dropdown-item"
                  >
                    {option.icon}
                    <span style={{ marginLeft: '8px' }}>{option.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="login">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button>Sign In</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
