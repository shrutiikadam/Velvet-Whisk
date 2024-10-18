import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
// import About from './components/About';
import Detail from './pages/detail';
import CartTab from './components/cartTab'; // Import CartTab
import Checkout from './components/checkout'; // Import Checkout
import Razorpay from './components/razorpay'; // Import Razorpay component
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/Signup';
import About from './components/About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Directly render the Main component at the root path */}
        <Route path='/' element={<Main />} />

        {/* Other routes wrapped in the Layout component */}
        <Route path='/layout' element={<Layout />}> {/* Layout route */}
          <Route index element={<Home />} />
          </Route>
          <Route path=':slug' element={<Detail />} />
          <Route path='/cart' element={<CartTab />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/razorpay' element={<Razorpay />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/details' element={<Detail/>}/>
        

        {/* Redirect from old '/main' path to the new root path */}
        <Route path='/main' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
