import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { toggleStatusTab } from '../stores/cart';

const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts]);

    const handleOpenTabCart = () => {
        dispatch(toggleStatusTab());
    };

    return (
        <header className='flex justify-between items-center mb-4 p-2 bg-black text-white rounded-lg shadow-md'>
            <div className="flex gap-2">
                <Link to="/" className="bg-gray-800 px-2 py-1 rounded-md text-md font-semibold hover:bg-gray-700 transition duration-300">
                    HOME
                </Link>
                <Link to="/about" className="bg-gray-800 px-2 py-1 rounded-md text-md font-semibold hover:bg-gray-700 transition duration-300">
                    ABOUT
                </Link>
            </div>
            <div 
                className='w-8 h-8 bg-gray-100 rounded-full flex justify-center items-center relative cursor-pointer transition-transform duration-300 hover:scale-105'
                onClick={handleOpenTabCart}
            >
                <img src={iconCart} alt="Cart Icon" className='w-5' />
                {totalQuantity > 0 && (
                    <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex justify-center items-center'>
                        {totalQuantity}
                    </span>
                )}
            </div>
        </header>
    );
};

export default Header;