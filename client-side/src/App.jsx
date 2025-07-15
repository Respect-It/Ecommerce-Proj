import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Products from "./pages/Products";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/NotFound";

export const CartContext = createContext();

export default function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart && cart.length === 0) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (cart.length === 0) {
      localStorage.removeItem("cart");
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Banner />
                    <Home />
                  </>
                }
              />
              <Route path="/About" element={<About />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Auth" element={<Auth />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Products/:category" element={<Products />} />
              <Route path="/Product/:id" element={<DetailPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartContext.Provider>
  );
}
