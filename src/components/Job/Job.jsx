import React from 'react'
import './Job.css'
import { NavLink } from 'react-router-dom'
function Job() {
  return (
    <div id="job">
        <div className="jobCard">
            
            <h1>Need a job?</h1>
            <p>Halp-Dev provide exclusive job opportunities for skilled people </p>
  
            <NavLink to="/JobListing" className='contactBtn btnJ' smooth >Apply for The post</NavLink>
        </div>
    </div>
  )
}

export default Job