
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter} from "react-router-dom";
import SignUp from './components/Authentification/SignUp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Home/>
      <SignUp/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
