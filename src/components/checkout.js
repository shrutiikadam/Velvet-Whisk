import React from 'react';
import './checkout.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { cartItems, totalBill } = location.state || { cartItems: [], totalBill: 0 };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page (CartTab)
  };

  const handleProceedToPayment = () => {
    navigate('/razorpay', {
      state: {
        cartItems,
        totalBill,
      },
    });
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title text-3xl font-bold mb-5">Checkout</h2>

      <div className="mb-5">
        <h3 className="text-xl font-semibold">Selected Items:</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="item border-b py-2">
              <img src={item.image} alt={item.name} className='w-12 h-12 mr-4' />
              <span>{item.name}</span> - <span>Quantity: {item.quantity}</span>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="text-2xl font-semibold">Total Bill: ₹{totalBill}</h3>

      <div className="mt-5">
        <button className="bg-blue-500 text-white px-4 py-2 mr-2" onClick={handleGoBack}>
          Back to Cart
        </button>
        <button className="bg-green-500 text-white px-4 py-2" onClick={handleProceedToPayment}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
