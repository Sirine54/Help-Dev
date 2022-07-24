import { React, useEffect } from "react";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import coding from '../../assets/coding.jpg'
import data from '../../assets/about/data.png'
import experts from '../../assets/about/experts.png'
import learning from '../../assets/about/online-learning.png'

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div id="about" data-aos="fade-up">
       <h1 className="titleSection">About Help-Dev</h1>
       <div className="aboutParts">
      <div className="part1 AboutImg">
      
        {/* <div className="AboutImg"></div> */}
       
      </div>
     
      <div className="part2">
      <p className="detailsPart">
          An organization built in 2012 to help for building skills,guiding students to start in the right way for their career
        </p>

        <div className="cardAbout">
          <img src={data} alt=""  className="cardAbout_img"/>
          <div className="AboutDescription">
          <h1 className="cardAbout_title">Programming courses</h1>
          <p className="cardAbout_description"> Choose your course suits your career and start learning any time you like</p>
          </div>
        </div>
        <div className="cardAbout">
        <img src={learning} alt=""  className="cardAbout_img"/>
        <div className="AboutDescription">
          <h1 className="cardAbout_title">Certification and more </h1>
          <p className="cardAbout_description">gain your Certification and earn more offer choosing by you ,start your own project with experts or start new course for free</p>
          </div>
        </div>
        <div className="cardAbout">
        <img src={experts} alt=""  className="cardAbout_img"/>
        <div className="AboutDescription">
          <h1 className="cardAbout_title">Experts support </h1>
          <p className="cardAbout_description">Take advantage of gaining experience from great experts that will support you during your project</p>
          </div>
        </div>
        </div>
      </div>

    </div> 
  );
}
