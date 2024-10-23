// import React, { useState, useEffect } from 'react'; 
// import { Link } from 'react-router-dom';
// import iconCart from '../assets/images/iconCart.png'; 
// import { useSelector, useDispatch } from 'react-redux'; 
// import { toggleStatusTab } from '../stores/cart';

// const Header = () => {
//     const [totalQuantity, setTotalQuantity] = useState(0);
//     const carts = useSelector(store => store.cart.items);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         let total = 0;
//         carts.forEach(item => total += item.quantity);
//         setTotalQuantity(total);
//     }, [carts]);

//     const handleOpenTabCart = () => {
//         dispatch(toggleStatusTab());
//     };

//     return (
//         <header className='flex justify-between items-center p-4 bg-gradient-to-r from-gray-800 to-black text-white shadow-lg rounded-lg'>
//             <div className="flex gap-4">
//                 <Link to="/home" className="px-3 py-2 rounded-md text-md font-semibold hover:bg-gray-700 transition duration-300">
//                     HOME
//                 </Link>
//                 <Link to="/about" className="px-3 py-2 rounded-md text-md font-semibold hover:bg-gray-700 transition duration-300">
//                     ABOUT
//                 </Link>
//             </div>
            // <div 
            //     className='w-8 h-8 bg-gray-100 rounded-full flex justify-center items-center relative cursor-pointer transition-transform duration-300 hover:scale-105'
            //     onClick={handleOpenTabCart}
            // >
            //     <img src={iconCart} alt="Cart Icon" className='w-5' />
            //     {totalQuantity > 0 && (
            //         <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex justify-center items-center'>
            //             {totalQuantity}
            //         </span>
            //     )}
            // </div>
//         </header>
//     );
// };

// export default Header;
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
        <header className='flex justify-between items-center p-4 bg-gradient-to-r from-gray-800 to-black text-white shadow-lg rounded-lg transition-transform duration-300'>
            <div className="flex gap-6">
                <Link to="/home" className="relative group">
                    <span className="px-3 py-2 rounded-md text-lg font-semibold text-white transition duration-300 transform group-hover:scale-110 group-hover:underline">
                        HOME
                    </span>
                    <span className="absolute inset-0 bg-gray-700 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </Link>
                <Link to="/about" className="relative group">
                    <span className="px-3 py-2 rounded-md text-lg font-semibold text-white transition duration-300 transform group-hover:scale-110 group-hover:underline">
                        ABOUT
                    </span>
                    <span className="absolute inset-0 bg-gray-700 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </Link>
            </div>
            <div 
                className='w-9 h-9 bg-gray-100 rounded-full flex justify-center items-center relative cursor-pointer transition-transform duration-300'
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
