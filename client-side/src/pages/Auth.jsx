import React, { useState } from "react";
import "../styles/Auth.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Auth() {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => setIsRegistering(!isRegistering);

  return (
    <div className={`auth-wrapper ${isRegistering ? "register-mode" : ""}`}>
      <div className="auth-container">
        {/* Form Side */}
        <div className="form-section">
          {isRegistering ? (
            <form className="auth-form">
              <h2>Create Account</h2>
              <div className="input-icon">
                <FaUser />
                <input type="text" placeholder="Username" required />
              </div>
              <div className="input-icon">
                <FaEnvelope />
                <input type="email" placeholder="Email" required />
              </div>
              <div className="input-icon">
                <FaLock />
                <input type="password" placeholder="Password" required />
              </div>
              <button type="submit" className="glass-btn">
                Register
              </button>
            </form>
          ) : (
            <form className="auth-form">
              <h2>Welcome Back</h2>
              <div className="input-icon">
                <FaUser />
                <input type="text" placeholder="Username" required />
              </div>
              <div className="input-icon">
                <FaLock />
                <input type="password" placeholder="Password" required />
              </div>
              <button type="submit" className="glass-btn">
                Login
              </button>
            </form>
          )}
        </div>

        {/* Info Side */}
        <div className="info-section">
          <div className="info-box">
            <h2>{isRegistering ? "Already a member?" : "New here?"}</h2>
            <p>
              {isRegistering
                ? "Login to access your account."
                : "Register and join our community."}
            </p>
            <button className="toggle-btn" onClick={toggleForm}>
              {isRegistering ? "Login" : "Register"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
