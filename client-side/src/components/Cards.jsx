import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { CartContext } from "../App.jsx";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import "../styles/Cards.css";

export default function Cards({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const productColors = ["black", "maroon", "beige"];

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.title} loading="lazy" />
        <div className="hover-icons">
          <button onClick={handleToggleWishlist}>
            <FaHeart color={isWishlisted ? "red" : "#333"} />
          </button>
          <button><FaSearch /></button>
          <button onClick={handleAddToCart}><FaShoppingCart /></button>
        </div>
        <div className="rating-overlay">
          <Rating
            readonly
            initialValue={product.rating.rate}
            allowFraction
            size={18}
          />
        </div>
      </div>

      <div className="swatches">
        {productColors.map((color, idx) => (
          <span
            key={idx}
            className="swatch"
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </div>

      <Link to={`/products/${product.id}`} className="product-title">
        {product.title.toUpperCase()}
      </Link>

      <p className="price">${product.price.toFixed(2)}</p>
    </div>
  );
}
