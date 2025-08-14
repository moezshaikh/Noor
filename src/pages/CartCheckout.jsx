import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/CartCheckout.css";

function CartCheckout() {
  const location = useLocation();
  const productFromGallery = location.state?.product;
  const [selectedPayment, setSelectedPayment] = useState("");


  const [cart, setCart] = useState(
    productFromGallery
      ? [{ ...productFromGallery, qty: 1 }]
      : [
          { id: 1, name: "Framed Surah Al-Ikhlas", price: 2500, qty: 1, img: "/images/ayat1.jpg" },
          { id: 2, name: "Custom Name Calligraphy", price: 1800, qty: 2, img: "/images/custom.jpg" },
        ]
  );

  const [success, setSuccess] = useState(false);

  const updateQty = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + amount) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 3000 ? 0 : 150;
  const total = subtotal + shipping;

  const handlePayment = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="checkout-container">
      {!success ? (
        <>
          {/* Cart Summary */}
          <div className="cart-section">
            <h2>Your Cart</h2>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.img || item.image} alt={item.name || item.title} />
                <div className="cart-details">
                  <h4>{item.name || item.title}</h4>
                  <p>₹{item.price}</p>
                  <div className="qty-control">
                    <button onClick={() => updateQty(item.id, -1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <p>Subtotal: ₹{subtotal}</p>
              <p>Shipping: {shipping === 0 ? "Free" : `₹${shipping}`}</p>
              <h3>Total: ₹{total}</h3>
            </div>
          </div>

          {/* Checkout Form */}
          <form className="checkout-form" onSubmit={handlePayment}>
            <h2>Checkout</h2>
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Street Address" required />
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="State" required />
              <input type="text" placeholder="Pincode" required />
            </div>

            {/* Payment Options */}
<div className="payment-section">
  <h3>Payment Method</h3>

  <label>
    <input
      type="radio"
      name="payment"
      value="card"
      required
      onChange={(e) => setSelectedPayment(e.target.value)}
    /> Credit/Debit Card
  </label>

  {selectedPayment === "card" && (
    <div className="payment-details">
      <input type="text" placeholder="Cardholder Name" required />
      <input type="text" placeholder="Card Number" required maxLength="16" />
      <div className="card-row">
        <input type="text" placeholder="MM/YY" required maxLength="5" />
        <input type="text" placeholder="CVV" required maxLength="3" />
      </div>
    </div>
  )}

  <label>
    <input
      type="radio"
      name="payment"
      value="upi"
      onChange={(e) => setSelectedPayment(e.target.value)}
    /> UPI / Wallets
  </label>

  {selectedPayment === "upi" && (
    <div className="payment-details">
      <label>
        <input type="radio" name="upiOption" value="gpay" /> Google Pay
      </label>
      <label>
        <input type="radio" name="upiOption" value="phonepe" /> PhonePe
      </label>
      <label>
        <input type="radio" name="upiOption" value="paytm" /> Paytm
      </label>
      <input type="text" placeholder="Enter UPI ID" required />
    </div>
  )}

  <label>
    <input
      type="radio"
      name="payment"
      value="netbanking"
      onChange={(e) => setSelectedPayment(e.target.value)}
    /> Net Banking
  </label>

  {selectedPayment === "netbanking" && (
    <div className="payment-details">
      <select required>
        <option value="">Select Bank</option>
        <option value="sbi">State Bank of India</option>
        <option value="hdfc">HDFC Bank</option>
        <option value="icici">ICICI Bank</option>
        <option value="axis">Axis Bank</option>
      </select>
    </div>
  )}

  <label>
    <input
      type="radio"
      name="payment"
      value="paypal"
      onChange={(e) => setSelectedPayment(e.target.value)}
    /> PayPal
  </label>

  {selectedPayment === "paypal" && (
    <div className="payment-details">
      <input type="email" placeholder="PayPal Email" required />
    </div>
  )}
</div>


            {/* Trust Badges */}
            <div className="trust-section">
              <p>🔒 Secure Payment — SSL Encrypted</p>
              <p>✔ Easy Returns within 7 days</p>
              <p>🚚 Free Shipping on orders above ₹3000</p>
            </div>

            <button type="submit" className="checkout-btn">Place Order</button>
          </form>
        </>
      ) : (
        // Post-Payment Confirmation
        <div className="success-message">
          <h2>✅ Thank you, we’ll be in touch within 24 hours!</h2>
          <p>Your order has been successfully placed.</p>
          <p>We’ll email you the details shortly.</p>
          <button onClick={() => window.location.href = "/"}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
}

export default CartCheckout;
