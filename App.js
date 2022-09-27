import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Re from './Components/Registration';
import Login from './Components/Login';
import List from './Components/ListContacts'
import Add from './Components/AddContacts'
import Fp from './Components/ForgotP'
import {Routes,Route} from "react-router-dom";



export default function App(){
  return (
    <div className="App">
      
        
        <Routes>
        
        <Route exact path="/" element={<Re />} />
        <Route path="/log" element={<Login />} />
        <Route path="/home" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/fp" element={<Fp />} />
        </Routes>
 
        </div> 
);
}