import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data";
import { Rating } from "react-simple-star-rating";
import { CartContext } from "../App.jsx";
import "../styles/DetailPage.css";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  const [popupMessage, setPopupMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="detail-container no-product-found">
        <h1 className="not-found-title">Product Not Found</h1>
        <p className="not-found-message">
          The product you are looking for does not exist or has been removed.
        </p>
        <button
          className="btn-primary go-home-btn"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, { ...product, quantity: 1 }]);
      showPopup(`${product.title} has been added to your cart!`);
    } else {
      showPopup(`${product.title} is already in your cart!`);
    }
  };

  const showPopup = (message) => {
    setPopupMessage(message);
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000);
  };

  return (
    <div className="detail-container">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="detail-product-image"
        />
      </div>
      <div className="detail-product-info">
        <h1 className="detail-product-title">{product.title}</h1>
        <p className="detail-product-description">{product.description}</p>
        <strong className="detail-product-price">
          PKR {product.price.toFixed(2)}
        </strong>

        <div className="detail-product-actions">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add To Cart
          </button>

          <div
            className="detail-product-rating"
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <Rating
              readonly={true}
              allowFraction={true}
              initialValue={product.rating?.rate || 0}
              size={24}
            />
            <span className="rating-count">
              ({product.rating?.count || 0} reviews)
            </span>
          </div>
        </div>
      </div>

      {popupVisible && (
        <div className="popup-message">
          <span>{popupMessage}</span>
        </div>
      )}
    </div>
  );
}

export default DetailPage;
