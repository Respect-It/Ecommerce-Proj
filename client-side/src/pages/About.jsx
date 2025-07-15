import React from "react";
import "../styles/About.css";
function About() {
  return (
    <div className="about-page-wrapper">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="main-title">About Our Shop</h1>
          <p className="hero-tagline">
            Your trusted source for quality products and exceptional service.
          </p>
        </div>
      </section>

      <section className="about-section about-our-story">
        <div className="about-content-area">
          <h2>Our Story</h2>
          <p>
            Founded with a passion for bringing unique and high-quality products
            directly to your doorstep, our shop started as a small dream. Over
            the years, we've grown, but our commitment to customer satisfaction
            and curating an exceptional collection remains at our core. We
            believe in transparency, integrity, and fostering a community around
            the products we love.
          </p>
          <p>
            Every item in our store is hand-picked, ensuring it meets our strict
            standards for craftsmanship, durability, and style. We're constantly
            exploring new trends and timeless classics to offer you a diverse
            range that fits every need and occasion.
          </p>
        </div>
        <div className="about-image-area">
          <img
            src="https://as1.ftcdn.net/jpg/04/15/15/64/1000_F_415156437_VNwaQnydu0FRpG4jAmndvbqspNIoIard.webp"
            alt="Our Story"
            className="about-image"
          />
        </div>
      </section>

      <section className="about-section about-our-mission reversed-layout">
        <div className="about-image-area">
          <img
            src="https://via.placeholder.com/400x300?text=Our+Mission"
            alt="Our Mission"
            className="about-image"
          />
        </div>
        <div className="about-content-area">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to empower your lifestyle by providing
            accessible, reliable, and inspiring products. We aim to create a
            seamless shopping experience, from Browse to delivery, and to build
            lasting relationships with our customers based on trust and mutual
            respect.
          </p>
          <p>
            We are dedicated to sustainable practices, supporting ethical
            manufacturing, and giving back to the community. Your choice to shop
            with us contributes to a larger vision of a better, more connected
            world.
          </p>
        </div>
      </section>

      <section className="about-section about-our-values">
        <div className="about-content-area">
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Quality:</strong> We never compromise on the excellence of
              our products.
            </li>
            <li>
              <strong>Customer Focus:</strong> Your satisfaction is our highest
              priority.
            </li>
            <li>
              <strong>Integrity:</strong> We operate with honesty and
              transparency.
            </li>
            <li>
              <strong>Innovation:</strong> We constantly seek new ways to
              improve and inspire.
            </li>
            <li>
              <strong>Community:</strong> We believe in building strong
              connections.
            </li>
          </ul>
        </div>
      </section>

      <section className="about-section about-call-to-action">
        <div className="about-content-area">
          <h2>Ready to Explore?</h2>
          <p>
            Dive into our collection and discover something new today. We're
            excited for you to be a part of our journey!
          </p>
          {/* You might replace this with a react-router-dom Link to your products page */}
          <button className="btn-primary">Shop Now</button>
        </div>
      </section>
    </div>
  );
}

export default About;
