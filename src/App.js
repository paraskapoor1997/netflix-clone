import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Player from "./components/Player";
import { UserAuth } from "./context/AuthContext";

function App() {
  const { user } = UserAuth();

  console.log("user", user);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/test" element={<Home />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
