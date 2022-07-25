import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import { HashLink as Link } from "react-router-hash-link";

import engineer from "../../assets/team-engineer.svg";
// Import Swiper styles

import "swiper/css";
import "swiper/css/autoplay";
import "./Main.css";
import back from "../../assets/back.mp4";

function Main() {
  return (
    <>
      <div className="main">
        {/* <video autoPlay loop muted playsInline className='video-back'>
            <source src={back} type="video/mp4"></source>
        </video> */}
<div className="container">
       {/* <img src={engineer} alt="" srcset="" className="engineer" /> */}
        <div className="titleHeader">
          <div className="quote">
            <q>Make it work, make it right, make it fast.</q>
            <span>– Kent Beck</span>
          </div>
          <h1 id="h1">
            We lead you to the suitable path we provide opportunities to gain
            skills
          </h1>
          <small>HelpDev services available for everyone</small>
          <div className="btnGroup">
            <Link to="#about" className="explore btn" smooth>
              Discover
            </Link>
            <Link to="#contact" className="contactBtn btn" smooth>
              Contact
            </Link>
          </div>
        </div>
</div>



<div class="custom-shape-divider-bottom-1658534101">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
      </div>
    </>
  );
}

export default Main;

// const words=[
//   {id:0,value:"apple"},
//   {id:1,value:"mango"},
//   {id:2,value:"banana"}
// ];
// const [wordData,setWordData]=useState(words[0].value)
// const handleClick=(index)=>{
//   console.log(index)
//   const WordSlider = words[index].value;
//   setWordData(WordSlider)
// }

// <div className='wordsDots'>
//       <div className='words'>{wordData}</div>
//       <div className='dots'>
//         {words.map((data,i)=>
//           <h1 onClick={()=>handleClick(i)}>.</h1>
//         )}
//       </div>

//       </div>
