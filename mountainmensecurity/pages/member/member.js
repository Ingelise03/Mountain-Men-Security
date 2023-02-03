import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import React, { useState } from 'react';

const Member = () => {
  const [ setMemberLogin] = useState(true);
  return (
    <div className="Member">
      <div>
      <button
                type="button"
                onClick={() => setMemberLogin(false)}
                className="btn"
              >
              close
              </button>
      </div>
      <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      </div>
    
    </div>
  );
}

export default Member;