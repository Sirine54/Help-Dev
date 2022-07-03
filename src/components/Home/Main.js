import React from 'react'
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from './Slider';


// Import Swiper styles

import 'swiper/css';
import 'swiper/css/autoplay';
import './Main.css'
import back from '../../assets/back.mp4'

function Main() {
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



 
  return (
    <>
    <div className='main'>
        <video autoPlay loop muted playsInline className='video-back'>
            <source src={back} type="video/mp4"></source>
        </video>
        {/* <div className='wordsDots'>
        <div className='words'>{wordData}</div>
        <div className='dots'>
          {words.map((data,i)=>
            <h1 onClick={()=>handleClick(i)}>.</h1>
          )}
        </div>
        </div> */}
         <h1 className='header'><q>Make it work, make it right, make it fast. </q><span>– Kent Beck</span></h1>
         <Slider/>
         <button className='explore'>Discover</button>
    </div>
    
     </>
  )
}

export default Main