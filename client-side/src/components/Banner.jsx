import React from "react";
import banner from "../assets/banner.webm";
import "../styles/Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <iframe
        src="https://my.spline.design/genkubgreetingrobot-bDgLe5b5me5mzFDpDsb5KhgG/"
        width="100%"
        height="100%"
      ></iframe>
      <video
        className="banner-image"
        src={banner}
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      <button className="shop-genie-btn">Shop Now</button>
    </section>
  );
};

export default Banner;
