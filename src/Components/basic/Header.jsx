import React from "react";
import logo from "../../asset/logo real.jpg";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
  
  return (
    <>
      <nav className="nav">
        {/* This is logo */}
        <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>

        <li>
            <Link to="/movies/upcoming">Upcoming</Link>
        </li>

        <div className="input-wrapper">
          <FaSearch id="search-icon" />
          <input
            placeholder="Search for movie..." 
          />
        </div>

        <button>Sign In</button>
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
