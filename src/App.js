import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SignUp from './components/Authentification/SignUp';
import SignIn from './components/Authentification/SignIn';
import NoInternet from './components/NoInternet/NoInternet';

import {Routes,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import ScrollArrow from './components/Scroll/Scroll';
import { DotLoader } from 'react-spinners';


function App() {
const [loading,setLoading]=useState(false)

useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },4000)

},[])
  return (
    <div className="App">
 {
  loading ?
<DotLoader
className='loading_page'
size={200}
color={"var(--red)"}
loading={loading}
/>
  :
  <div>
<Header />
  
  <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route> 

    </Routes>
   
    <ScrollArrow/>  
<Footer/></div>

  
 }
<NoInternet/>
      
    </div>
  );
}

export default App;
