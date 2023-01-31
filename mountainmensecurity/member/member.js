import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import React from 'react';
import Home from "./Home";
// import Profile from './Profile';
// import Content from "../Content";
const Member = () => {
 
  return (
    <div className="Member">
   
    
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          {/* <Route exact path="/profile" element={<Profile />} /> */}
        </Routes>
      </Router>
      
    
    </div>
  );
}

export default Member;