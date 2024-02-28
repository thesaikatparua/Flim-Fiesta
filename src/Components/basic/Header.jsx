import React from "react"; // { useState }
import logo from "../../assets/logo.png";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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
          <Link to="movie/search" style={{ textDecoration: "none",color:"black"}}>
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

          <Link to="#" style={{ textDecoration: "none" }}>
            {isAuthenticated ? (
              // for logout
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Sign Out
              </button>
            ) : (
              //for login
              <button onClick={() => loginWithRedirect()}>
                <p>Sign In</p>
              </button>
            )}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
