import React from 'react'
import Explore from './Explore'
import './Home.css'
import Main from './Main'
import About from '../About/About'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'




export default function Home() {
  return (
    <div id="home">
        <Main/>
        <Explore/>
        <About/>
        <Services/>
        <Contact/>
        
    </div>
  )
}
