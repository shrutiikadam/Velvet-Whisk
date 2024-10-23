import React, { useState } from "react";
import { auth, googleProvider } from "../firebaseConfig"; 
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
        navigate("/home");
      } else {
        alert("Please verify your email before logging in.");
      }
    } catch (error) {
      console.error("Firebase Authentication Error: ", error);
      alert(`Error: ${error.message}`);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      alert("Google login successful!");
      navigate("/home");
    } catch (error) {
      alert(`Google Login Error: ${error.message}`);
    }
  };
  const handleGoHome = () => {
    navigate("/");
  };
  const handleSignup = () => {
    navigate("/signup");
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
            {/* <span style={{ fontSize: '1.5rem', color: '#3a3a8a' }}>Welcome</span>
            <span style={{ color: '#6a6a9a' }}>Back!</span> */}
          </h1>
        </div>
        <div style={{
          backgroundColor: '#fff', padding: '40px', borderRadius: '15px', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)', maxWidth: '450px', width: '100%', animation: 'fadeIn 0.6s ease-in-out'
        }}>
          <h2 style={{ fontSize: '1.6rem', color: '#333', marginBottom: '30px' }}>LOGIN</h2>
          <form onSubmit={handleLogin}>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <label style={{ fontSize: '0.9rem', color: '#666' }}>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" style={{ fontSize: '0.9rem', color: '#007bff', textDecoration: 'none' }}>Forgot password?</a>
            </div>
            <button type="submit" style={{
              width: '100%', padding: '12px', backgroundColor: '#31a027', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', marginTop: '20px'
            }}>
              Login
            </button>
          </form>
          <button
            onClick={handleGoogleLogin}
            style={{
              width: '100%', padding: '12px', backgroundColor: '#db4437', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', marginTop: '20px'
            }}>
            Continue with Google
          </button>
          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem', color: '#666' }}>
            Don't have an account? <a href="#" onClick={handleSignup} style={{ color: '#007bff', textDecoration: 'none' }}>Sign up</a>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
