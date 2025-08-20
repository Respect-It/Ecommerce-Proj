import React, { useState } from 'react';
import '../styles/Topbar.css';

const Topbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({ code: 'EN', currency: 'PKR', flag: '🇵🇰' });
  const [cartCount, setCartCount] = useState(0);

  const languages = [
    { 
      code: 'EN', 
      currency: 'USD', 
      flag: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="20" height="16" rx="2" fill="#B22234"/><rect x="2" y="4" width="20" height="1.23" fill="#B22234"/><rect x="2" y="6.46" width="20" height="1.23" fill="#FFFFFF"/><rect x="2" y="8.92" width="20" height="1.23" fill="#B22234"/><rect x="2" y="11.38" width="20" height="1.23" fill="#FFFFFF"/><rect x="2" y="13.84" width="20" height="1.23" fill="#B22234"/><rect x="2" y="16.3" width="20" height="1.23" fill="#FFFFFF"/><rect x="2" y="18.76" width="20" height="1.24" fill="#B22234"/><rect x="2" y="4" width="8.6" height="8.6" fill="#3C3B6E"/></svg>, 
      name: 'English (USD)' 
    },
    { 
      code: 'EN', 
      currency: 'PKR', 
      flag: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="20" height="16" rx="2" fill="#01411C"/><rect x="2" y="4" width="5" height="16" fill="#FFFFFF"/><circle cx="15" cy="10" r="2" fill="#FFFFFF"/><path d="M17 8L19 10L17 12" stroke="#FFFFFF" strokeWidth="0.5" fill="#FFFFFF"/></svg>, 
      name: 'English (PKR)' 
    },
    { 
      code: 'FR', 
      currency: 'EUR', 
      flag: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="6.67" height="16" fill="#002395"/><rect x="8.67" y="4" width="6.67" height="16" fill="#FFFFFF"/><rect x="15.33" y="4" width="6.67" height="16" fill="#ED2939"/></svg>, 
      name: 'Français (EUR)' 
    },
    { 
      code: 'ES', 
      currency: 'EUR', 
      flag: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="20" height="16" rx="2" fill="#AA151B"/><rect x="2" y="7" width="20" height="10" fill="#F1BF00"/></svg>, 
      name: 'Español (EUR)' 
    },
    { 
      code: 'DE', 
      currency: 'EUR', 
      flag: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="20" height="5.33" fill="#000000"/><rect x="2" y="9.33" width="20" height="5.33" fill="#DD0000"/><rect x="2" y="14.67" width="20" height="5.33" fill="#FFCE00"/></svg>, 
      name: 'Deutsch (EUR)' 
    },
    { 
      code: 'AR', 
      currency: 'AED', 
      flag: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="20" height="5.33" fill="#00732F"/><rect x="2" y="9.33" width="20" height="5.33" fill="#FFFFFF"/><rect x="2" y="14.67" width="20" height="5.33" fill="#000000"/><rect x="2" y="4" width="7" height="16" fill="#FF0000"/></svg>, 
      name: 'العربية (AED)' 
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Here you would implement actual search functionality
    }
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowLanguageDropdown(false);
  };

  return (
    <header className="topbar">
      <div className="topbar-container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo">
            <span className="logo-text">AliExpress</span>
          </div>
        </div>

        {/* Search Section */}
        <div className="search-section">
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              className="search-input"
              placeholder="Wrist Watches For Men"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="right-section">
          {/* Download App */}
          <div className="download-app">
            <svg className="app-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 6L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 10L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 12L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Download the<br />AliExpress app</span>
          </div>

          {/* Language/Currency Dropdown */}
          <div className="language-dropdown" onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}>
            <div className="flag">{selectedLanguage.flag}</div>
            <span className="language-text">{selectedLanguage.code}/ {selectedLanguage.currency}</span>
            <svg className={`dropdown-arrow ${showLanguageDropdown ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
            {showLanguageDropdown && (
              <div className="language-menu">
                {languages.map((lang, index) => (
                  <div 
                    key={index}
                    className="language-option"
                    onClick={() => handleLanguageSelect(lang)}
                  >
                    <div className="flag">{lang.flag}</div>
                    <span>{lang.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* User Account */}
          <div className="user-account">
            <svg className="user-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="user-text">
              <span className="welcome">Welcome</span>
              <span className="signin">Sign in / Register</span>
            </div>
          </div>

          {/* Cart */}
          <div className="cart" onClick={() => setCartCount(cartCount + 1)}>
            <svg className="cart-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V16.5M9 19.5C9.8 19.5 10.5 20.2 10.5 21S9.8 22.5 9 22.5 7.5 21.8 7.5 21 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21S20.8 22.5 20 22.5 18.5 21.8 18.5 21 19.2 19.5 20 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="cart-text">Cart</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;