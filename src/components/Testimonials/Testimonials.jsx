import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css'
import { Avatar} from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import {ImQuotesLeft} from 'react-icons/im'

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const Testimonials = () => {
 
 
  return (
    <div
      className="testimonial" id="testimonial"
      // style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div className='sliderTest'>
        <h1 style={{ marginBottom:"9%" }} className="titleSection">TESTIMONIALS</h1>

        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>

          <Card 
          img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" 
          parag="I enjoy having courses in HelpDev agency,so happy to be surrounded by experts that helped me to launch my project and get a job as a designer"
          name="PAULA WILSON"
          job="UX/UI Designer"
          />
          <Card 
          img="data:image/jpeg;base64,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" 
          parag="I was able to add extra skills to my background and communicating with developers to get some new experience .Perfect place to start your way"
          name="Thomas D.E"
          job="Font-End developer"
          />
         
          <Card 
          img="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" 
          parag="I finish my studies and i was lost i don't know where to start and not sure about my skills until i meet great experts from HelpDev that lead me and help me to build my first project and lauch it.Really grateful to be part of it."
          name="Tom Schneider"
          job="FullStack developer"/>
          <Card 
          img="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?w=2000"
          parag="As Team leader of HelpDev i was able to get some courses to make my communication skills better,this is an extra bonus to work here"
          name="Samantha Haus."
          job="Team Leader" />
          <Card
           img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"
           parag="My friend suggest me to subscibe here that's the best decision ever. I am able to achieve my dream and getting a job and meeting new firends."
          name="Lara Croft"
          job="Web Designer"
           />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img,parag,name,job }) => {
  return (
    <div className='cardTest'>

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />    <ImQuotesLeft className='quoteIcon'/>
        
      <p>{parag}</p>

      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span  style={{ fontWeight: 500, color: "var(--dark-orange)" }}>{name}</span> ,{job}
  
      </p>
      
    </div>
  );
};

export default Testimonials;