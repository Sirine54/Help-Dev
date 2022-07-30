import { React, useRef, useState } from "react";
import "./Contact.css";
import code from "../../assets/code.png";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "emailjs-com";

import RenderMap from "../Map/Map";
import Main from "../Home/Main";

function Contact(props) {


  const [hide, setHide] = useState(false);
  const headerRef=useRef()

  let menuOpen = false;

  const menuBurgerOPen=(e)=>{
    var btn = e.target;
    if (!menuOpen) {
      setHide(false);
      headerRef.current.style.transform =
        "translateX(0)";
        menuOpen = true;
      btn.classList.add('open');
      
      console.log(hide)
    } else {
      setHide(true);
      headerRef.current.style.transform =
        "translateX(100%)";
        menuOpen = false;
      btn.classList.remove('open');
     
      
    }
  }
  //Change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();
    emailjs
      .sendForm(
        "service_uc2gy2a",
        "template_a99aec9",
        form.current,
        "9STnmLjPMZWNG_pKl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(this.props);

  const errorNotification = () => toast.error("Fill all fields!!!");
  const errorEmail = () => toast.error("Email not valid !!");
  const successNotification = () => toast.success("Message sent");

  const init = () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  };
  const cheCkEmail = (email) => {
    const reg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  };

  const checkInput = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      errorNotification();
    } else if (!cheCkEmail(email)) {
      errorEmail();
    } else {
      sendEmail();
      successNotification();

      init();
    }
  };

  return (
    <>
    <nav className={color ? "nav-links-scroll" : "nav-links"}>
    <div className="iconPart">
      <img src={code} className="icon" />
      <h3 id="devIconHelp">DevHelp</h3>
    </div>

    <ul className="header-lists" ref={headerRef}>
      <li>
        <NavLink
          to={"/"}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          about
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          services
        </NavLink>
      </li>
      
      <li>
        <NavLink
          to="/"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          Testimonial
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          contact
        </NavLink>
      </li>
      
     
    </ul>

    <div
      className="menu-burger"
      onClick={menuBurgerOPen}
    >
      <div className="menu-btn-burger"></div>
    </div>
  </nav>
  <Main/>
    <div id="contact" className="contact">
 

      <div className="contactContainer">

        <div className="section1" >
      
          <h1>Keep in touch !</h1>
          <p>For any suggestion or feedback please contact us</p>
          <form ref={form} onSubmit={checkInput} className="contact-form">
            <div className="inputBox">
        {/* <AiOutlineUser className="iconLabel"></AiOutlineUser> */}
            <input
              className="name1"
              placeholder="Enter your Name"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /></div>
            <div className="inputBox">
            {/* <AiOutlineMail className="iconLabel"></AiOutlineMail> */}
            <input
              className="email1"
              placeholder="Enter your Email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /></div>
<div className="inputBox">
            {/* <AiOutlineMessage className="iconLabel"></AiOutlineMessage> */}
            <textarea
              className="message1"
              placeholder="Enter your Message"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            /></div>

            <button type="submit" className="sendMessage">
              send<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
              </svg>
              
            </button>
          </form>
        </div>
        
        <div className="section2">

          <div className="contactPEA">
            <div>
                <h3>Adress</h3>
                <p>Tunisia,Greece...</p>
                </div>
                <div>
                <h3>Phone</h3>
                <p>+216 12 345 678</p>
                </div>
                <div>
                <h3>Email</h3>
                <p>saoudisirine@gmail.com</p>
                </div>
                <div>
                <h3>Working Time</h3>
                <p>Monday-Thursday: 08 AM - 05 PM</p>
                </div>
          </div>
            <RenderMap/>
        </div>
        
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>


    <Footer/>
    </>
  );
}

export default Contact;
