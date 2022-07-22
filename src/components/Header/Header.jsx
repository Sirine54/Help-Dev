import React, { useState,useRef} from "react";
// import { NavLink } from "react-router-dom";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";

import code from "../../assets/code.png";

function Header() {
  const [hide, setHide] = useState(false);
  const headerRef=useRef()

//   const lists = document.querySelectorAll('.header-lists li');
//  lists.forEach((list)=>{
//     list.onClick()
//  })
  // console.log(list)
  // list.forEach(list=>{
  //   list.onClick()
  // })

  let menuOpen = false;

  const menuBurgerOPen=(e)=>{
    var btn = e.target;
    if (!menuOpen) {
      setHide(false);
      headerRef.current.style.transform =
        "translateX(0)";
        menuOpen = true;
      btn.classList.add('open');
      
      console.log(hide)
    } else {
      setHide(true);
      headerRef.current.style.transform =
        "translateX(100%)";
        menuOpen = false;
      btn.classList.remove('open');
     
      
    }
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
    <nav className={color ? "nav-links-scroll" : "nav-links"}>
      <div className="iconPart">
        <img src={code} className="icon" />
        <h3 id="devIconHelp">DevHelp</h3>
      </div>

      <ul className="header-lists" ref={headerRef}>
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
        <li>
          <Link
            to="#blog"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            blog
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
      </ul>

      <div
        className="menu-burger"
        onClick={menuBurgerOPen}
      >
        <div className="menu-btn-burger"></div>
      </div>
    </nav>
  );
}

export default Header;
