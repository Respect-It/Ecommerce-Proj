import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App.jsx";
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <header>
      {/* Main Navbar */}
      <nav className="main-navbar">
        <ul className="nav-left">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <li>
            <Link to="/Products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="#">TOP PRODUCTS</Link>
          </li>
          <li>
            <Link to="#">NEW STOCKS</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
        </ul>

        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">
            <h1>Click & Collect</h1>
            <p>Buy Everything</p>
          </Link>
        </div>

        <ul className="nav-icons">
          <li>
            <Link to="/search">
              <FaSearch />
            </Link>
          </li>
          <li>
            <Link to="/auth">
              <FaUser />
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <FaHeart />
              <span className="icon-badge">0</span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart />
              <span className="icon-badge">{cart.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
