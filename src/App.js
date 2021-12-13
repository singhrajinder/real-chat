/* eslint-disable no-undef */
import React from "react";
import Login from "./Component/Login/login";
import {BrowserRouter as Router ,Routes,  Route , } from 'react-router-dom';
import RealChat from "./RealChat/real-chat";
function App() {
  return (
    <>
    <Router>
    <Routes>  
         <Route path="/" exact  element = {<Login/>} />
         <Route path="/chat" exact  element = {<RealChat/>} />
         </Routes>
      </Router>
    </>
  );
}

export default App;
