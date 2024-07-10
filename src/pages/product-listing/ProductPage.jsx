import React from 'react';
import './product.css';

const ProductPage = () => {
  const mainImage = '../../assets/images/products/pp1.png';
  const thumbnails = [
    '/assets/images/products/pp2.png',
    '/assets/images/products/pp3.png',
    '/assets/images/products/pp4.png',
    '/assets/images/products/pp5.png',
    '/assets/images/products/pp6.png',
  ];

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
          <button className="buy-now-button">Buy Now</button>
        </div>
      </div>
      <div className="thumbnail-gallery">
        {thumbnails.map((thumbnail, index) => (
          <img key={index} src={thumbnail} alt={`thumbnail ${index + 1}`} className="thumbnail" />
        ))}
      </div>
      <p className="cart-message">*This item has already been added to your cart.</p>
    </div>
  );
};

export default ProductPage;
