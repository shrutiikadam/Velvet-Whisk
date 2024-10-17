import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Razorpay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { cartItems, totalBill } = location.state || { cartItems: [], totalBill: 0 };
  
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const handlePayment = () => {
      const options = {
        key: process.env.REACT_APP_RAZORPAY_API_KEY, // Accessing the API key from .env
        amount: totalBill * 100, // Amount is in currency subunits (100 paise = 1 INR)
        currency: "INR",
        name: "Velvet & Whisk",
        description: "Thank you for your order!",
        image: "https://your_logo_url.com/logo.png", // Replace with your company logo
        handler: function(response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          navigate('/payment-success'); // Redirect to the success page
        },
        prefill: {
          name: "Durva Kadam", // User's name
          email: "durvakadam204@gmail.com", // User's email
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

    handlePayment();
    
    return () => {
      setLoading(true); // Cleanup function resets loading state if the component unmounts
    };
  }, [totalBill, navigate]);

  return (
    <div className="payment-container">
      {loading ? (
        <h2>Processing your payment...</h2> // Loading message
      ) : (
        <h2>Please complete the payment window that appears.</h2>
      )}
      {/* You can add a loading spinner or any message here */}
    </div>
  );
};

export default Razorpay;
