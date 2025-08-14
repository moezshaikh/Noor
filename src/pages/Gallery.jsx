import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ✅ Added

import '../styles/gallery.css';
import fe1 from '../assets/fe1.jpg';
import fe2 from '../assets/fe2.jpg';
import fe3 from '../assets/fe3.jpg';
import fe4 from '../assets/fe4.jpg';
import fe5 from '../assets/fe5.jpg';
import fe6 from '../assets/fe6.jpg';
import fe7 from '../assets/fe7.jpg';
import fe8 from '../assets/fe8.jpg';
import fe9 from '../assets/fe9.jpg';
import fe10 from '../assets/fe10.jpg';
import fe12 from '../assets/fe12.jpg';

const ArtGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState([]);
   const navigate = useNavigate();

  const handleAddToCart = (product) => {
    navigate("/cartcheckout", { state: { product } });
  };
  const artProducts = [
    {
      id: 1,
      title: "La Ilaha Illallah Muhammadur Rasulullah",
      price: 299.99,
      originalPrice: 399.99,
      image: fe1,
      category: "Canvas Art",
      rating: 4.8,
      reviews: 124,
      description: "A vibrant abstract representation of a sunset with warm oranges and deep purples flowing across the canvas."
    },
    {
      id: 2,
      title: "Allahu Akbar",
      price: 149.99,
      image: fe2,
      category: "Digital Print",
      rating: 4.9,
      reviews: 89,
      description: "Clean, modern line art that captures the essence of human form with minimal strokes."
    },
    {
      id: 3,
      title: "Fabi Ayyi Ala I Rabbikuma Tukazziban ",      
      price: 189.99,
      image: fe3,
      category: "Watercolor",
      rating: 4.7,
      reviews: 156,
      description: "Delicate watercolor paintings featuring exotic plants and flowers in soft, natural tones."
    },
    {
      id: 4,
      title: "Fa-udhkuruni adhkurkum",      
      price: 249.99,
      image: fe4,
      category: "Photography",
      rating: 4.6,
      reviews: 92,
      description: "Black and white architectural photography showcasing the geometric beauty of modern buildings."
    },
    {
      id: 5,
      title: "Fabi Ayyi Ala I Rabbikuma Tukazziban",      
      price: 349.99,
      image: fe12,
      category: "Oil Painting",
      rating: 4.9,
      reviews: 78,
      description: "Classical portrait paintings with rich textures and timeless elegance in the Renaissance style."
    },
    {
      id: 6,
      title: "Surah Ikhlas ( Qul huwal laahu ahad ) ",      
      price: 199.99,
      originalPrice: 249.99,
      image: fe6,
      category: "Acrylic Art",
      rating: 4.8,
      reviews: 134,
      description: "Dynamic abstract interpretation of ocean waves with flowing blues and whites creating movement."
    },
    {
      id: 7,
      title: "Muḥammadun Rasūlu-llāh (Saw)",      
      price: 279.99,
      image:fe7,
      category: "Landscape",
      rating: 4.7,
      reviews: 167,
      description: "Serene forest landscape capturing the play of light through ancient trees along a winding path."
    },
    {
      id: 8,
      title: "Hadha min fadli Rabbi",      
      price: 129.99,
      image: fe8,
      category: "Digital Art",
      rating: 4.5,
      reviews: 203,
      description: "Bold geometric patterns in vibrant colors that create optical illusions and visual depth."
    },
    {
      id: 8,
      title: "Subhan Allah",  
      price: 129.99,
      image: fe9,
      category: "Digital Art",
      rating: 4.5,
      reviews: 203,
      description: "Bold geometric patterns in vibrant colors that create optical illusions and visual depth."
    },
       {
      id: 8,
      title: " Surah An-Nas ( Qul A’uzu Bi Rabbin Nas )",
      price: 129.99,
      image: fe10,
      category: "Digital Art",
      rating: 4.5,
      reviews: 203,
      description: "Bold geometric patterns in vibrant colors that create optical illusions and visual depth."
    }
  ];

const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    navigate("/CartCheckout"); // ✅ Redirect to checkout after adding
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <div className="gallery-header-content">
          <h1>Artisan Gallery</h1>
          <p>Discover exceptional art from talented artists around the world</p>
        </div>
      </header>

      <div className="gallery-grid">
        {artProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="product-overlay">
                <button
                  className="overlay-btn"
                  onClick={() => openModal(product)}
                >
                  <Eye size={20} />
                </button>
                <button
                  className={`overlay-btn favorite-btn ${
                    favorites.has(product.id) ? "active" : ""
                  }`}
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart size={20} />
                </button>
              </div>
              {product.originalPrice && (
                <span className="sale-badge">Sale</span>
              )}
            </div>

            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>

              <div className="product-rating">
                <Star size={16} className="star-icon" />
                <span>{product.rating}</span>
                <span className="reviews-count">
                  ({product.reviews} reviews)
                </span>
              </div>

              <div className="product-pricing">
                <span className="current-price">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="original-price">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>

              <button
            className="add-to-cart-btn"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                />
              </div>
              <div className="modal-details">
                <h2>{selectedProduct.title}</h2>
                
                <div className="modal-rating">
                  <Star size={18} className="star-icon" />
                  <span>{selectedProduct.rating}</span>
                  <span className="reviews-count">
                    ({selectedProduct.reviews} reviews)
                  </span>
                </div>
                <p className="modal-description">
                  {selectedProduct.description}
                </p>
                <div className="modal-pricing">
                  <span className="current-price">
                    ₹{selectedProduct.price}
                  </span>
                  {selectedProduct.originalPrice && (
                    <span className="original-price">
                      ₹{selectedProduct.originalPrice}
                    </span>
                  )}
                </div>
                <div className="modal-actions">
                  <button
                    className="add-to-cart-btn"
                    onClick={() => goToCart(selectedProduct)}
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                  <button
                    className={`favorite-btn-modal ${
                      favorites.has(selectedProduct.id) ? "active" : ""
                    }`}
                    onClick={() => toggleFavorite(selectedProduct.id)}
                  >
                    <Heart size={18} />
                    {favorites.has(selectedProduct.id)
                      ? "Remove from Favorites"
                      : "Add to Favorites"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtGallery;