import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter} from "react-router-dom";
import SignUp from './components/Authentification/SignUp';
import SignIn from './components/Authentification/SignIn';

import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Header/>
      <Home/>
      <SignUp/>
      <SignIn/>
      </BrowserRouter> */}
  <Header/>
      <Routes>
      
        <Route path='/' element={<Home/>}></Route>
        
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
