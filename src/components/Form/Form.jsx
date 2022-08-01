import React,{useState,useEffect} from 'react'
import { storage } from '../../firebase-config';
import firebase from '../../firebase-config';
import {QuerySnapshot} from  "firebase/firestore";
import {
    FormControl,
    FormLabel,
    Input,Select
  } from '@chakra-ui/react'
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
  
import { db } from '../../firebase-config';

import './Form.css'
import {
  ref,
  uploadBytesResumable , getDownloadURL 
} from "firebase/storage";
import job from '../../assets/feeling.svg'
import code from "../../assets/code.png";
import { NavLink } from "react-router-dom";
import { DotLoader } from "react-spinners";

import {userContext} from '../Job/JobListing'


function Form(props) {
  const navigate = useNavigate();

   
    const [file, setFile] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [education, setEducation] = useState("");
    const [position, setPosition] = useState("");
    const errorNotification = () => toast.error("Please fill all the fields");
    const errorEmail = () => toast.error("Email or phone not valid !!");
    const successNotification = () => toast.success("Thanks for submitting");
  

    const cheCkEmail = (email) => {
      const reg =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reg.test(email);
    };
    const checkPhone = (phone) => {
      const regexPhoneNumber =/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
      return regexPhoneNumber.test(phone);

    }

    const init = () => {
      document.getElementById('first').value=""
      document.getElementById('last').value=""
      document.getElementById('email').value=""
      document.getElementById('phone').value=""
      document.getElementById('education').value=""
      document.getElementById('position').value=""
     
      document.getElementById('file').value=""
    };

    const checkInput = (e) => {
      e.preventDefault();
  
      if (first === "" ||last === "" || email === "" || education === "" || phone === "") {
        errorNotification();
      } else if (!cheCkEmail(email)||!checkPhone(phone)) {
        errorEmail();
      } else if(!file){
        toast.error("Please add you cv");
       
        }else {
        // handleUpload()
        // add();
        asyncData()
  
        init();
      }
    };
  
    async function asyncData() {
      let handleUp = await handleUpload();
      await add(handleUp);
   }
const add=()=>{
  db.collection("user_data")
  .add({first:first,
  last:last,
  email:email,
  phone:phone,
  education:education,
  position:position
})
  .then(()=>{
 successNotification();
 
//  navigate('/');
  })
}



 
// Handles input change event and updates state


    function handleChange(event) {
      setFile(event.target.files[0]);
  }


    const [percent, setPercent] = useState(0);

    const handleUpload = () => {
      if (!file) {
        toast.error("Please add you cv");
      }

      const storageRef = ref(storage, `/files/${file.name}`);

      // progress can be paused and resumed. It also exposes progress updates.
      // Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
          "state_changed",
          (snapshot) => {
              const percent = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );

              // update progress
              setPercent(percent);
              
          },
          (err) => console.log(err),
          () => {
              // download url
              getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                  console.log(url);
              });
          }
      );
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
    {loading ? (
      <DotLoader
       className="loading_page"
       size={150}
       color={"var(--dark-orange)"}
       loading={loading}
     />
) : (
   <>
        <div className='headerJob'>
        <nav className= "nav-links-scroll">
      <NavLink to="/" className="iconPart">
        <img src={code} className="icon" />
        <h3 id="devIconHelp">DevHelp</h3>
      </NavLink>

      <ul className="header-lists">
    
        <li>
          <NavLink
            activeClass="active"
            to="/JobListing"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
         
          >
            Back
          </NavLink>
        </li>
        
      </ul>
      <NavLink
            activeClass="active"
            to="/JobListing"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            id="back"
          >
           &larr;
          </NavLink>

    </nav>
  </div>

    <div className='formF'>
   
      <div className='formDivider'>
        
        <div className="formA">
        <h1>Apply For the job</h1>
        <FormControl >
          <div className='inputFormF'>
        <FormLabel>First name</FormLabel>
        <Input type="text" placeholder='First name' id="first" onChange={(e) => setFirst(e.target.value)} />
        </div>
        <div className='inputFormF'>
        <FormLabel>Last name</FormLabel>
        <Input type="text" placeholder='Last name' id="last"onChange={(e) => setLast(e.target.value)}/>
        </div>
        <div className='inputFormF'>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder='Email' id="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='inputFormF'>
        <FormLabel>Education</FormLabel>
        <Input type="text" placeholder='Education' id="education" onChange={(e) => setEducation(e.target.value)}/>
        </div>
        <div className='inputFormF'>
        <FormLabel>Position</FormLabel>
        <select placeholder='position' id="position" onChange={(e) => setPosition(e.target.value)}>
          <option value="Senior Frontend Developer_Remote" >Senior Frontend Developer_Remote</option>
          <option value="Fullstack Developer_Remote">Fullstack Developer_Remote</option>
          <option value="Junior Frontend Developer_Tunisia Only">Junior Frontend Developer_Tunisia Only</option>
          <option value="Junior Frontend Developer_Tunisia">Junior Frontend Developer_Tunisia</option>
          <option value="Software Engineer_Remote">Software Engineer_Remote</option>
          <option value="Junior Backend Developer_Tunisia Only">Junior Backend Developer_Tunisia Only</option>
          <option value="Junior Frontend Developer_Greece">Junior Frontend Developer_Greece</option>
          <option value="Full Stack Engineer_France">Full Stack Engineer_France</option>
          <option value="Front-end Dev_Greece">Front-end Dev_Greece</option>
        </select>
       
        
        </div>
        <div className='inputFormF'>
        <FormLabel>Phone Number</FormLabel>
        <Input type="phone" placeholder='Phone Number' id="phone" onChange={(e) => setPhone(e.target.value)}/>
        </div>
        <div className='inputFormF'>
        <FormLabel>Drop your cv</FormLabel>
        <Input type="file"  accept='.doc,.docx,application/pdf' onChange={handleChange} id="file" />
        <p>{percent}% done</p>
        </div>
         <button type="submit" className='btnF' onClick={checkInput}>Send</button>
        </FormControl>
        </div>
        <div className='photoControl'>
          <img src={job} alt="" srcset="" className="imageF" />
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
          pauseOnHover/> 
        </div>
        </>
            )}
        </>
  )
}

export default Form