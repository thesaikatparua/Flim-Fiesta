import React from "react"; // { useState }
import logo from "../../assets/logo.png";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
// import { FaUserLarge } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {

  // const [action,setAction] = useState("Sign Up");
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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
          <div className="input-wrapper">
            <FaSearch id="search-icon"  />
            <input placeholder="Search for movie..." />
          </div>

          <div className="location">
            <Link to="#" style={{ textDecoration: "none" }}>
              <FaLocationDot id="location-icon" style={{color:"#000"}} />
            </Link>
          </div>

          <div className="signIn">
            <Link to="/movies/login" style={{ textDecoration: "none" }}>
              <button>Sign In</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

