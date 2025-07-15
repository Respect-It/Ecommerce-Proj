import React from "react";
import { products } from "../data";
import Cards from "../components/Cards";
import Chatbot from "../components/Chatbot";
import "../styles/Home.css";
import "../styles/Chatbot.css";

export default function Home() {
  return (
    <>
      <div className="home-page-wrapper">
        <div className="home-hero-banner">
          <h1>Discover Your Style</h1>
          <p>Explore our hand-picked collection of premium products.</p>
          <a href="#product-grid" className="btn-primary">
            Shop Now
          </a>
        </div>

        <div className="product-grid-section" id="product-grid">
          <h2 className="grid-title">Latest Products</h2>
          <div className="product-grid">
            {products.map((product) => (
              <Cards key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Chatbot directly renders with its own toggle button inside */}
      <Chatbot />
    </>
  );
}
