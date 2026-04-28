import React, { useState, useEffect } from "react";
import "./AuthModal.css";

const AuthModal = ({ show, onClose, mode }) => {
  const [isLogin, setIsLogin] = useState(mode === "login");
  const [slideClass, setSlideClass] = useState("slide-in");

  useEffect(() => {
    setIsLogin(mode === "login");
    setSlideClass("slide-in");
  }, [mode]);

  if (!show) return null;

  const toggleForm = () => {
    setSlideClass("slide-out");
    setTimeout(() => {
      setIsLogin(!isLogin);
      setSlideClass("slide-in");
    }, 200); // match animation duration
  };

  return (
    <div className="auth-overlay">
      <div className={`auth-modal ${slideClass}`}>
        <button className="close-btn" onClick={onClose}>✖</button>

        {isLogin ? (
          <>
            <h2>Login</h2>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button className="auth-btn">Login</button>

            <p>
              Don’t have an account?{" "}
              <span onClick={toggleForm}>Sign Up</span>
            </p>
          </>
        ) : (
          <>
            <h2>Register</h2>

            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Address" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />

            <button className="auth-btn">Register</button>

            <p>
              Already have an account?{" "}
              <span onClick={toggleForm}>Login</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
