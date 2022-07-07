import {React,useState} from "react";
import "./Sign.css";
import google from "../../assets/google.png";
import { Link ,useNavigate } from "react-router-dom";
import {signInWithPopup,FacebookAuthProvider,GoogleAuthProvider,onAuthStateChanged} from 'firebase/auth'
import{authentification} from '../../firebase-config'

import { useForm } from "react-hook-form";

export default function SignUp() {

  const navigate = useNavigate();
  

  const signInWithFacebook = () =>{
      const provider = new FacebookAuthProvider();
      signInWithPopup(authentification,provider)
      .then((res)=>{
        // console.log(res)
        authentification.onAuthStateChanged(user=>{
          if(user){
            navigate('/', { replace: true })
            console.log(user)
            //user.photoURL
            // alert( `Hello ${user.displayName}! User ID: ${user.uid} userPhoto:${user.photo}`)
            document.getElementById('log').style='display:none'
            document.getElementById('photoImg').src=`${user.photoURL}`
           document.getElementById('userName').innerHTML=`${user.displayName}`
    
          }else{
            alert('none')
          }
         })
      })
      .catch((err)=>{
        console.log(err.message)
      })
  }

  const signInWithGoogle = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentification,provider)
    .then((res)=>{
      authentification.onAuthStateChanged(user=>{
        if(user){
          navigate('/', { replace: true })
          console.log(user)
          //user.photoURL
          // alert( `Hello ${user.displayName}! User ID: ${user.uid} userPhoto:${user.photo}`)
          document.getElementById('log').style='display:none'
          document.getElementById('photoImg').src=`${user.photoURL}`
         document.getElementById('userName').innerHTML=`${user.displayName}`
        }else{
          alert('none')
        }
       })
    })
    .catch((err)=>{
      console.log(err.message)
    })
}


const[name,setUserName]=useState("");

const [email, setEmail] = useState("");
const[confirmEmail,setConfirmEmail]=useState("");
const [password, setPassword] = useState("");
const[confirmPassword,setConfirmPassword]=useState("");
const [error, setError] = useState("");  



// const handleSubmit=(e)=>{
//   e.preventDefault();
//  if(name ===''){
//   // errorForm(setName,'username is ')
//   alert('error!!')
//  }
// }

const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

    ///////////////Error Message///////////////////////// 


const errorForm=(input,message)=>{
 
    const formControl = document.querySelector('.formControl')// .control-form

     
  const small = document.querySelector('small')

  small.innerText = message;
  
  //formControl.className ='control-form error'

  formControl.classList.add('errorMessage');

 

  
}
const checkEmail=(email)=>{
  return `/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(${email})`;

}



  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <h1 className="sign-title">Sign up for free</h1>
      <div className="btnGroup">
        <button className="facebook" onClick={signInWithFacebook}>
          <i class="fa-brands fa-facebook"></i> Sign up with facebook
        </button>
        <button className="google" onClick={signInWithGoogle}>
          <img src={google} className="googleIcon"></img>Sign up with google
        </button>
      </div>
      <span className="divider">or</span>
      <h3>Sign up with your email address</h3>
      
      <div className="inputs">
        <div className="inputBox formControl">
          <input className="name" type="text"onChange={(e) => setUserName(e.target.value)}/>
          <label>UserName</label>
          {/* <small>
         <i class="fa-solid fa-circle-exclamation"></i>gkjbzqkbd 
          </small> */}
        </div>

    

        <div className="inputBox formControl">
          <input className="email" type="email"  onChange={(e) => setEmail(e.target.value)}/>
          <label>Email</label>
          <small>
            <i class="fa-solid fa-circle-exclamation"></i>
          </small>
        </div>

        <div className="inputBox formControl">
          <input className="confirmEmail" type="email"  onChange={(e) => setConfirmEmail(e.target.value)}/>
          <label>Confirm Email</label>
          <small>
            <i class="fa-solid fa-circle-exclamation"></i>
          </small>
        </div>
        <div className="inputBox formControl">
          <input className="password" type="password"  onChange={(e) => setPassword(e.target.value)}/>
          <label>Password</label>
          <small>
            <i class="fa-solid fa-circle-exclamation"></i>
          </small>
        </div>

        <div className="inputBox formControl">
          <input className="confirmPassword" type="password"  onChange={(e) => setConfirmPassword(e.target.value)}/>
          <label>Confirm Password</label>
          <small>
            <i class="fa-solid fa-circle-exclamation"></i>
          </small>
        </div>
      </div>
      <div className="btnSignGroup">
        <button className="sign" type="submit">
        <span className="text">Register</span>
        </button>
        <span>Already have an account  <Link to="/SignIn" className="linked">Sign in</Link></span>
        
        {/* <button className="sign"> <span className="text">Sign In</span></button> */}
      </div>
    </form>
  );
}


