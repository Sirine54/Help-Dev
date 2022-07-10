import {React,useState} from 'react'
import './Sign.css'
import { Link, useNavigate} from 'react-router-dom'
import {signInWithPopup,FacebookAuthProvider,GoogleAuthProvider,onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import{auth} from '../../firebase-config'
import google from "../../assets/google.png";



export default function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const signWithEmail = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then((res)=>{
     
      auth.onAuthStateChanged(user=>{
        if(user){
          navigate('/', { replace: true })
          console.log(user)
          //user.photoURL
          // alert( `Hello ${user.displayName}! User ID: ${user.uid} userPhoto:${user.photo}`)
          document.getElementById('log').style='display:none'
        user.displayName=document.getElementById('userName').innerHTML
      
        //  document.getElementById('userName').innerHTML=`${user.displayName}`
  
        }else{
          alert('none')
        }
       })
    }).catch((err)=>{
      console.log(err)
    })
  }

  const signInWithFacebook = () =>{
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth,provider)
      .then((res)=>{
        // console.log(res)
        auth.onAuthStateChanged(user=>{
          if(user){
            navigate('/', { replace: true })
            console.log(user)
            //user.photoURL
            // alert( `Hello ${user.displayName}! User ID: ${user.uid} userPhoto:${user.photo}`)
            document.getElementById('log').style='display:none'
            document.getElementById('photoImg').style='display:block'
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
    signInWithPopup(auth,provider)
    .then((res)=>{
      auth.onAuthStateChanged(user=>{
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
    <>
      <Link to='/' spy={true} smooth={true}><h1 className="homePage">Home</h1></Link>
    <div id='signIn'>
      <form
      className="form form1"
      onSubmit={signWithEmail}>
   
      <h1 className="sign-title">Sign in for free</h1>
      <div className="btnGroup">
        <button className="facebook" onClick={signInWithFacebook}>
          <i class="fa-brands fa-facebook"></i> Sign in with facebook
        </button>
        <button className="google" onClick={signInWithGoogle}>
          <img src={google} className="googleIcon" ></img>Sign in with google
        </button>
      </div>
      <span className="divider">or</span>
      <h3>Sign in with your email address</h3>

      <div className="inputsSignIn">
        


        <div className="inputBox">
          <input className="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
          <label>Email</label>
          {/* <small className="errorMessage"><i class="fa-solid fa-circle-exclamation"></i></small> */}
        </div>

        <div className="inputBox">
          <input className="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
          <label>Password</label>
          {/* <small className="errorMessage"><i class="fa-solid fa-circle-exclamation"></i></small> */}
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
     </> 
  )
}

