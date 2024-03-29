import React from 'react'
import Explore from './Explore'
import './Home.css'
import Main from './Main'
import About from '../About/About'
import Services from '../Services/Services'

import Testimonials from '../Testimonials/Testimonials'
import Job from '../Job/Job'




export default function Home() {
  return (
    <div id="home">
        <Main/>
        <div className='extra'>
        <About/>
        <Explore/>
        <Services/>
        <Job/>
        <Testimonials/>
      
     
        </div>
       
    </div>
  )
}
