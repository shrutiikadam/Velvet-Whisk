import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import CartTab from './components/cartTab'; // Import CartTab
import Checkout from './components/checkout'; // Import Checkout
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route wraps multiple routes */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:slug' element={<Detail />} />
          <Route path='cart' element={<CartTab />} /> {/* CartTab Route */}
          <Route path='checkout' element={<Checkout />} /> {/* Checkout Route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
