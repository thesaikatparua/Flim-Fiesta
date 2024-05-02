import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import EmailIcon from "@mui/icons-material/Email";
import { GiFilmProjector } from "react-icons/gi"; //upcoming 
import { MdMovieFilter } from "react-icons/md"; //toprated 
import { BiSolidOffer } from "react-icons/bi"; //offer
import { HiOutlineBuildingOffice } from "react-icons/hi2"; //cinemas
import { IoMdContact } from "react-icons/io"; // contact us 
import "./Footer.css";
import "../../media query/Footerresp.css";

const fetchPopularMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=b935b5ca8bde9733059fef48810c9af7&language=en-US"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  return response.json();
};

// Function to truncate movie titles
const truncateTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.slice(0, maxLength) + "...";
  } else {
    return title;
  }
};

function Footer() {
  const {
    data: popularMovies,
    error,
    isLoading,
  } = useQuery("popularMovies", fetchPopularMovies);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <footer>
      <div className="footer-row">
        <div className="footer-col">
          <Link to="/">
            <img src={logo} alt="logo" className="hero-logo" />
          </Link>
          <div className="address">
            <p>Kalyani, Nadia</p>
            <p>West Bengal, PIN:721435, India</p>
            <p className="email-id">filmfiesta@gmail.com</p>
            <h4>+91 - 0123456789</h4>
          </div>
        </div>

        <div className="footer-col">
          <h2>Links</h2>
          <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
            <p id="link">Upcoming...</p>
          </Link>
          <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
            <p id="link">Toprated...</p>
          </Link>
          <Link to="/offer" style={{ textDecoration: "none" }}>
            {" "}
            {/*offer */}
            <p id="link">Offer</p>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            {" "}
            {/*offer */}
            <p id="link">Cinemas</p>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p id="link">Contact Us</p>
          </Link>
        </div>

        <div className="footer-col">
          <h2>Movies</h2>
          {popularMovies.results.slice(0, 5).map((movie) => (
            <Link
              key={movie.id}
              style={{ textDecoration: "none", color: "snow" }}
              to={`/movie/${movie.id}`}
            >
              <p id="link">{truncateTitle(movie?.original_title || "", 15)}</p>
            </Link>
          ))}
        </div>

        <div className="footer-col">
          <h2>Newsletter</h2>
          <div className="form">
            <EmailIcon />{" "}
            <input type="text" placeholder="Enter your email id" />
            <button>Submit</button>
          </div>

          <div id="icon">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      
      <div className="icon-resp">{/* responsive footer icons */}
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
        <GiFilmProjector id="link" style={{color: "rgb(51, 51, 56)" }}/>
        
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
        <MdMovieFilter id="link" style={{color: "rgb(51, 51, 56)" }}/>
        
        </Link>
        <Link to="/offer" style={{ textDecoration: "none" }}>
          {" "}
          <BiSolidOffer id="link" style={{color: "rgb(51, 51, 56)" }}/>
         
        </Link>
        <Link to="#" style={{ textDecoration: "none" }}>
          {" "}
          <HiOutlineBuildingOffice id="link" style={{color: "rgb(51, 51, 56)" }}/>
          
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
        <IoMdContact id="link" style={{color: "rgb(51, 51, 56)" }}/>
       
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
