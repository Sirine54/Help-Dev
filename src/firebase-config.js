
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBG71U2UklCfw7BD0YQeP7d6XC7ajzGNAI",
  authDomain: "final-project-3a878.firebaseapp.com",
  projectId: "final-project-3a878",
  storageBucket: "final-project-3a878.appspot.com",
  messagingSenderId: "549168248717",
  appId: "1:549168248717:web:27d891d90e21f21536efc4",
  measurementId: "G-RWN4Z9L0KJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig)

export const auth = getAuth(app);
export const storage = getStorage(app)


export const db=firebaseApp.firestore();