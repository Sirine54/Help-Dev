import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import './Header.css'
import { HashLink as Link} from 'react-router-hash-link';
import code from "../../assets/code.png"

function Header() {
  return (
    <nav className="nav-links">
        <img src={code} className="icon" />
        <ul className='header-lists'>
            <li><Link exact="true" to="/" activeClassName="active">Home</Link></li>
            <li><Link to="#about" activeClassName="active" smooth>about</Link></li>
            <li><Link  to="#resume" activeClassName="active" smooth>resume</Link></li>
            <li><Link to="#contact" activeClassName="active" smooth>contact</Link></li>
            <button className='explore'>sign In</button>
        </ul>
        
    </nav>
  )
}

export default Header