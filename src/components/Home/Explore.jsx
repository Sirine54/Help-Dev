import React, { useEffect } from "react";
import "./Explore.css";
import laptop from "../../assets/laptop.svg";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Explore() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="exploreDiv" id="exploreDiv" data-aos="fade-right">
      <div className="part1">
        <h1 className="titleSection">What's Dev-Help</h1>

        <p className="detailsPart">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="detailsExample">
          <div className="box">
            <h5>64464</h5>
            <span>subscribers</span>
          </div>
          <div className="box">
            <h5>125700</h5>
            <span>applications</span>
          </div>
          <div className="box">
            <h5>10</h5>
            <span>years of work</span>
          </div>
        </div>
      </div>
      <div>
        <img src={laptop} alt="laptop" srcset=""  className="part2"/>
        </div>
    </div>
  );
}
