import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
import { HashLink as Link} from 'react-router-hash-link';
import code from "../../assets/code.png";

function Header() {
  return (
    <nav className="nav-links">
        <img src={code} className="icon" />
        <ul className='header-lists'>
            <li><Link exact="true" to="/" activeClassName="active">Home</Link></li>
            <li><Link to="#about" activeClassName="active" smooth>about</Link></li>
            <li><Link  to="#resume" activeClassName="active" smooth>resume</Link></li>
            <li><Link to="#contact" activeClassName="active" smooth>contact</Link></li>
            <NavLink to='/SignIn' className='explore'smooth id="log" name="log" onChange={(e)=>e.target.value}>sign In</NavLink>
            <li className="profileData"><Link to='/'><img id="photoImg" ></img></Link>
            <span id='userName'></span></li>
        </ul>
        
    </nav>
  )
}

export default Header