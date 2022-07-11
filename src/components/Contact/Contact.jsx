import { React, useRef, useState } from "react";
import "./Contact.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

import { Button, ButtonGroup } from "@chakra-ui/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
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
      <div className="part1">
        <h1 className="titleSection">Contact</h1></div>

      <div className="contactContainer">
        <div className="section1">
          <h1>Keep in touch !</h1>
          <p>For any suggestion or feedback send message here</p>
          <form ref={form} onSubmit={checkInput}>
            <input
              className="name"
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              className="email"
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <textarea
              className="message"
              placeholder="Message"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit" className="sendMessage">
              send<i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
        <div className="section2">
            <h1>You can find us here</h1>
            <div className="mapBox">
            <div class="mapouter"><div class="gmap_canvas"><iframe width="500" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=Tunisia&t=&z=7&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br/><a href="https://www.embedgooglemap.net">embedgooglemap.net</a></div></div>
            </div>
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
