import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './product.css';

const ProductPage = () => {
  // State to hold the main image URL
  const [mainImage, setMainImage] = useState('../../assets/images/products/pp1.png');

  // Array of thumbnail images
  const thumbnails = [
    '/assets/images/products/pp2.png',
    '/assets/images/products/pp3.png',
    '/assets/images/products/pp4.png',
    '/assets/images/products/pp5.png',
    '/assets/images/products/pp6.png',
  ];

  // State to handle mobile view
  const [isMobile, setIsMobile] = useState(false);

  // Function to handle thumbnail click
  const handleThumbnailClick = (thumbnailUrl) => {
    setMainImage(thumbnailUrl); // Update main image URL
  };

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="product-page">
      <div className="product-main-section">
        <div className="product-image-section">
          <img
            src={mainImage}
            alt="Air Jordan 6 Retro"
            className="product-image"
          />
        </div>
        <div className="product-details-section">
          <h1 className="product-title">Air Jordan 6 Retro "Defining Moments"</h1>
          <div className="star-rating">
            {Array(5).fill('★').map((star, index) => (
              <span key={index} className={index < 4 ? 'filled-star' : 'empty-star'}>★</span>
            ))}
          </div>
          <div className="product-options">
            <label>
              Size:
              <select>
                <option>9</option>
                <option>10</option>
                <option>11</option>
              </select>
            </label>
            <label>
              Qty:
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </label>
          </div>
          <div className="product-price">
            $329.99
          </div>
          <p className="product-description">
            The Air Jordan 6 Retro "Defining Moments" embodies a blend of elegance and boldness, making a striking visual statement with its iconic silhouette.
          </p>
          <p className="product-description">Designed for both style and impact, this sneaker seamlessly merges classic elements with contemporary flair, appealing to both collectors and fashion enthusiasts.</p>

          {isMobile && (
            <Swiper
              spaceBetween={5} // Adjusted space between thumbnails
              slidesPerView={'auto'}
              className="thumbnail-swiper"
              autoplay
            >
              {thumbnails.map((thumbnail, index) => (
                <SwiperSlide key={index} className="thumbnail-slide">
                  <img
                    src={thumbnail}
                    alt={`thumbnail ${index + 1}`}
                    className="thumbnail"
                    onClick={() => handleThumbnailClick(thumbnail)}  // Handle click event
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <button className="buy-now-button"><a href="/cart">Buy Now</a></button>
        </div>
      </div>
      {!isMobile && (
        <div className="thumbnail-gallery">
          {thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt={`thumbnail ${index + 1}`}
              className="thumbnail"
              onClick={() => handleThumbnailClick(thumbnail)}  // Handle click event
            />
          ))}
        </div>
      )}
      <p className="cart-message">*This item has already been added to your cart.</p>
    </div>
  );
};

export default ProductPage;
