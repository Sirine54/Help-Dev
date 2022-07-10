import {React,useState} from "react";
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import "./Sign.css";
import google from "../../assets/google.png";
import { Link ,useNavigate } from "react-router-dom";
import {signInWithPopup,FacebookAuthProvider,GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword} from 'firebase/auth'
import{auth} from '../../firebase-config';
import * as Yup from 'yup'
import { useToast} from "@chakra-ui/react";



export default function SignUp() {

  const navigate = useNavigate();

  const toast = new useToast()

  
  // Sign up with regular email

  const signUp = (e)=>{
 
  
    e.preventDefault()

  createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential)=>{
    const user=userCredential.user;
    navigate('/SignIn', { replace: true })
          console.log(user)
        
        
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


const[user,setUser]=useState({name:'',email:'',password:''})

// const handleChange=(e)=>{
//   e.preventDefault();
//   console.log("user created :",user)
// }

    ///////////////Error Message///////////////////////// 
  

  const validate = Yup.object({
    
    name:Yup.string()
    .max(15,'Must be less than 15 characters')
    .required('Username Required!'),
    email:Yup.string()
    .email('Email is invalid')
    .required('Email Required!'),
    password:Yup.string()
    .min(6,'Password must be at least 6')
    .required('Password Required')
  })

  const handleChange = (e) =>{
   setUser({...user,[e.target.name]:e.target.value});
  }
  

  return (

    <>
      <Link to='/' spy={true} smooth={true}><h1 className="homePage">Home</h1></Link>
            {/* form validation */}
   
<Formik 


  initialValues={{
    name:'',
    email:'',
    password:''
  }}
  
  validationSchema={validate}
  onSubmit={signUp}
    >
   {(props) => (

        <Form className="form">
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
              <TextField label="UserName" name="name" type="text" id="name" />
              <TextField label="Email" name="email" type="email" id="email"/>
              <TextField label="Password" name="password" type="password" id="password" /> 


         
          </div>

          <div className="btnSignGroup">
          <button className="sign" type="submit">
            <span className="text">Register</span>
        </button>
        <span>Already have an account  <Link to="/SignIn" className="linked">Sign in</Link></span>
          </div>
        </Form>
      )}
    </Formik>



    </>
  );
}


