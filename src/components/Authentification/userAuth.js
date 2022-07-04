import{authentification} from '../../firebase-config'
import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
 
  


  const userAuth = createUser();

  export function userAuthProvider({children}){
    const [user, setUser] = useState({});

    function logIn(email, password) {
        return signInWithEmailAndPassword(authentification, email, password);
      }
      function signUp(email, password) {
        return createUserWithEmailAndPassword(authentification, email, password);
      }  

      return (
        <userAuthProvider.Provider
          value={{ user, logIn, signUp}}
        >
          {children}
        </userAuthProvider.Provider>
      ); 
  }
