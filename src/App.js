import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter} from "react-router-dom";
import SignUp from './components/Authentification/SignUp';
import SignIn from './components/Authentification/SignIn';
import About from './components/About/About';
import Explore from './components/Home/Explore';

import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        </Routes>
  <Header/>

   <Routes>
        <Route path='/' element={<Home/>}></Route>
      
      

      </Routes>
      
    </div>
  );
}

export default App;
