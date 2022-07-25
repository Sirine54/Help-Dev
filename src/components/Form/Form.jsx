import React,{useState} from 'react'
import { storage } from '../../firebase-config';
import firebase from '../../firebase-config';
import {QuerySnapshot} from  "firebase/firestore";
import {
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'
import { useEffect } from 'react';
import { db } from '../../firebase-config';

function Form() {
 
 
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [cv, setCv] = useState("");
    const [education, setEducation] = useState("");


const add=()=>{
  db.collection("user_data")
  .add({first:first,
  last:last,
  email:email,
  education:education})
  .then(()=>{
    alert('saved')
  })
}


    const cvHandler=(e)=>{
        e.preventDefault();
        const file =e.target[0].filers[0];
    }
    const click=(e)=>{
        e.preventDefault()
        console.log('clicked')
    }
  return (
    <div className='form'>
        <FormControl >
        <FormLabel>First name</FormLabel>
        <Input type="text" placeholder='First name'required onChange={(e) => setFirst(e.target.value)}/>
        <FormLabel>Last name</FormLabel>
        <Input type="text" placeholder='Last name' required onChange={(e) => setLast(e.target.value)}/>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)}/>
        <FormLabel>Education</FormLabel>
        <Input type="text" placeholder='Education' required onChange={(e) => setEducation(e.target.value)}/>


        <Input type="file" required/>
        {/* <button onClick={cvHandler}></button> */}


        <button type="submit" className='btn' onClick={add}>clickkkkk</button>
        </FormControl>
        </div>
  )
}

export default Form