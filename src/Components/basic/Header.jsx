import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Location from "../location/Location";
import Search from "./movieSearch";
import {Name} from "../form/Registration";
import Signup from "../form/Registration";

const Header = (props) => {

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
        <Link style={{ textDecoration: "none" }}>
          <div className="search-bar">
            <FaSearch
              id="search-icon"
              style={{ marginRight: "1rem", color: "black" }}
            />
            <p style={{ color: "black" }}><Search/></p>
           
          </div>
        </Link>
          <Link style={{ textDecoration: "none" }}>
            <div className="location">
              <Location style={{color:"black"}} />
            </div>
          </Link>

        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="login">
            <button>Sign In</button>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Header;
