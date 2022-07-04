import {React,useState} from "react";
import "./Sign.css";
import google from "../../assets/google.png";
import { Link ,useNavigate } from "react-router-dom";
import {signInWithPopup,FacebookAuthProvider,GoogleAuthProvider,onAuthStateChanged} from 'firebase/auth'
import{authentification} from '../../firebase-config'

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

const[name,setName]=useState("");
const[last,setLast]=useState("");
const [email, setEmail] = useState("");
const[confirmEmail,setConfirmEmail]=useState("");
const [password, setPassword] = useState("");
const[confirmPassword,setConfirmPassword]=useState("");
const [error, setError] = useState("");  



const handleSubmit=(e)=>{
  e.preventDefault();
 if(name ===''){
  // errorForm(setName,'username is ')
  alert('error!!')
 }
}


    ///////////////Error Message///////////////////////// 


// const errorForm=(input,message)=>{
//   const formControl = input.parentElement; // .control-form
//   const small = document.querySelector('small')

//   small.innerText = message;
  
//   //formControl.className ='control-form error'
//   formControl.classList.add('errorMessage');


  
// }
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
        <div className="inputBox">
          <input className="name" type="text"onChange={(e) => setName(e.target.value)} />
          <label>First Name</label>
          <small className="formControl" onChange={(e) => setError(e.target.value)} >
            <i class="fa-solid fa-circle-exclamation"></i> 
          </small>
        </div>

        <div className="inputBox">
          <input className="family" type="text"  onChange={(e) => setLast(e.target.value)}/>
          <label>Last Name</label>
          <small className="formControl" >
            <i class="fa-solid fa-circle-exclamation"></i>
          </small>
        </div>

        <div className="inputBox">
          <input className="email" type="email"  onChange={(e) => setEmail(e.target.value)}/>
          <label>Email</label>
          <small className="formControl">
            <i class="fa-solid fa-circle-exclamation"></i>
          </small>
        </div>

        <div className="inputBox">
          <input className="confirmEmail" type="email"  onChange={(e) => setConfirmEmail(e.target.value)}/>
          <label>Confirm Email</label>
          <small className="formControl">
            <i class="fa-solid fa-circle-exclamation"></i>
          </small>
        </div>
        <div className="inputBox">
          <input className="password" type="password"  onChange={(e) => setPassword(e.target.value)}/>
          <label>Password</label>
          <small className="formControl">
            <i class="fa-solid fa-circle-exclamation"></i>
          </small>
        </div>

        <div className="inputBox">
          <input className="confirmPassword" type="password"  onChange={(e) => setConfirmPassword(e.target.value)}/>
          <label>Confirm Password</label>
          <small className="formControl">
            <i class="fa-solid fa-circle-exclamation"></i>
          </small>
        </div>
      </div>
      <div className="btnSignGroup">
        <button className="sign" type="submit">
        <span className="text">Register</span>
        </button>
        <span>Already have an account  <Link to="/" className="linked">Sign in</Link></span>
        
        {/* <button className="sign"> <span className="text">Sign In</span></button> */}
      </div>
    </form>
  );
}


