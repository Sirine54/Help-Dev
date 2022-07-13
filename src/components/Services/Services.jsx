import React from 'react'
import './Services.css'
import programming from '../../assets/programming.png'

function Services() {
  return (
    <div className='service' data-aos="fade-right" id="services">
       <div className='part1'>
          <h1 className="titleSection">
            Services
          </h1>
         
            
        </div>
        <div className='part2-services'>
            <ul className='service-lists'>
              <div className="service-card">
              <li>
              <div className='icon-service'><ion-icon name="bulb-outline" role="img" class="md hydrated" aria-label="bulb outline"></ion-icon></div>
              <div className='service-content'>
                <h3>Idea and Topics</h3>
                <p>Gaining ideas from experts and guide you to work smart</p>
              </div>
             </li>
              </div>
              <div className="service-card">
              <li>
              <div className='icon-service'><ion-icon name="rocket-outline" role="img" class="md hydrated" aria-label="rocket outline"></ion-icon></div>
              <div className='service-content'>
                <h3>Launching your Project</h3>
                <p>Get ready to start your own project with technical experts guide and launching it</p>
              </div>
             </li>
              </div>
            </ul>

        

        <div className='figure'>
          <img src={programming} alt="" srcset="" />
        </div>
        <ul className='service-lists'>
              <div className="service-card">
              <li>
              <div className='icon-service'><ion-icon name="terminal-outline" role="img" class="md hydrated" aria-label="terminal outline"></ion-icon></div>
              <div className='service-content'>
                <h3>Learning</h3>
                <p>Have courses to study development from zero to hero</p>
              </div>
             </li>
              </div>
              <div className="service-card">
              <li>
              <div className='icon-service'><ion-icon name="code-slash-outline" role="img" class="md hydrated" aria-label="code slash outline"></ion-icon></div>
              <div className='service-content'>
                <h3>Development</h3>
                <p>Give the opportunity to learn skills of coding</p>
              </div>
             </li>
              </div>
            </ul>
            </div>
    </div>
  )
}

export default Services