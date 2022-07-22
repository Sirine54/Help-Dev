import React from 'react'
import Explore from './Explore'
import './Home.css'
import Main from './Main'
import About from '../About/About'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'
import Offers from '../Offers/Offers'





export default function Home() {
  return (
    <div id="home">
        <Main/>
        <div className='extra'>
        <Explore/>
        <Services/>
        <About/>
        
     
        </div>
        <Contact/>
    </div>
  )
}
