import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CheckAuthPage from "./components/public/CheckAuth";
import HomePage from "./components/private/Home";
import LoginPage from "./components/public/Login";
import WelcomePage from "./components/public/Welcome";

import Navbar from "./components/reusable/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/protected" element={<CheckAuthPage Component={HomePage} />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/" element={<WelcomePage />} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
