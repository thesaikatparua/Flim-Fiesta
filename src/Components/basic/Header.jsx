import React from "react";
import logo from "../../assets/logo real.jpg"
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout} = useAuth0();

  return (
   <>
   <nav>
      <Link className="logo" to="/" style={{ textDecoration: "none" }}><img src={logo} alt="logo" className="logo" />
      </Link>
      
      <div className="navleft">
      <Link className="upcoming" to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
      </div>

    <div className="navright">
    <div className="input-wrapper">
          <FaSearch id="search-icon" />
          <input
            placeholder="Search for movie..." 
          />
        </div>

        <div className="location">
        <Link to="#" style={{ textDecoration: "none" }}>
        <FaLocationDot id="location-icon" />
        </Link>
        </div>

        
        <Link to ="#" style={{ textDecoration: "none" }}>
        {isAuthenticated ? (
          // for logout
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Sign Out</button>
          ) : (
            //for login
        <button onClick={() => loginWithRedirect()}>Sign In</button>
        )}
        </Link>

    </div>
   </nav>
   </>
  );
};

export default Header;

// import React from 'react'
// import './Header.css';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <>
//       <div className="header">
//         <div className="headerLeft">
//           {/* logo start*/}
//           <Link to="/" style={{ textDecoration: "none" }}><h1 className="header_icon">FlimFesta</h1></Link>
//           {/* logo end*/}
//           {/* <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link> */}
//           <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
//           <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Header;

