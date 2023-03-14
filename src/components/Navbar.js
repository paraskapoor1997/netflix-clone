import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const { user, logout } = UserAuth();

  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  console.log(showLogout);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="netflix logo"
      />
      <img
        onMouseEnter={() => setShowLogout(true)}
        onMouseLeave={() => setShowLogout(false)}
        onClick={() => setShowLogout(true)}
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netflix avatar"
      />
      {showLogout && (
        <div
          onMouseLeave={() => setShowLogout(false)}
          onMouseEnter={() => setShowLogout(true)}
          className="logout"
        >
          <li onClick={handleLogout}>Logout</li>
        </div>
      )}
    </div>
  );
};

export default Navbar;
