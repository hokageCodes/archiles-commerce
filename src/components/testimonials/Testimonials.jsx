"use client"
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './testimonials.css'

const testimonials = [
  {
    id: 1,
    text: 'For a sneakerhead, Achilles has really helped me realize my dreams of owning a collection of the best sneakers. They never fail.',
    author: 'Andre',
  },
  {
    id: 2,
    text: 'I currently own about 35 pairs of sneakers and I bought them all from Achilles, I will always get my sneakers from Achilles.',
    author: 'Milo',
  },
  {
    id: 3,
    text: 'I buy more than two pairs whenever I go on Achilles, they’re every sneakerhead’s DisneyLand or CandyShop... literally!',
    author: 'Ariel',
  },
];

const TestimonialsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-slide">
                  <h2 className="testimonials-title">What Our Customers Say</h2>
                  <img src="/assets/svgs/quote.svg" className="quote-icon" alt="quote"/>
                  <blockquote className="testimonial-text">
                    “{testimonial.text}”
                  </blockquote>
                  <p className="testimonial-author">- {testimonial.author}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="testimonials-content">
            <div className="testimonials-title-container">
              <h2 className="testimonials-title">What Our Customers Say</h2>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className={`testimonial-card ${index !== testimonials.length - 1 ? 'card-divider' : ''}`}>
                  <img src="/assets/svgs/quote.svg" className="quote-icon" alt="quote"/>
                  <blockquote className="testimonial-text">
                    {testimonial.text}
                  </blockquote>
                  <p className="testimonial-author">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsSection;
