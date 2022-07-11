import { React, useState } from "react";
import { useFormik,Formik, Form } from "formik";
import { TextField } from './TextField';
import "./Sign.css";
import google from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase-config";
// import * as Yup from 'yup'
import { useToast } from "@chakra-ui/react";
import { Schema } from "./Schema";


export default function SignUp() {

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    signUp();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    signUp();
    // actions.resetForm();
  };
  // useState

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        setName: "",
        setEmail: "",
        setPassword: "",
      },
      validationSchema: Schema,
      
     
    });

 
    


  const navigate = useNavigate();

  const toast = new useToast();

  // Sign up with regular email

  const signUp = (e) => {
    e.preventDefault()
    const{email,password}=e.target.elements

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/SignIn", { replace: true });
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // sign up with facebook

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        // console.log(res)
        auth.onAuthStateChanged((user) => {
          if (user) {
            navigate("/", { replace: true });
            console.log(user);
            //user.photoURL
            // alert( `Hello ${user.displayName}! User ID: ${user.uid} userPhoto:${user.photo}`)
            document.getElementById("photoImg").style = "display:block";
            document.getElementById("log").style = "display:none";
            document.getElementById("photoImg").src = `${user.photoURL}`;
            document.getElementById(
              "userName"
            ).innerHTML = `${user.displayName}`;
          } else {
            alert("none");
          }
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // sign up with google

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            navigate("/", { replace: true });
            console.log(user);
            //user.photoURL
            // alert( `Hello ${user.displayName}! User ID: ${user.uid} userPhoto:${user.photo}`)
            document.getElementById("log").style = "display:none";
            document.getElementById("photoImg").style = "display:block";
            document.getElementById("photoImg").src = `${user.photoURL}`;
            document.getElementById(
              "userName"
            ).innerHTML = `${user.displayName}`;
          } else {
            alert("none");
          }
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


  // const handleChange=(e)=>{
  //   e.preventDefault();
  //   console.log("user created :",user)
  // }

  ///////////////Error Message/////////////////////////


  return (
    <>
      <Link to="/" spy={true} smooth={true}>
        <h1 className="homePage">Home</h1>
      </Link>
      {/* form validation */}

      <Formik  

          
        validationSchema={Schema}
        onSubmit={values => {
          console.log(values)
        }}

    >
    {(props) => (

      <Form className="form" onSubmit={signUp}>
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
             {/* <TextField label="UserName" name="name" type="text" id="name" />
              <TextField label="Email" name="email" type="email" id="email"/>
              <TextField label="Password" name="password" type="password" id="password" />  */}
          <div className="inputBox">
            <label htmlFor="name">UserName</label>
            <input
              value={values.name}
              onChange={handleChange}
              id="name"
              type="text"
              onBlur={handleBlur}
              className={`form-control shadow-none ${
                errors.name && touched.name && "is-invalid"
              }`}
            />
            {errors.name && touched.name && (
              <p className="errorMessage">{errors.name}</p>
            )}
          </div>

          <div className="inputBox">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control shadow-none ${
                errors.email && touched.email && "is-invalid"}`}
            />
            {errors.email && touched.email && (
              <p className="errorMessage">{errors.email}</p>
            )}
          </div>
          <div className="inputBox">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control shadow-none ${
                errors.password && touched.password && "is-invalid"
              }`}
            />
            {errors.password && touched.password && (
              <p className="errorMessage">{errors.password}</p>
            )}
          </div>
        </div>

        <div className="btnSignGroup">
          <button className="sign" type="submit">
            <span className="text">Register</span>
          </button>
          <span>
            Already have an account{" "}
            <Link to="/SignIn" className="linked">
              Sign in
            </Link>
          </span>
        </div>
      </Form>
      )} 
    </Formik>  
    </>
  );
}
