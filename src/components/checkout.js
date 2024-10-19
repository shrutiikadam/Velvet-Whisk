import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { cartItems, totalBill } = location.state || { cartItems: [], totalBill: 0 };

    // Debugging logs
    console.log('Received Cart Items:', cartItems); // Log received cart items
    console.log('Received Total Bill:', totalBill); // Log received total bill

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
        <div className="checkout-container p-5">
            <h2 className="checkout-title text-3xl font-bold mb-5">Checkout</h2>

            <div className="mb-5">
                <h3 className="text-xl font-semibold">Selected Items:</h3>
                <div className="border rounded-lg p-4 bg-gray-100"> {/* Box for items */}
                    <ul>
                        {cartItems.length > 0 ? (
                            cartItems.map((item, index) => {
                                // Log each item for debugging
                                console.log(`Item ${index}:`, item); 
                                return (
                                    <li key={index} className="items border-b py-2 flex items-center">
                                        <img src={item.image} alt={item.name} className='w-12 h-12 mr-4' />
                                        <div className="flex flex-col">
                                            <span className="font-medium">{item.name}</span>
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

            <h3 className="text-2xl font-semibold">Total Bill: ₹{totalBill.toFixed(2)}</h3>

            <div className="mt-5 flex space-x-2">
                <button className="bg-blue-500 text-white px-4 py-2" onClick={handleGoBack}>
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