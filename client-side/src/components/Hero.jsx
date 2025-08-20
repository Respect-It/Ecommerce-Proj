import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/hero.css';

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Summer Collection 2025",
      subtitle: "Discover the latest trends",
      description: "Shop our newest arrivals and enjoy up to 50% off selected items",
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      cta: "Shop Now",
      accent: "#f97316"
    },
    {
      id: 2,
      title: "Premium Electronics",
      subtitle: "Latest technology at your fingertips",
      description: "Explore cutting-edge gadgets and electronics with exclusive deals",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      cta: "Explore",
      accent: "#2563eb"
    },
    {
      id: 3,
      title: "Home & Living",
      subtitle: "Transform your space",
      description: "Beautiful furniture and home decor to make your house a home",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      cta: "Discover",
      accent: "#059669"
    },
    {
      id: 4,
      title: "Fashion Forward",
      subtitle: "Style meets comfort",
      description: "Trendy clothing and accessories for every occasion",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      cta: "Shop Style",
      accent: "#dc2626"
    }
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true
          }}
          loop={true}
          className="hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="hero-slide">
                <div className="hero-bg">
                  <img src={slide.image} alt={slide.title} />
                  <div className="hero-overlay"></div>
                </div>
                
                <div className="container">
                  <div className="hero-content">
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="hero-text"
                    >
                      <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="hero-subtitle"
                        style={{ color: slide.accent }}
                      >
                        {slide.subtitle}
                      </motion.p>
                      
                      <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="hero-title"
                      >
                        {slide.title}
                      </motion.h1>
                      
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="hero-description"
                      >
                        {slide.description}
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0 }}
                        className="hero-actions"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-primary hero-cta"
                          style={{ background: `linear-gradient(135deg, ${slide.accent}, ${slide.accent}dd)` }}
                        >
                          {slide.cta}
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-secondary hero-secondary"
                        >
                          Learn More
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="swiper-button-prev-custom nav-button"
        >
          <ChevronLeft size={24} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="swiper-button-next-custom nav-button"
        >
          <ChevronRight size={24} />
        </motion.div>

        {/* Custom Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="swiper-pagination-custom"
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;