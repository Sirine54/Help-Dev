import React, { useEffect } from "react";
import "./Explore.css";
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from 'react-countup';


import learning from '../../assets/about/learning.png'
import idea from '../../assets/about/idea.png'
import subscribe from '../../assets/about/subscribe.png'
import calendar from '../../assets/about/calendar.png'


export default function Explore() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="exploreDiv" id="exploreDiv" >
      <div className="partExp">
        {/* <h1 className="titleSection">Why Dev-Help</h1> */}

        <div className="detailsExample">
          <div className="box" data-aos="fade-up">
            <img src={subscribe} alt="" srcset="" className="iconExp"/>
            <h5><CountUp 
            start={0}
            end={40250}
            duration={60} className='h5'/></h5>
            <span>subscribers</span>
          </div>
          <div className="box"data-aos="fade-up" data-aos-delay="1000" >
          <img src={learning} alt="" srcset="" className="iconExp"/>
            <h5><CountUp 
            start={0}
            end={12}
            duration={6} 
             className='h5' suffix="M"/></h5>
            <span>applications</span>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay="2000" >
          <img src={idea} alt="" srcset="" className="iconExp"/>
            <h5><CountUp 
            start={0}
            end={3000}
            duration={60} 
             className='h5' /></h5>
            <span>projects</span>
          </div>
          <div className="box"data-aos="fade-up" data-aos-delay="3000" >
          <img src={calendar} alt="" srcset="" className="iconExp"/>
            <h5><CountUp 
            start={0}
            end={10}
            duration={10} 
             className='h5' /></h5>
            <span>years of work</span>
          </div>
        </div>
      </div>

    </div>
  );
}
