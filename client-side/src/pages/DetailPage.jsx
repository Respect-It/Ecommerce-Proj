import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data";
import { Rating } from "react-simple-star-rating";
import { CartContext } from "../App.jsx";
import "../styles/DetailPage.css"; // Your CSS file (same classNames)

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  const [popupMessage, setPopupMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const product = products.find((item) => item.id === parseInt(id));

  // Mock image array (since you don't have multiple images)
  const images = product
    ? [product.image, product.image, product.image, product.image, product.image]
    : [];

  const slidesRef = useRef([]);
  const paginatorRef = useRef([]);
  const quantityRef = useRef(null);
  const specShowRef = useRef(null);
  const infoShowRef = useRef(null);
  const specBlockRef = useRef(null);

  // 🔁 Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((currentSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (n) => {
    slidesRef.current.forEach((slide, i) => {
      if (slide) {
        slide.className =
          "sliderBlock_items__itemPhoto" + (i === n ? " sliderBlock_items__showing" : "");
      }
    });
    paginatorRef.current.forEach((item, i) => {
      if (item) {
        item.className =
          "sliderBlock_positionControls__paginatorItem" + (i === n ? " sliderBlock_positionControls__active" : "");
      }
    });
    setCurrentSlide(n);
  };

  const handlePaginatorClick = (index) => {
    goToSlide(index);
  };

  const toggleSpec = () => {
    if (specShowRef.current && infoShowRef.current && specBlockRef.current) {
      specShowRef.current.classList.toggle("hide");
      infoShowRef.current.classList.toggle("hide");
      specBlockRef.current.classList.toggle("block_descriptionCharacteristic__active");
    }
  };

  const increaseQuantity = () => {
    const val = parseInt(quantityRef.current.value);
    quantityRef.current.value = val + 1;
  };

  const decreaseQuantity = () => {
    const val = parseInt(quantityRef.current.value);
    if (val > 1) quantityRef.current.value = val - 1;
  };

  const handleAddToCart = () => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, { ...product, quantity: parseInt(quantityRef.current.value) || 1 }]);
      showPopup(`${product.title} has been added to your cart!`);
    } else {
      showPopup(`${product.title} is already in your cart!`);
    }
  };

  const showPopup = (message) => {
    setPopupMessage(message);
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 3000);
  };

  if (!product) {
    return (
      <div className="detail-container no-product-found">
        <h1 className="not-found-title">Product Not Found</h1>
        <p className="not-found-message">
          The product you are looking for does not exist or has been removed.
        </p>
        <button className="btn-primary go-home-btn" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <main className="main">
      <div className="mainWrapper">
        <div className="mainBackground clearfix">
          <div className="row">
            <div className="column small-centered">
              <div className="productCard_block">
                <div className="row">
                  {/* Left Side - Images */}
                  <div className="small-12 large-6 columns">
                    <div className="productCard_leftSide clearfix">
                      <div className="productCard_brendBlock">
                        <a className="productCard_brendBlock__imageBlock" href="#">
                          <img src={product.image} alt="brand" />
                        </a>
                      </div>
                      <div className="sliderBlock">
                        <ul className="sliderBlock_items">
                          {images.map((img, i) => (
                            <li
                              key={i}
                              ref={(el) => (slidesRef.current[i] = el)}
                              className={`sliderBlock_items__itemPhoto${
                                i === 0 ? " sliderBlock_items__showing" : ""
                              }`}
                            >
                              <img src={img} alt={`Slide ${i + 1}`} />
                            </li>
                          ))}
                        </ul>
                        <div className="sliderBlock_controls">
                          <div className="sliderBlock_controls__navigatin">
                            <div className="sliderBlock_controls__wrapper">
                              <div
                                className="sliderBlock_controls__arrow sliderBlock_controls__arrowBackward"
                                onClick={() =>
                                  goToSlide((currentSlide - 1 + images.length) % images.length)
                                }
                              >
                                <i className="fa fa-angle-left" aria-hidden="true"></i>
                              </div>
                              <div
                                className="sliderBlock_controls__arrow sliderBlock_controls__arrowForward"
                                onClick={() => goToSlide((currentSlide + 1) % images.length)}
                              >
                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                              </div>
                            </div>
                          </div>
                          <ul className="sliderBlock_positionControls">
                            {images.map((_, i) => (
                              <li
                                key={i}
                                ref={(el) => (paginatorRef.current[i] = el)}
                                className={`sliderBlock_positionControls__paginatorItem${
                                  i === 0 ? " sliderBlock_positionControls__active" : ""
                                }`}
                                onClick={() => handlePaginatorClick(i)}
                              ></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Info */}
                  <div className="small-12 large-6 columns">
                    <div className="productCard_rightSide">
                      <div className="block_specification" onClick={toggleSpec}>
                        <div
                          className="block_specification__specificationShow"
                          ref={specShowRef}
                        >
                          <i className="fa fa-cog block_specification__button block_specification__button__rotate"></i>
                          <span className="block_specification__text">spec</span>
                        </div>
                        <div
                          className="block_specification__informationShow hide"
                          ref={infoShowRef}
                        >
                          <i className="fa fa-info-circle block_specification__button block_specification__button__jump"></i>
                          <span className="block_specification__text">inform</span>
                        </div>
                      </div>

                      <p className="block_model">
                        <span className="block_model__text">Model: </span>
                        <span className="block_model__number">{product.id}</span>
                      </p>

                      <div className="block_product">
                        <h2 className="block_name block_name__mainName">{product.title}</h2>
                        <h2 className="block_name block_name__addName">Wireless Black</h2>

                        <p className="block_product__advantagesProduct">
                          {product.description}
                        </p>

                        <div className="block_descriptionInformation">
                          <span>
                            {/* Example Info */}
                            Experience cutting-edge wireless sound with noise-canceling features.
                          </span>
                        </div>

                        <div className="block_rating clearfix">
                          <Rating
                            readonly
                            allowFraction
                            initialValue={product.rating?.rate || 0}
                            size={24}
                          />
                          <span className="block_rating__avarage">
                            {product.rating?.rate || 0}
                          </span>
                          <span className="block_rating__reviews">
                            ({product.rating?.count || 0} reviews)
                          </span>
                        </div>

                        <div className="row">
                          <div className="large-6 small-12 column left-align">
                            <div className="block_price">
                              <p className="block_price__currency">
                                PKR {product.price.toFixed(2)}
                              </p>
                              <p className="block_price__shipping">
                                Shipping and taxes extra
                              </p>
                            </div>
                            <div className="block_quantity clearfix">
                              <span className="text_specification">Quantity</span>
                              <div className="block_quantity__chooseBlock">
                                <input
                                  ref={quantityRef}
                                  className="block_quantity__number"
                                  type="text"
                                  defaultValue={1}
                                  min={1}
                                />
                                <button
                                  className="block_quantity__button block_quantity__up"
                                  onClick={increaseQuantity}
                                ></button>
                                <button
                                  className="block_quantity__button block_quantity__down"
                                  onClick={decreaseQuantity}
                                ></button>
                              </div>
                            </div>
                          </div>
                          <div className="large-6 small-12 column end">
                            <div className="block_goodColor">
                              <span className="text_specification">Choose your colors:</span>
                              <div className="block_goodColor__allColors">
                                <input
                                  type="radio"
                                  name="colorOfItem"
                                  className="radio_button"
                                  id="radioColor"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="radioColor"
                                  className="block_goodColor__radio block_goodColor__black"
                                ></label>
                                <input
                                  type="radio"
                                  name="colorOfItem"
                                  className="radio_button"
                                  id="radioColor2"
                                />
                                <label
                                  htmlFor="radioColor2"
                                  className="block_goodColor__radio block_goodColor__silver"
                                ></label>
                              </div>
                            </div>
                            <button className="button button_addToCard" onClick={handleAddToCart}>
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        ref={specBlockRef}
                        className="block_descriptionCharacteristic block_descriptionCharacteristic__disActive"
                      >
                        {/* Example Spec Table */}
                        <table className="block_specificationInformation_table">
                          <tbody>
                            <tr>
                              <th>Characteristic</th>
                              <th>Value</th>
                            </tr>
                            <tr>
                              <td>Frequency Response</td>
                              <td>16Hz – 22kHz</td>
                            </tr>
                            <tr>
                              <td>Weight</td>
                              <td>260g</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {popupVisible && (
                  <div className="popup-message">
                    <span>{popupMessage}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DetailPage;
