import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);

  const categories = [
    { 
      name: 'Home & Garden', 
      icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12L5 10L12 3L19 10L21 12M5 12V20C5 20.5523 5.44772 21 6 21H9V16C9 15.4477 9.44772 15 10 15H14C14.5523 15 15 15.4477 15 16V21H18C18.5523 21 19 20.5523 19 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    { 
      name: 'Hair Extensions & Wigs', 
      icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 13L13.5 7.5C13.1 6.8 12.4 6.3 11.7 6.3H12.3C11.6 6.3 10.9 6.8 10.5 7.5L9 13L3 7V9L9 15L10.5 9.5L12 15L13.5 9.5L15 15L21 9Z" fill="currentColor"/></svg>
    },
    { 
      name: "Men's Clothing", 
      icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4H8L6 6V8L8 10V20H16V10L18 8V6L16 4ZM14 6V8H10V6H14Z" fill="currentColor"/></svg>
    },
    { 
      name: 'Accessories', 
      icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    },
    { 
      name: 'Electronics', 
      icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/><line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    { 
      name: 'Home Improvement & Lighting', 
      icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    { 
      name: 'Home Appliances', 
      icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    { 
      name: 'Automotive & Motorcycle', 
      icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17C8.10457 17 9 16.1046 9 15C9 13.8954 8.10457 13 7 13C5.89543 13 5 13.8954 5 15C5 16.1046 5.89543 17 7 17Z" stroke="currentColor" strokeWidth="2"/><path d="M17 17C18.1046 17 19 16.1046 19 15C19 13.8954 18.1046 13 17 13C15.8954 13 15 13.8954 15 15C15 16.1046 15.8954 17 17 17Z" stroke="currentColor" strokeWidth="2"/><path d="M5 15H3L2 7H6L8 15M8 15H15M19 15H21L20 7H16L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    { 
      name: 'Luggages & Bags', 
      icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4H8C6.89543 4 6 4.89543 6 6V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V6C18 4.89543 17.1046 4 16 4Z" stroke="currentColor" strokeWidth="2"/><path d="M8 4V2C8 1.44772 8.44772 1 9 1H15C15.5523 1 16 1.44772 16 2V4" stroke="currentColor" strokeWidth="2"/><path d="M8 8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    },
    { 
      name: 'Shoes', 
      icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 18H22L20 12H18L16 8H12L10 12H4L2 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 12L9 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    { 
      name: 'Special Occasion Costume', 
      icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM8 7L6 6L4 8L6 9L8 7ZM16 7L18 6L20 8L18 9L16 7ZM12 8C13.1 8 14 8.9 14 10V12H10V10C10 8.9 10.9 8 12 8ZM8 12H16L15 22H9L8 12Z" fill="currentColor"/></svg>
    },
    { 
      name: "Women's Clothing", 
      icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L8 6V8L10 10V20H14V10L16 8V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 6L6 8V12L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 6L18 8V12L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    { 
      name: 'Sports & Entertainment', 
      icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8.56 2.75C4.37 6.03 2 10.83 2 16.31L2.75 16.06C7.69 14.38 11.25 10.81 12.94 5.88L8.56 2.75Z" fill="currentColor"/></svg>
    },
    { 
      name: 'Beauty & Health', 
      icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61C19.32 3.09 17.06 3.09 15.54 4.61L12 8.15L8.46 4.61C6.94 3.09 4.68 3.09 3.16 4.61C1.64 6.13 1.64 8.39 3.16 9.91L12 18.75L20.84 9.91C22.36 8.39 22.36 6.13 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    { 
      name: 'Computer & Office', 
      icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/><line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    }
  ];

  const moreItems = [
    'Jewelry & Watches',
    'Toys & Hobbies',
    'Weddings & Events',
    'Novelty & Special Use',
    'Lights & Lighting',
    'Security & Protection'
  ];

  const navItems = [
    'Bundle deals',
    'Choice', 
    'SuperDeals',
    'AliExpress Business',
    'Home & Garden',
    'Hair Extensions & Wigs'
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Categories Dropdown */}
        <div className="categories-section">
          <div 
            className="categories-trigger"
            onClick={() => setShowCategoriesDropdown(!showCategoriesDropdown)}
          >
            <svg className="menu-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>All Categories</span>
            <svg className={`dropdown-arrow ${showCategoriesDropdown ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {showCategoriesDropdown && (
            <div className="categories-dropdown">
              <div className="categories-list">
                {categories.map((category, index) => (
                  <div key={index} className="category-item">
                    <div className="category-icon">{category.icon}</div>
                    <span className="category-name">{category.name}</span>
                    <svg className="category-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Items */}
        <div className="nav-items">
          {navItems.map((item, index) => (
            <div key={index} className="nav-item">
              <span>{item}</span>
            </div>
          ))}
          
          {/* More Dropdown */}
          <div className="more-section">
            <div 
              className="more-trigger"
              onClick={() => setShowMoreDropdown(!showMoreDropdown)}
            >
              <span>More</span>
              <svg className={`dropdown-arrow ${showMoreDropdown ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {showMoreDropdown && (
              <div className="more-dropdown">
                {moreItems.map((item, index) => (
                  <div key={index} className="more-item">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;