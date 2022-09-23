import React, { useState,useRef} from "react";
// import { NavLink } from "react-router-dom";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";

import code from "../../assets/code.png";
import { NavLink } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);


 
  const menuBurgerOPen=()=>{
    setShow(!show)
    console.log('clicked')
    }
  
  //Change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);


  return (
    <div className={color ? "nav-links-scroll" : "nav-links"}>
      <div className="iconPart">
        <img src={code} className="icon" alt="code"/>
        <h3 id="devIconHelp">HelpDev</h3>
      </div>

      <div className={`navbar ${show ? "open" : "hide"}` }>
        <nav className="header-lists">
          <Link
            activeClass="active"
            to={"/"}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={()=>{
              setShow(false)
                }}
          >
            Home
          </Link>
        
          <Link
            activeClass="active"
            to="#about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={()=>{
              setShow(false)
                }}
          >
            about
          </Link>
       
          <Link
            to="#services"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={()=>{
              setShow(false)
                }}
          >
            services
          </Link>
      
          <Link
            to="#testimonial"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            onClick={()=>{
              setShow(false)
                }}
          >
            Testimonial
          </Link>
        
          <NavLink
            to="/Contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            onClick={()=>{
              setShow(false)
                }}
          >
            contact
          </NavLink>
  
        
        {/* <NavLink
          to="/SignIn"
          className="explore"
          smooth
          id="log"
          name="log"
          onChange={(e) => e.target.value}
      >
          sign In
        </NavLink>
        <li className="profileData">
          <img id="photoImg"></img>
          <span id="userName"></span>
        </li> */}
      </nav>

      <button
        className="menu-burger"
        onClick={menuBurgerOPen}
      >
        <span className="menu-btn-burger"></span>
      </button>
    </div>

    </div>
  );
}

export default Header;
