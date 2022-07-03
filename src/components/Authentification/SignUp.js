import React from "react";
import "./Sign.css";
import google from "../../assets/google.png";

export default function SignUp() {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("clicked");
      }}
    >
      <h1 className="sign-title">Sign up for free</h1>
      <div className="btnGroup">
        <button className="facebook">
          <i class="fa-brands fa-facebook"></i> Sign up with facebook
        </button>
        <button className="google">
          <img src={google} className="googleIcon"></img>Sign up with google
        </button>
      </div>
      <span className="divider">or</span>
      <h3>Sign up with your email address</h3>
      <div className="inputs">
        <div className="inputBox">
          <input className="name" type="text" required />
          <label>First Name</label>
          <span className="errorMessage">
            <i class="fa-solid fa-circle-exclamation"></i> error
          </span>
        </div>

        <div className="inputBox">
          <input className="family" type="text" />
          <label>Last Name</label>
          <span className="errorMessage">
            <i class="fa-solid fa-circle-exclamation"></i>error
          </span>
        </div>

        <div className="inputBox">
          <input className="email" type="email" />
          <label>Email</label>
          <span className="errorMessage">
            <i class="fa-solid fa-circle-exclamation"></i>error
          </span>
        </div>

        <div className="inputBox">
          <input className="confirmEmail" type="email" />
          <label>Confirm Email</label>
          <span className="errorMessage">
            <i class="fa-solid fa-circle-exclamation"></i>error
          </span>
        </div>
        <div className="inputBox">
          <input className="password" type="password" />
          <label>Password</label>
          <span className="errorMessage">
            <i class="fa-solid fa-circle-exclamation"></i>error
          </span>
        </div>

        <div className="inputBox">
          <input className="confirmPassword" type="password" />
          <label>Confirm Password</label>
          <span className="errorMessage">
            <i class="fa-solid fa-circle-exclamation"></i>error
          </span>
        </div>
      </div>
      <div className="btnSignGroup">
        <button className="sign" type="submit">
          Register
        </button>
        <button className="sign">Sign In</button>
      </div>
    </form>
  );
}
