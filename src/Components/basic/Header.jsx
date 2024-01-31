import React from 'react';
import logo from '../../asset/logo real.jpg';
import './Header.css';
import {FaSearch} from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
  // const [input, setInput] = useState("");
  return (
    <> 
  <nav className="nav">
   <img src={logo} alt="" className='logo'/>
    {/* <Link to="/">Logo</Link> */}

    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input placeholder="Search for movie..." /*value={input} onChange={(e) => setInput(e.target.value)}*//>
      </div>

    <div className="menu">
      <span></span>
      <span></span>
      <span></span>
    </div>


    <ul>
      <li>
        <Link to="/top_rated">Top Rated</Link>
      </li>
      <li>
        <Link to="/upcoming">Upcoming</Link>
      </li>
    </ul>
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


