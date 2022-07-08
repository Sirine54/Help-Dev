import React, { useState,useEffect } from "react";
import { NavLink} from "react-router-dom";
import './Header.css'
import {HashLink as Link} from 'react-router-hash-link';




import code from "../../assets/code.png";

function Header() {

  //Change nav color when scrolling 
  const[color,setColor]=useState(false)
  const changeColor = () =>{
    if(window.scrollY>=90){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll',changeColor)



  let menuOpen = false;

  
  return (
    <nav className={color ? 'nav-links-scroll':'nav-links'}>
        <div className="iconPart"><img src={code} className="icon" />
      <h3 id="devIconHelp">DevHelp</h3></div>
        <ul className='header-lists'>
            <li><Link  activeClass="active" to={'#home'} spy={true} smooth={true} offset={-100} duration={500} >Home</Link></li>
            <li><Link activeClass="active" to="#about" spy={true} smooth={true} offset={-100} duration={500} >about</Link></li>
            <li><Link  to="#services" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} >services</Link></li>
            <li><Link to="#contact" activeClass="active"spy={true} smooth={true} offset={-150} duration={500} >contact</Link></li>
            <NavLink to='/SignIn' className='explore'smooth id="log" name="log" onChange={(e)=>e.target.value}>sign In</NavLink>
            <li className="profileData"><img id="photoImg" ></img>
            <span id='userName'></span></li>
        </ul>

        <div className="menu-burger" onClick={(e)=>{
         
         console.log(e.target)
         var btn =e.target
          if(!menuOpen){
            document.querySelector('.header-lists').style.transform='translateX(0)'
            btn.classList.add('open');
            menuOpen = true;
          }else{
            document.querySelector('.header-lists').style.transform='translateX(100%)'
            btn.classList.remove('open');
            
            menuOpen = false;
          }
        }}>
            <div className="menu-btn-burger"></div>
        </div>
        
    </nav>
  )
}

export default Header