"use client";
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import products from '../../products';
import './deals.css'

const DealsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [bestDeals, setBestDeals] = useState(products.bestDeals);
  const [topProducts, setTopProducts] = useState(products.topProducts);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);
  const renderSection = (title, items, setItems) => (
    <div className="deals-container">
      <h2 className="deals-title">{title}</h2>
      <div className="deals-content">
        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={'auto'}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              375: {
                slidesPerView: 1,
              },
              413: {
                slidesPerView: 2,
              },
              415: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="deal-card">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="deal-image"
                  />
                  <div className="deal-info">
                    <div className="deal-title">{item.title}</div>
                    <p className="deal-price">{item.price}</p>
                    <button className="deal-button">Add to Cart</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="deals-grid">
            {items.map((item) => (
              <div key={item.id} className="deal-card">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="deal-image"
                />
                <div className="deal-info">
                  <div className="deal-title">{item.title}</div>
                  <p className="deal-price">{item.price}</p>
                  <button className="deal-button">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="deals-section">
      {renderSection('Best Deals Today', bestDeals, setBestDeals)}
      <hr className="deals-divider" />
      {renderSection('Top Products', topProducts, setTopProducts)}
    </div>
  );
};

export default DealsSection;
