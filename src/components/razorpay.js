import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { auth } from '../firebaseConfig'; // Assuming you use Firebase for authentication

const Razorpay = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems, totalBill } = location.state || { cartItems: [], totalBill: 0 };
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  // Use the API key from the .env file
  const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY;
  const emailJsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailJsUserId = process.env.REACT_APP_EMAILJS_USER_ID;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
        console.log('User logged in:', user.email);
      } else {
        console.log('No user logged in.');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSendEmail = useCallback(() => {
    if (!userEmail) {
      console.error('User email is missing.');
      alert('User is not logged in or email is missing.');
      return;
    }

    const templateParams = {
      to_email: userEmail,
      subject: 'Payment Confirmation - Velvet & Whisk',
      message: `Your payment of INR ${totalBill} was successful! Thank you for your order.`,
    };

    emailjs
      .send(emailJsServiceId, emailJsTemplateId, templateParams, emailJsUserId)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert(`Email confirmation sent successfully to ${userEmail}!`);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send email confirmation.');
      });
  }, [userEmail, totalBill, emailJsServiceId, emailJsTemplateId, emailJsUserId]);

  useEffect(() => {
    const handlePayment = () => {
      const options = {
        key: razorpayKey,
        amount: totalBill * 100,
        currency: 'INR',
        name: 'Velvet & Whisk',
        description: 'Thank you for your order!',
        image: 'https://your_logo_url.com/logo.png',
        handler: (response) => {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          handleSendEmail();
          navigate('/layout');
        },
        prefill: {
          name: 'Durva Kadam',
          email: userEmail || 'durvakadam204@gmail.com',
          contact: '8828174914',
        },
        notes: { address: 'Shantivan' },
        theme: { color: '#F37254' },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      setLoading(false);
    };

    if (userEmail) handlePayment();

    return () => setLoading(true);
  }, [razorpayKey, totalBill, navigate, handleSendEmail, userEmail]);

  return (
    <div className="payment-container">
      {loading ? (
        <h2>Processing your payment...</h2>
      ) : (
        <h2>Please complete the payment window that appears.</h2>
      )}
    </div>
  );
};

export default Razorpay;
