import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
// import About from './components/About';
import Detail from './pages/detail';
import CartTab from './components/cartTab'; // Import CartTab
import Checkout from './components/checkout'; // Import Checkout
import Razorpay from './components/razorpay'; // Import Razorpay component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route wraps multiple routes */}
        <Route path='/' element={<Layout />}>
       
           <Route index element={<Home />} />
          <Route path='/main' element={<Main />} />
          <Route path='/:slug' element={<Detail />} />
          {/* <Route path='about' element={<About/>} /> */}
          <Route path='/cart' element={<CartTab />} /> 
          <Route path='/checkout' element={<Checkout />} /> 
          <Route path='/razorpay' element={<Razorpay />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
