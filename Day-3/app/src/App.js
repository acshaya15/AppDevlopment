import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Login from "./SignIn.js";
import Signup from "./SignUp.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/home" element={< />}></Route> */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/sign" element={<Signup />}></Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
