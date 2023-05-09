import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/private/Home";
import LoginPage from "./components/public/Login";
import WelcomePage from "./components/public/Welcome";

import Navbar from "./components/reusable/Navbar";
import { CheckAuth } from "./components/public/CheckAuth";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/" element={<WelcomePage />} />
            <Route path="/protected" element={<CheckAuth>
                <HomePage />
            </CheckAuth>}  />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
