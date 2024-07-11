import React from 'react';
import './checkout.css';

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="shipping-information">
          <h2>Shipping Information</h2>
          <form>
            <label>
              Full Name*
              <input type="text" placeholder="Enter Your Name" />
            </label>
            <div className="inline-fields">
              <label>
                Email*
                <input type="email" placeholder="Enter Your Email" />
              </label>
              <label>
                Phone Number*
                <input type="tel" placeholder="+1 (123)-456-7890" />
              </label>
            </div>
            <label>
              House Address*
              <input type="text" placeholder="Enter Your Full Address" />
            </label>
            <label>
              Select Country
              <select>
                <option>Country</option>
              </select>
            </label>
            <div className="inline-fields">
              <label>
                City*
                <input type="text" placeholder="City" />
              </label>
              <label>
                Select Region
                <select>
                  <option>Region</option>
                </select>
              </label>
            </div>
            <label>
              Postal Code*
              <input type="text" placeholder="Enter Your Postal Code" />
            </label>
          </form>
          <div className="shipping-fees">
            <h3>Shipping Fees</h3>
            <div className="shipping-option">
              <input type="radio" id="express" name="shipping" checked />
              <label htmlFor="express">
                <div>
                  Express Shipping
                  <span>3-5 Working Days</span>
                </div>
                <span>$150</span>
              </label>
            </div>
            <div className="shipping-option">
              <input type="radio" id="regular" name="shipping" />
              <label htmlFor="regular">
                <div>
                  Regular Shipping
                  <span>14-21 Working Days</span>
                </div>
                <span>$25</span>
              </label>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="order-summary">
          <h2>Your Order</h2>
          <div className="order-item">
            <img src="/assets/images/products/pp1.png" alt="Air Jordan 6 DM" />
            <div>
              <p>Air Jordan 6 DM</p>
              <p>Size: 9</p>
              <p>Color: Black</p>
              <p>$329.99</p>
            </div>
          </div>
          <div className="order-item">
            <img src="/assets/images/4.png" alt="Air Jordan 1 GreyToe" />
            <div>
              <p>Air Jordan 1 GreyToe</p>
              <p>Size: 9</p>
              <p>Color: Grey/White</p>
              <p>$349.99</p>
            </div>
          </div>
          <div className="order-totals">
            <p>Subtotal: $679.98</p>
            <p>Discount (15% off): -$102</p>
            <p>Shipping: $150</p>
            <p>Grand Total: $727.98</p>
          </div>
          <button className="proceed-button">Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
