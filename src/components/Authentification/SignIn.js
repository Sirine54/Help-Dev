import {React} from 'react'
import './Sign.css'
import { Link, useNavigate} from 'react-router-dom'


import {signInWithPopup,FacebookAuthProvider,GoogleAuthProvider,onAuthStateChanged} from 'firebase/auth'
import{authentification} from '../../firebase-config'
import google from "../../assets/google.png";



export default function SignIn() {

 

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
  return (
    <div id='signIn'>
      <form
      className="form form1"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("clicked");
      }}>
   
      <h1 className="sign-title">Sign in for free</h1>
      <div className="btnGroup">
        <button className="facebook" onClick={signInWithFacebook}>
          <i class="fa-brands fa-facebook"></i> Sign in with facebook
        </button>
        <button className="google" onClick={signInWithGoogle}>
          <img src={google} className="googleIcon"></img>Sign in with google
        </button>
      </div>
      <span className="divider">or</span>
      <h3>Sign in with your email address</h3>

      <div className="inputsSignIn">
        


        <div className="inputBox">
          <input className="email" type="email" />
          <label>Email</label>
          <span className="errorMessage">
            <i class="fa-solid fa-circle-exclamation"></i>
          </span>
        </div>

        <div className="inputBox">
          <input className="password" type="password" />
          <label>Password</label>
          <span className="errorMessage">
            <i class="fa-solid fa-circle-exclamation"></i>
          </span>
        </div>

     </div>

       <div className="btnSignGroup">
       <button className="sign" type="submit"> <span className="text">Sign In</span></button>
       <span>Don't have an account  <Link to="/SignUp" className="linked">Sign up</Link> </span>
        {/* <button className="sign" >
        <span className="text">Register</span>
        </button> */}
       
      </div>
     </form>
     </div>
  )
}

