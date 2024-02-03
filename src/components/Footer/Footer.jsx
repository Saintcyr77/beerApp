import React from "react";
import "../Footer/footer.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGooglePlus,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer-left col-md-4 col-sm-6">
          <p class="about">
            <span> About the company</span> Inclusive Fintech 50 (IF50) is a
            global innovation competition that aims to identify and elevate
            cutting-edge emerging inclusive fintechs that have the potential to
            drive financial inclusion. IF50 uncovers high-potential start-up
            fintechs addressing limitations in financial services delivery for
            unserved or underserved customers. Over the last three competitions,
            IF50 has attracted over 1,000 eligible applicants. Past winners have
            collectively increased their funding by $620 million in the year
            following their win. Winners benefit from access to zero-cost tools
            such as Visa’s Practical Business Skills and Practical Money Skills.
          </p>
          <div className="icons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGooglePlus} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div class="footer-center col-md-4 col-sm-6">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span> Street name and number</span> City, Country
            </p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p> (+91) 0000 000 000</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="#"> https://www.inclusivefintech50.com</a>
            </p>
          </div>
        </div>
        <div class="footer-right col-md-4 col-sm-6">
          <h2>
            {" "}
            <img src={logo} alt="Company Logo" height="115px" />
          </h2>
          <p class="menu">
            <a href="#"> Home</a> |<a href="#"> About</a> |
            <a href="#"> Services</a> |<a href="#"> Portfolio</a> |
            <a href="#"> News</a> |<a href="#"> Contact</a>
          </p>
          <p class="name"> Inclusive Fintech 50&copy; 2024 Made By the OWL</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
