import React, { useState } from "react";
import { auth, googleProvider } from "../firebaseConfig";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './Signup.css'; // Import the CSS file

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
      navigate("/");  // Redirect to homepage
    } catch (error) {
      alert(`Google Sign-In Error: ${error.message}`);
    }
  };

  return (
    <div className="sign-up-container">
      <h2 className="sign-up-heading">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="sign-up-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="sign-up-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          className="sign-up-input"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="sign-up-button">Sign Up</button>
      </form>
      <button className="sign-up-google-btn" onClick={handleGoogleSignUp}>
        Continue with Google
      </button>
    </div>
  );
};

export default SignUp;