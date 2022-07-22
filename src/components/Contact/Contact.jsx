import { React, useRef, useState } from "react";
import "./Contact.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

import {AiOutlineMail,AiOutlineMessage,AiOutlineUser} from "react-icons/ai"


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "emailjs-com";

import RenderMap from "../Map/Map";

function Contact() {
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
  const [message, setMessage] = useState("");

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
    <div id="contact" className="contact">
      
        <h1 className="titleSection">Contact</h1>

      <div className="contactContainer">

        <div className="section1">
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
  );
}

export default Contact;
