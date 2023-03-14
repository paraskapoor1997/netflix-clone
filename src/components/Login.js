import React, { useState } from "react";

import "./Login.css";

import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import BackgroundImage from "./BackgroundImage";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = UserAuth();

  let navigate = useNavigate();

  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar />
      <BackgroundImage />
      <div className="login__container">
        <div className="login__form">
          <h3>Login</h3>
          <input
            className="inputs"
            type="email"
            name="login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputs"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__button" onClick={signInHandler} type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
