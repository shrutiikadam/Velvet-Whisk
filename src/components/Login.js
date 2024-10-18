import React, { useState } from "react";
import { auth, googleProvider } from "../firebaseConfig";  // Import googleProvider
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user.emailVerified) {
        alert("Login successful!");
        navigate("/layout"); // Redirect to homepage
      } else {
        alert("Please verify your email before logging in.");
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      alert("Google login successful!");
      navigate("/layout");  // Redirect to homepage
    } catch (error) {
      alert(`Google Login Error: ${error.message}`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Welcome Back!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="login-input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="login-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="login-actions">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <button className="login-google-btn" onClick={handleGoogleLogin}>
          Continue with Google
        </button>
        <p className="signup-link">Don't have an account? <a href="#">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
