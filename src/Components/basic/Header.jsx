import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCity } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Location from "../location/Location";
import Search from "./movieSearch";

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
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">
            <img
              src={logo}
              alt="logo"
              style={{ width: "8rem", height: "3rem" }}
            />
          </div>
        </Link>
        <div className="search-bar">
          <FaSearch
            id="search-icon"
            style={{ marginRight: "1rem", color: "black" }}
          />
          <p style={{ color: "black" }}><Search/></p>
        </div>

        <div className="navright">
          <div className="dropdown">
            <div className="dropdown-btn" style={{ textDecoration: "none" }} onClick={() => setIsActive(!isActive)}>
              {selected}
              <span><FaLocationDot /></span>
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

          <Link to="/search" style={{ textDecoration: "none", color: "black" }}>
            <div className="input-wrapper">
              <FaSearch id="search-icon" />
              <p>Search here...</p>
            </div>
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="location">
              <Location style={{color:"black"}} />
            </div>
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="login">
              <button>Sign In</button>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
