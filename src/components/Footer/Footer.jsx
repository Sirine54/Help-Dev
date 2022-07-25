import React from "react";
import "./Footer.css";
import {GiPositionMarker} from "react-icons/gi"
import {MdEmail} from "react-icons/md"
import {BsFillTelephoneFill,BsSuitHeartFill} from "react-icons/bs"
import { HashLink as Link } from "react-router-hash-link";

import code from "../../assets/code.png";

function Footer() {
  return (

    <>
    <div className="footer">
    <div className="iconPart">
        <img src={code} className="icon" />
        <h3 id="devIconHelp">DevHelp</h3>
      </div>
      <ul className="footer_part1">
        <h1>Follow us</h1>
     <div>
        <li>
          <ion-icon name="logo-google"></ion-icon>
        </li>
        <li>
          <ion-icon name="logo-instagram"></ion-icon>
        </li>
        <li>
          <ion-icon name="logo-facebook"></ion-icon>
        </li>

        <li>
          <ion-icon name="logo-linkedin"></ion-icon>
        </li>
        <li>
          <ion-icon name="logo-github"></ion-icon>
        </li>
        </div>
      </ul>
     
      <ul className="footer_part2">
        <h1>Menu</h1>
        <div className="menu_footer">
        <div>
      <li>
          <Link
            activeClass="active"
            to={"#home"}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link>
        </li>
        
        <li>
          <Link
            to="#services"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            services
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="#about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            about
          </Link>
        </li>
        </div>
        <div>
        <li>
          <Link
            to="#testimonial"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Testimonial
          </Link>
        </li>
        <li>
          <Link
            to="#contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            contact
          </Link>
        </li>
        </div>
        </div>
      </ul>
      <ul className="footer_part3">
    <h1>Contact</h1>
        <li className="f3">
          <MdEmail className="MdEMail"></MdEmail>
          <p>saoudisirine@gmail.com</p>
        </li>

        <li className="f3">
          <BsFillTelephoneFill className="BsFillTelephoneFill"></BsFillTelephoneFill>
          <p type="telephone">+216 12 345 678</p>
        </li>
        <li className="f3">
          <GiPositionMarker className="GiPositionMarker"></GiPositionMarker>
       <p>Tunisia</p>
       </li>
      </ul>
    </div>
    <div className="right_section">
      <small>Copyright © 2012 -{new Date().getFullYear()} all right reserved. Made with <BsSuitHeartFill style={{color:'red'}}></BsSuitHeartFill> Sirine</small>
    </div>
    </>
  );
}

export default Footer;
