import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter} from "react-router-dom";
import SignUp from './components/Authentification/SignUp';
import SignIn from './components/Authentification/SignIn';

// import { ChakraProvider } from '@chakra-ui/react'

import {Routes,Route} from 'react-router-dom'
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import ScrollArrow from './components/Scroll/Scroll';


function App() {
  return (
    <div className="App">
      {/* <Profile/> */}
  
  <Header />
   <Routes>
       <Route path="/" element={<Home />}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          
          <Route path='/Profile' element={<Profile/>}></Route>
    </Routes>
     <ScrollArrow/>  
 <Footer/>

      
    </div>
  );
}

export default App;
