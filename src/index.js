import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom'
import Cancel from './components/Payment/Cancel';
import Success from './components/Payment/Success';
import Form from './components/Form/Form';
// import SignIn from './components/Authentification/SignIn';
import JobListing from './components/Job/JobListing';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
       <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Cancel" element={<Cancel />} ></Route>
        <Route path="/Success" element={<Success />}></Route>
        <Route path="/JobListing" element={<JobListing/>}></Route>
        <Route path="/Form" element={<Form/>}></Route>
      </Routes>
   
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
