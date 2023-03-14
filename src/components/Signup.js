import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from "./../firebaseConfig";
import background from "../assets/login.avif";
import BackgroundImage from "./BackgroundImage";
import "./Signup.css";
import Navbar from "./Navbar";
import { UserContext } from "../context/user-context";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const { createUser } = UserAuth();
  let ctx = useContext(UserContext);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  return (
    <div>
      <Navbar />
      <BackgroundImage />
      <div className="signup__container">
        <div className="line__height">
          <h1>Unlimited movies, TV shows and more.</h1>
        </div>
        <div className="line__height">
          <h3>Watch anywhere. Cancel sanytime.</h3>
        </div>
        <div className="line__height">
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        </div>
        <div className="form">
          <input
            className="inputs"
            type="email"
            name="login"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          {showPassword && (
            <input
              className="inputs"
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          )}
          {!showPassword && (
            <button className="show__password__button" onClick={() => setShowPassword(true)}>
              {" "}
              Get Started
            </button>
          )}
        </div>
        <button className="login__button" onClick={signInHandler} type="submit">
          Register
        </button>
        {error && <p style={{ color: "white" }}> {error}</p>}
      </div>
    </div>
  );
};

export default Signup;
