import React, { useState } from "react";
import { auth, googleProvider } from "../firebaseConfig";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await sendEmailVerification(user);
      alert("Signup successful! Please check your email for verification.");
      navigate("/login");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      alert("Google signup successful!");
      navigate("/home");  // Redirect to homepage
    } catch (error) {
      alert(`Google Sign-In Error: ${error.message}`);
    }
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(135deg, #dfe9f3, #ffffff)', padding: '20px', fontFamily: "'Roboto', sans-serif"
    }}>
      <button
        type="button" // Prevent default form submission
        onClick={handleGoHome}
        style={{
          position: 'absolute', top: '20px', left: '20px', backgroundColor: '#000000',
          color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', fontSize: '1rem',
          cursor: 'pointer', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', transition: 'background-color 0.3s'
        }}
      >
        Back to Home
      </button>
      
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '3rem', color: '#4a4a8a', fontWeight: '800', lineHeight: '1.2', letterSpacing: '1px', textAlign: 'left' }}>
            {/* Add any welcome message here if needed */}
          </h1>
        </div>
        <div style={{
          backgroundColor: '#fff', padding: '40px', borderRadius: '15px', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)', maxWidth: '450px', width: '100%', animation: 'fadeIn 0.6s ease-in-out'
        }}>
          <h2 style={{ fontSize: '1.6rem', color: '#333', marginBottom: '30px' }}>SIGN UP</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1rem', backgroundColor: '#f9f9f9'
              }}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1rem', backgroundColor: '#f9f9f9'
              }}
            />
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{
                width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1rem', backgroundColor: '#f9f9f9'
              }}
            />
            <button type="submit" style={{
              width: '100%', padding: '12px', backgroundColor: '#31a027', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', marginTop: '20px'
            }}>
              Sign Up
            </button>
          </form>
          <button
            onClick={handleGoogleSignUp}
            style={{
              width: '100%', padding: '12px', backgroundColor: '#db4437', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', marginTop: '20px'
            }}>
            Continue with Google
          </button>
          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem', color: '#666' }}>
            Already have an account? <a href="#" onClick={handleLogin} style={{ color: '#007bff', textDecoration: 'none' }}>Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
