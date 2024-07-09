"use client"
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './hero.css';

const SneakerSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="sneaker-section">
      <motion.div
        className="sneaker-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 data-aos="fade-up">All your favorite sneakers, in one place.</h1>
        <p>
          Exclusively for sneakerheads of all ages, gender, and the rest of humanity
        </p>
        <motion.button
          className="explore-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore
        </motion.button>
      </motion.div>
      <motion.div
        className="sneaker-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="./assets/images/hero-img.png" alt="Sneaker" />
      </motion.div>
    </div>
  );
}

export default SneakerSection;
