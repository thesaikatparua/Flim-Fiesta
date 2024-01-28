import React from "react";
import './footer.css';



const Footer=()=>{
    return (
        <>
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>For business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/health plan">
                            <p>Health Plan</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Resources</h4>
                        <a href="/resources">
                            <p>Resource center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>
                </div>
                <div className="sb_footer-links-div">
                        <h4>Partners</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
            </div>
            <div className="sb_footer-links_div">
                <h4>comming soon on</h4>
                <div className="socialmedia">
                    <p><image src={fb} alt=""/></p>
                    <p><image src={youtube} alt=""/></p>
                    <p><image src={instagram} alt=""/></p>
                </div>
            </div>


        <div className="sb_footer-below">
            <div className="sb_footer-copyright">
                <p>
                    @{new Date().gettingFullYear()} CodeInn. All right reserved.
                </p>
            </div>
            <div className="sb_footer-below-links">
                <a href="/terms"><p>Terms & Conditions</p></a>
                <a href="/privacy"><p>Privacy</p></a>
                <a href="/security"><p>Security</p></a>
                <a href="/cookie"><p>Cookie Declaration</p></a>
            </div>
        </div>
        </>
    )
}

