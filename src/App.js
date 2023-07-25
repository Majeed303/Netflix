import React from "react";
import "./App.css"
import Login from "./Compnents/Login/Login";
import Main from "./Compnents/Main";
import { Route, Routes } from 'react-router-dom';



function App() {
  
  return (
   <div className="App">

    <Routes>
          <Route path="/" element={<Login/>} />
    <Route path="/home" element={  <Main/>} />

    </Routes>
        
       
     

   </div>
  );
}

export default App;
