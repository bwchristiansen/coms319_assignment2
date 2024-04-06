import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Shop';
import Checkout from './Checkout';
import Confirmation from "./Confirmation"
import './App.css';

export const CartContext = createContext();
export const UserContext = createContext();

function App() {
const [cart, setCart] = useState([]);
const [user, setUser] = useState({});

  return (
    <Router>
      <CartContext.Provider value={{ cart, setCart }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </UserContext.Provider> {/* Add line */}
      </CartContext.Provider>
    </Router>
  );
};

export default App;
