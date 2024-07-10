import React from 'react';
import './cart.css';

const Cart = () => {
  return (
    <div className="cart-container">
      <main className="cart-main">
        <div className="cart-steps">
          <div className="step active">Cart</div>
          <div className="step">Checkout</div>
          <div className="step">Payment</div>
        </div>
        <h1>My Cart</h1>
        <div className="cart-content">
          <table className="cart-table">
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>QUANTITY</th>
                <th>PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='table-data'>
                  <input type="checkbox" />
                  <img src="/assets/images/1.png" alt="New Balance Masculino" />
                  <div className="data-details">
                    <span>New Balance Masculino</span>
                    <span>Size: 9</span>
                    <span>Color: Custom</span>
                  </div>
                </td>
                <td>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </td>
                <td>$289.99</td>
                <td><button className="delete-btn">🗑️</button></td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" checked />
                  <img src="/assets/images/2.png" alt="Air Jordan 6 DM" />
                  <div>
                    <span>Air Jordan 6 DM</span>
                    <span>Size: 9</span>
                    <span>Color: Black</span>
                  </div>
                </td>
                <td>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </td>
                <td>$329.99</td>
                <td><button className="delete-btn">🗑️</button></td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" checked />
                  <img src="/assets/images/3.png" alt="Air Jordan 1 GreyToe" />
                  <div>
                    <span>Air Jordan 1 GreyToe</span>
                    <span>Size: 9</span>
                    <span>Color: Grey/White</span>
                  </div>
                </td>
                <td>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </td>
                <td>$349.99</td>
                <td><button className="delete-btn">🗑️</button></td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                  <img src="/assets/images/4.png" alt="New Balance 550 Olive" />
                  <div>
                    <span>New Balance 550 Olive</span>
                    <span>Size: 9</span>
                    <span>Color: Olive/White</span>
                  </div>
                </td>
                <td>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </td>
                <td>$220.00</td>
                <td><button className="delete-btn">🗑️</button></td>
              </tr>
            </tbody>
          </table>
          <div className="order-summary">
            <h2>Your Order</h2>
            <div className="order-item">
              <img src="air-jordan-6-dm.png" alt="Air Jordan 6 DM" />
              <div>
                <span>Air Jordan 6 DM (x1)</span>
                <span>Size: 9</span>
                <span>Color: Black</span>
              </div>
              <span>$329.99</span>
            </div>
            <div className="order-item">
              <img src="air-jordan-1-greytoe.png" alt="Air Jordan 1 GreyToe" />
              <div>
                <span>Air Jordan 1 GreyToe (x1)</span>
                <span>Size: 9</span>
                <span>Color: Grey/White</span>
              </div>
              <span>$349.99</span>
            </div>
            <div className="order-total">
              <span>Subtotal</span>
              <span>$679.98</span>
            </div>
            <div className="order-total">
              <span>Discount (15% off)</span>
              <span>-$102</span>
            </div>
            <div className="order-total grand-total">
              <span>Grand Total</span>
              <span>$577.98</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
