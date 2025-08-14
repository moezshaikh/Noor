import React, { useState } from 'react';
import '../styles/submit.css';

const IslamicCalligraphyShop = () => {
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [customText, setCustomText] = useState('');
  const [customStyle, setCustomStyle] = useState('thuluth');
  const [customSize, setCustomSize] = useState('medium');
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    artType: '',
    size: '',
    color: '',
    price: '',
    image: null,
  });

  const openCustomizer = () => {
    setShowCustomizer(true);
  };

  const closeCustomizer = () => {
    setShowCustomizer(false);
    setCustomText('');
  };

  const calculateCustomPrice = () => {
    const basePrice = 50;
    const stylePrice = customStyle === 'thuluth' ? 30 : customStyle === 'diwani' ? 25 : 20;
    const sizePrice = customSize === 'large' ? 40 : customSize === 'medium' ? 20 : 10;
    return basePrice + stylePrice + sizePrice;
  };

  const handleCustomOrder = () => {
    const customProduct = {
      id: Date.now(),
      name: `Custom: ${customText}`,
      arabicText: customText,
      price: calculateCustomPrice(),
      style: customStyle,
      size: customSize,
      isCustom: true,
    };
    setCartItems([...cartItems, customProduct]);
    closeCustomizer();
  };

  return (
    <div className="app">
      <section className="hero">
        <div className="hero-content">
          <h1>Exquisite Calligraphy</h1>
          <div className="hero-arabic"></div>
          <p>
            Handcrafted Arabic calligraphy pieces that bring divine beauty to your home.
            Each piece is carefully designed with traditional techniques and modern aesthetics.
          </p>
          <button className="cta-button" onClick={openCustomizer}>
            Create Custom Design <span>✨</span>
          </button>
        </div>
      </section>

      <div className="form-group">
        <label className="form-label">Upload Reference Image (optional)</label>
        <div className="image-drop-zone"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
              setFormData((prev) => ({
                ...prev,
                image: file,
              }));
            }
          }}
          onClick={() => document.getElementById('imageInput').click()}
        >
          {formData.image ? (
            <p>📷 {formData.image.name}</p>
          ) : (
            <p>Drag & drop an image here, or click to select</p>
          )}
        </div>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              image: e.target.files[0],
            }))
          }
        />
      </div>

      {showCustomizer && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Custom Calligraphy Design</h2>
              <button className="close-button" onClick={closeCustomizer}>×</button>
            </div>

            <div className="form-group">
              <label className="form-label">Text *</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter your text here..."
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                dir="rtl"
                style={{ textAlign: 'right' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Size</label>
              <select
                className="form-select"
                value={customSize}
                onChange={(e) => setCustomSize(e.target.value)}
              >
                <option value="small">Small (8" x 6") - ₹10 extra</option>
                <option value="medium">Medium (12" x 9") - ₹20 extra</option>
                <option value="large">Large (16" x 12") - ₹40 extra</option>
              </select>
            </div>

            <div className="price-preview">
              <div>Estimated Price:</div>
              <div className="price-preview-amount">₹{calculateCustomPrice()}</div>
            </div>

            <button
              className="custom-order-button"
              onClick={handleCustomOrder}
              disabled={!customText.trim()}
            >
              Add Custom Design to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IslamicCalligraphyShop;
