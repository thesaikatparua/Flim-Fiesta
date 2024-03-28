import React from "react";
import "./Footer.css";
// import { FaFacebookF } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <Link to="/">
            <img src={logo} alt="logo" className="hero-logo" />
          </Link>
          <h4>
            Lorem ipsum dolor sit amet consectetur
            <br /> adipisicing elit. Sapiente inventore amet <br />
            perspiciatis dolorum rem nesciunt. Nisi
            <br /> magnam cupiditate, praesentium explicabo.
          </h4>
          <Link to="/">
            <img src={logo} alt="logo" className="hero-logo" />
          </Link>
          <h4>
            Lorem ipsum dolor sit amet consectetur
            <br /> adipisicing elit. Sapiente inventore amet <br />
            perspiciatis dolorum rem nesciunt. Nisi
            <br /> magnam cupiditate, praesentium explicabo.
          </h4>
        </div>
        <div className="col">
          <h2>Office</h2>
          <p>Kalyani, Nadia</p>
          <p>West Bengal, PIN:721435, India</p>
          <p className="email-id">filmfiesta@gmail.com</p>
          <h4>+91 - 0123456789</h4>
        </div>
        <div className="col">
          <h2>Links</h2>
          <ul>
            <li>
              <Link to="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>Upcoming</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>Private Policy</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>Contact us</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2>Newsletter</h2>
          <form>
            <i class="fa-regular fa-envelope"></i>
            <input type="email" placeholder="Enter your email id" required />
            <buttom type="submit">
              <i class="fa-solid fa-arrow-right"></i>
            </buttom>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
