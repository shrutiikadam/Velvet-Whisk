import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import Cookies from 'js-cookie'; // Ensure you have this installed
import CookieConsent from './cookie'; // Import the CookieConsent component

const ProductCart = (props) => {
    const carts = useSelector(store => store.cart.items);
    const { id, name, price, image, slug } = props.data;
    const dispatch = useDispatch();
    const [showCookieConsent, setShowCookieConsent] = useState(false);

    useEffect(() => {
        const cookieConsent = Cookies.get('cookieConsent');
        if (!cookieConsent) {
            setShowCookieConsent(true); // Show cookie consent if not already accepted
        }
    }, []);

    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1,
        }));
    };

    const handleCloseConsent = () => {
        setShowCookieConsent(false);
    };

    return (
        <div className='bg-white p-5 rounded-xl shadow-sm mt-6'>
            <Link to={`/${slug}`}>
                <img src={image} alt={name} className='w-full h-80 object-cover object-top' 
                    style={{ filter: 'drop-shadow(10px 25px 20px #0005)' }} />
            </Link>
            <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
            <div className='flex justify-between items-center'>
                <p>
                    Rs.<span className='text-2xl font-medium'>{price}</span>
                </p>
                <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2' onClick={handleAddToCart}>
                    <img src={iconCart} alt="" className='w-5' />
                    Add To Cart
                </button>
            </div>
            {showCookieConsent && <CookieConsent onClose={handleCloseConsent} />}
        </div>
    );
}

export default ProductCart;
