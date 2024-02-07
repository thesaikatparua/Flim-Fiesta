import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h1>Movies Now Showing</h1>
            <h5>
              The Marvles | Wonka | Migration | Aquaman and the lost kingdom
            </h5>
            <h1>Movies Now Showing In Kolkata</h1>
            <h5>Fighter | Dunki | Animal | Pradhan</h5>
            <h1 className="list-unstyled">
              <h4>Help</h4>
            </h1>
          </div>

          {/* Column3 */}
          <div className="footer-social">
            <ui className="footer-social--icons">
              <div>
                <FaFacebookF className="icons" />
              </div>

              <div>
                <FaYoutube className="icons" />
              </div>

              <div>
                <FaInstagram className="icons" />
              </div>
            </ui>
          </div>
        </div>
      </div>
      <hr />
      <div className="row"></div>
    </div>
  );
}

export default Footer;
