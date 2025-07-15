import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";
import { FaGhost } from "react-icons/fa";

function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <div className="floating-icon">
          <FaGhost />
        </div>
        <h1>404</h1>
        <p className="subtitle">Oops! Page Not Found</p>
        <p className="description">
          The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="ripple-btn">Return Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
