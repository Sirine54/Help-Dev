import React from 'react'
import Explore from './Explore'
import './Home.css'
import Main from './Main'
import About from '../About/About'


// window.addEventListener("scroll", fade);
// function fade() {
//   var faders = document.querySelectorAll(".fade-in");
//   for (var i = 0; i < faders.length; i++) {
//     var windowHeight = window.innerHeight;
//     var faderTop = faders[i].getBoundingClientRect().top;
//     var faderPoint = 150;
//     if (faderTop < windowHeight - faderPoint) {
//       faders[i].classList.add("appear");
//     }
//     //else{
//     //   faders[i].classList.remove('appear')
//     // }
//   }
// }

export default function Home() {
  return (
    <div id="home">
        <Main/>
        <Explore/>
        <About/>
    </div>
  )
}
