// src/components/PaymentSuccess.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa'; // Importing a check circle icon
import { GiMilkCarton } from 'react-icons/gi'; // Milk carton icon for the milk theme

const PaymentSuccess = () => {
  const location = useLocation();
  const { userEmail } = location.state || { userEmail: '' };

  // Function to extract the first name from the email and remove digits
  const extractFirstNameFromEmail = (email) => {
    if (!email) return '';
    const namePart = email.split('@')[0]; // Get the part before the '@'
    const cleanedName = namePart.replace(/\d+/g, ''); // Remove digits
    return cleanedName.split(' ')[0]; // Get only the first name
  };

  const userName = extractFirstNameFromEmail(userEmail);

  return (
    <div className="flex items-center justify-center h-screen bg-purple-200


 to-blue-300">
      <div className="bg-white shadow-lg rounded-lg p-12 max-w-lg text-center relative transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
        <FaCheckCircle className="text-green-400 text-7xl mb-4 animate-bounce" />
        {/* Milk Carton Icon for fun */}
        <GiMilkCarton className="text-pink-400 text-6xl mb-6 mx-auto" />

        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-lg">Order Success!</h1>
        <p className="text-2xl text-gray-700 mb-6">
          Thanks, <span className="text-pink-400">{userName}</span>, for your milky order!
        </p>
        <p className="text-lg text-gray-800 mb-6">
          Your payment was successful. <br /> We've sent the details to your email.
        </p>
        <p className="text-sm text-gray-500 italic">
          We appreciate your business! Need anything? Drop us a message anytime.
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
