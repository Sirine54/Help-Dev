import { React, useEffect } from "react";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div id="about" data-aos="fade-up">
      <div className="part1">
        <h1 className="titleSection">About us</h1>

        <p className="detailsPart">
          An organization built in 2012 by person1,person2,person3 
        </p>
      </div>
{/* 
      <div className="row1-container">
        <div className="box box-down cyan">
          <h2>Search</h2>
          <p>Monitors activity to identify project roadblocks</p>
          <img
            src="https://assets.codepen.io/2301174/icon-supervisor.svg"
            alt=""
          />
        </div>

        <div className="box red">
          <h2>Team Work</h2>
          <p>
            Scans our talent network to create the optimal team for your project
          </p>
          <img
            src="https://assets.codepen.io/2301174/icon-team-builder.svg"
            alt=""
          />
        </div>

        <div className="box box-down blue">
          <h2>Code</h2>
          <p>
            Uses data from past projects to provide better delivery estimates
          </p>
          <img
            src="https://assets.codepen.io/2301174/icon-calculator.svg"
            alt=""
          />
        </div>
      </div>
      <div className="row2-container">
        <div className="box orange">
          <h2>Ideas</h2>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
        </div>
      </div>*/}
    </div> 
  );
}
