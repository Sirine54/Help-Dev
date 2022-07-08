import {React,useState} from "react";
// import { useFormik } from "formik";
import "./Sign.css";
import google from "../../assets/google.png";
import { Link ,useNavigate } from "react-router-dom";
import {signInWithPopup,FacebookAuthProvider,GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword} from 'firebase/auth'
import{auth} from '../../firebase-config';



export default function SignUp() {

  const navigate = useNavigate();



  // Sign up with regular email

  const signUp = (e)=>{
    e.preventDefault()

  createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential)=>{
    const user=userCredential.user;
    navigate('/SignIn', { replace: true })
          console.log(user)
        //   //user.photoURL
        //   // alert( `Hello ${user.displayName}! User ID: ${user.uid} userPhoto:${user.photo}`)
        //   document.getElementById('log').style='display:none'
        //   // document.getElementById('photoImg').src=`${user.photoURL}`
        //  document.getElementById('userName').innerHTML=name
        
  }).catch((err)=>{
    console.log(err)
  })
}

// sign up with facebook

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
            document.getElementById('photoImg').style='display:block'
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

  // sign up with google

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


// useState

const[name,setName]=useState("");
const [email, setEmail] = useState("");

const [password, setPassword] = useState("");




    ///////////////Error Message///////////////////////// 
    


  return (

    <>
      <Link to='/' spy={true} smooth={true}><h1 className="homePage">Home</h1></Link>
    <form
      className="form"
      onSubmit={signUp}
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


            {/* form validation */}
      
      <div className="inputs">
        <div className="inputBox">
          <input className="name" type="text"  name='name' onChange={(e)=>setName(e.target.value)}
          />
          <label>UserName</label>
           <small className="errorMessage"><i class="fa-solid fa-circle-exclamation"></i></small>
        </div>

    

         <div className="inputBox">
          <input className="email" type="email" name='email' onChange={(e)=>setEmail(e.target.value)} 
    />
          <label>Email</label>
          <small className="errorMessage"><i class="fa-solid fa-circle-exclamation"></i></small>
        </div>

        {/* <div className="inputBox">
          <input className="confirmEmail" type="email"  onChange={(e) => setConfirmEmail(e.target.value)}
           />
          <label>Confirm Email</label>
          <small className="errorMessage"><i class="fa-solid fa-circle-exclamation"></i></small>
        </div> */}
        <div className="inputBox">
          <input className="password" type="password"  onChange={(e) => setPassword(e.target.value)}
           />
          <label>Password</label>
          <small className="errorMessage"><i class="fa-solid fa-circle-exclamation"></i></small>
        </div>

        {/* <div className="inputBox">
          <input className="confirmPassword" type="password"  onChange={(e) => setConfirmPassword(e.target.value)}
           />
          <label>Confirm Password</label>
          <small className="errorMessage"><i class="fa-solid fa-circle-exclamation"></i></small>
        </div> */}
      </div>

      <div className="btnSignGroup">
        <button className="sign" type="submit">
        <span className="text">Register</span>
        </button>
        <span>Already have an account  <Link to="/SignIn" className="linked">Sign in</Link></span>
        
      </div>
    </form>
    </>
  );
}


