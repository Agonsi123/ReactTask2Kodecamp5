import React from 'react';
import '../footer/Footer.css';
import image13 from '../../assets/images/image13.svg';
import facebook from "../../assets/images/facebook.svg";
import email from "../../assets/images/email icon.svg";
import LinkedIn from "../../assets/images/Linked In.svg";
import location from "../../assets/images/location icon.svg";
import phone from "../../assets/images/phone icon.svg";
import pininterest from "../../assets/images/pininterest.svg";
import twitter from "../../assets/images/twitter.svg";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="FooterUp">
        <div className="FooterLeft">
          <Link to="./">
            <img className="image13" src={image13} alt="Logo" />
          </Link>
          <div className="FooterLeftContent">
            <div className="information">
              <h5>Information</h5>
              <Link to="/">
                <p>Main</p>
              </Link>
              <Link to="/gallery">
                <p>Gallery</p>
              </Link>
              <Link to="/projects">
                <p>Projects</p>
              </Link>
              <Link to="/certifications">
                <p>Certifications</p>
              </Link>
              <Link to="/contacts">
                <p>Contacts</p>
              </Link>
            </div>
            <div className="contacts">
              <h5>Contacts</h5>
              <div className="contactsContent">
                <div className="address">
                  <img src={location} alt="" />
                  <p>
                    1234 Sample Street <br /> Austin Texas 78704
                  </p>
                </div>
                <div className="contacts1">
                  <div className="phone">
                    <img src={phone} alt="" />
                    <p>080.335.33213</p>
                  </div>
                  <div className="email">
                    <img src={email} alt="" />
                    <p>sampleemail@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="FooterRight">
          <h5>Social Media</h5>
          <div className="socials">
            <Link to="#">
              <img src={facebook} alt="Facebook" />
            </Link>
            <Link to="#">
              <img src={twitter} alt="Twitter" />
            </Link>
            <Link to="#">
              <img src={LinkedIn} alt="LinkedIn" />
            </Link>
            <Link to="#">
              <img src={pininterest} alt="PinInterest" />
            </Link>
          </div>
        </div>
      </div>
      <div className="FooterDown">&copy; 2025 All Rights Reserved</div>
    </div>
  );
}

export default Footer