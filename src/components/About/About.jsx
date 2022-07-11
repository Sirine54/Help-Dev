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
        <h1 className="titleSection">Techniques</h1>

        <p className="detailsPart">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

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
      </div>
    </div>
  );
}
