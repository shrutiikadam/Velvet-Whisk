import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { cartItems, totalBill } = location.state || { cartItems: [], totalBill: 0 };

    // Function to navigate to /home
    const handleGoBack = () => {
        navigate('/home'); // Go to home page
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
        <div className="relative">
            {/* Go Back Button positioned in the top left corner */}
            <button 
                className="absolute top-5 left-5 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300 text-lg z-10" 
                onClick={handleGoBack}
            >
                Back to Home
            </button>

            <div className="checkout-container max-w-3xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg mt-10">
                <h2 className="checkout-title text-4xl font-bold mb-6 text-gray-800 text-center">Checkout</h2>

                <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Selected Items:</h3>
                    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-md"> {/* Box for items */}
                        <ul>
                            {cartItems.length > 0 ? (
                                cartItems.map((item, index) => {
                                    // Log each item for debugging
                                    console.log(`Item ${index}:`, item); 
                                    return (
                                        <li key={index} className="items border-b border-gray-200 py-4 flex items-center last:border-b-0 hover:bg-gray-50 transition duration-200">
                                            <img src={item.image} alt={item.name} className='w-20 h-20 mr-4 object-cover rounded-md shadow-sm' />
                                            <div className="flex flex-col">
                                                <span className="font-medium text-gray-900 text-lg">{item.name}</span>
                                                <span className="text-sm text-gray-600">Price: ₹{item.price}</span>
                                                <span className="text-sm text-gray-600">Quantity: {item.quantity}</span>
                                                <span className="text-sm text-gray-600">Total: ₹{(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        </li>
                                    );
                                })
                            ) : (
                                <li className="text-red-600">No items selected!</li>
                            )}
                        </ul>
                    </div>
                </div>

                <h3 className="text-3xl font-semibold mb-6 text-gray-900 text-center">Total Bill: ₹{totalBill.toFixed(2)}</h3>

                <div className="flex space-x-6 mt-5 justify-center">
                    <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300 text-lg" onClick={handleProceedToPayment}>
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
