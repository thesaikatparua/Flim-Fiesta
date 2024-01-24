import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
        <div className="header">
            <div className="headerLeft">
                <Link to="/" style={{textDecoration:"none"}}><h1 className="header_icon">FlimFesta</h1></Link>
                <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    </>
  )
}

export default Header;   