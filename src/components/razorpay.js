import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { auth } from '../firebaseConfig'; // Assuming you use Firebase for authentication

const Razorpay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { cartItems, totalBill } = location.state || { cartItems: [], totalBill: 0 };
  
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(''); // State to store logged-in user's email

  // Fetch the logged-in user's email from Firebase Authentication
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email); // Set logged-in user's email
        console.log("User logged in:", user.email);
      } else {
        console.log("No user logged in.");
      }
    });

    return () => unsubscribe(); // Cleanup the listener
  }, []);

  // useCallback ensures the function reference remains the same unless dependencies change
  const handleSendEmail = useCallback(() => {
    if (!userEmail) {
      console.error('User email is missing.');
      alert("User is not logged in or email is missing.");
      return;
    }

    const templateParams = {
      to_email: userEmail, // User's email from Firebase Authentication
      subject: "Payment Confirmation - Velvet & Whisk",
      message: `Your payment of INR ${totalBill} was successful! Thank you for your order.`, // Customize the message as per your needs
    };

    // Updated EmailJS configuration with the new service ID, template ID, and user ID
    emailjs.send(key1, key2, templateParams, key3)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert(`Email confirmation sent successfully to ${userEmail}!`); // Displaying email in alert
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert("Failed to send email confirmation.");
      });
  }, [userEmail, totalBill]); // Dependency: userEmail and totalBill

  useEffect(() => {
    const handlePayment = () => {
      const options = {
        key: your_api_key , // Accessing the API key from .env
        amount: totalBill * 100, // Amount is in currency subunits (100 paise = 1 INR)
        currency: "INR",
        name: "Velvet & Whisk",
        description: "Thank you for your order!",
        image: "https://your_logo_url.com/logo.png", // Replace with your company logo
        handler: function(response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          
          // Send email after successful payment
          handleSendEmail(); // Send email to logged-in user
          
          // Redirect to the /layout page after successful payment
          navigate('/layout');
        },
        prefill: {
          name: "Durva Kadam", // Default user's name for Razorpay (this can be dynamic if needed)
          email: userEmail || "durvakadam204@gmail.com", // User's email (logged-in user's email if available)
          contact: "8828174914", // User's contact number
        },
        notes: {
          address: "Shantivan",
        },
        theme: {
          color: "#F37254",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      setLoading(false); // Set loading to false after the payment interface is opened
    };

    if (userEmail) {
      handlePayment();
    }
    
    return () => {
      setLoading(true); // Cleanup function resets loading state if the component unmounts
    };
  }, [totalBill, navigate, handleSendEmail, userEmail]); // Dependencies include userEmail and handleSendEmail

  return (
    <div className="payment-container">
      {loading ? (
        <h2>Processing your payment...</h2> // Loading message
      ) : (
        <h2>Please complete the payment window that appears.</h2>
      )}
    </div>
  );
};

export default Razorpay;
