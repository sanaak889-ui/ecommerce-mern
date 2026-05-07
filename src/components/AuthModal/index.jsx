import React, { useState, useEffect } from "react";
import "./AuthModal.css";
import { useUserAuth } from "../../context/UserAuthContext";
import { loginUser, registerUser } from "../../api/auth";

const AuthModal = ({ show, onClose, mode }) => {
  const { login } = useUserAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [slideClass, setSlideClass] = useState("slide-in");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // ✅ sync mode from parent
  useEffect(() => {
    setIsLogin(mode === "login");
    setSlideClass("slide-in");
  }, [mode, show]);

  // ❗ FIX: reset form when modal opens/closes
  useEffect(() => {
    if (!show) {
      setForm({ name: "", email: "", password: "" });
    }
  }, [show]);

  if (!show) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 LOGIN
 const handleLogin = async () => {
  try {
    if (!form.email || !form.password) {
      alert("Fill all fields");
      return;
    }

    const res = await loginUser({
      email: form.email,
      password: form.password,
    });

    login(res.user || res);

    localStorage.setItem("user", JSON.stringify(res.user || res));

    onClose();
  } catch (error) {
    alert(error.response?.data?.message || "Login failed");
  }
};

  // 🔥 REGISTER
  const handleRegister = async () => {
  try {
    if (!form.name || !form.email || !form.password) {
      alert("Fill all fields");
      return;
    }

    const res = await registerUser({
      name: form.name,
      email: form.email,
      password: form.password,
    });

    alert("Registered successfully");

    // auto switch to login after register
    setIsLogin(true);

  } catch (error) {
    alert(error.response?.data?.message || "Register failed");
  }
};

  // 🔥 FIXED TOGGLE
  const toggleForm = () => {
    setSlideClass("slide-out");

    setTimeout(() => {
      setIsLogin((prev) => !prev);
      setSlideClass("slide-in");
    }, 200);
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      {/* stop closing when clicking inside */}
      <div
        className={`auth-modal ${slideClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ✅ CLOSE BUTTON ALWAYS WORKS */}
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        {isLogin ? (
          <>
            <h2>Login</h2>

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={form.email}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={form.password}
            />

            <button className="auth-btn" onClick={handleLogin}>
              Login
            </button>

            <p>
              Don’t have an account?{" "}
              <span onClick={toggleForm}>Sign Up</span>
            </p>
          </>
        ) : (
          <>
            <h2>Register</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              value={form.name}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={form.email}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={form.password}
            />

            <button className="auth-btn" onClick={handleRegister}>
              Register
            </button>

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