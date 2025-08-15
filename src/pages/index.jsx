import React, { useState, useEffect } from 'react';
import '../styles/index.css';
import fe1 from '../assets/fe1.jpg';
import fe2 from '../assets/fe2.jpg';
import fe3 from '../assets/fe3.jpg';
import fe6 from '../assets/fe6.jpg';
import promoImage from "../assets/pro (1).jpg";
import { FaPalette, FaCrown, FaStar, FaTruck, FaExchangeAlt, FaLock, FaGift } from 'react-icons/fa';

const featuredArt = [
  {
    id: 1,
    title: 'La Ilaha Illallah Muhammadur Rasulullah',
    description: 'Handcrafted Islamic calligraphy with gold accents and emerald tones.',
    image: fe1,
  },
  {
    id: 2,
    title: 'Allahu Akbar',
    description: 'Classic script blending tradition and minimalism in cream and gold.',
    image: fe2,
  },
  {
    id: 3,
    title: 'Surah Ikhlas ( Qul huwal laahu ahad )',
    description: 'Bold emerald artwork featuring intricate Thuluth style calligraphy.',
    image: fe6,
  },
  
];

const testimonials = [
  {
    text: "Absolutely stunning calligraphy! The detail and care in every piece truly reflects the beauty of our faith.",
    author: "Ayesha K., Hyderabad",
  },
  {
    text: "I ordered a verse for my office. It came perfectly framed and on time. Highly recommend Noor.",
    author: "Imran S., Mumbai",
  },
  {
    text: "Their team helped me choose the perfect design for a gift. Beautiful craftsmanship and heartfelt service.",
    author: "Zainab M., Delhi",
  },
  {
    text: "The framed Ayat looks so elegant in our living room. Everyone asks where I got it from!",
    author: "Rehana B., Pune",
  },
  {
    text: "Noor’s calligraphy has brought so much peace to our home. The colors and gold accents are breathtaking.",
    author: "Faisal H., Lucknow",
  },
  {
    text: "Received my custom Surah Al-Ikhlas piece today — it’s even more beautiful in person. JazakAllah khair!",
    author: "Sameera P., Bengaluru",
  },
  {
    text: "I gifted their calligraphy to my parents on their anniversary. They were overjoyed and deeply moved.",
    author: "Ahmed R., Chennai",
  },
  {
    text: "From packaging to quality, everything was premium. Truly an art that connects the heart to the Creator.",
    author: "Maryam S., Jaipur",
  },
];


const Home = () => {
  const [current, setCurrent] = useState(0);
  const [email, setEmail] = useState(""); // newsletter email state

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Noor</h1>
        <p>Ink. Light. Devotion.</p>
        <a href="/gallery" className="explore-button">Explore Gallery</a>
      </section>

      {/* Featured Section */}
      <section className="featured-section">
        <h2>Featured Art</h2>
        <div className="featured-grid">
          {featuredArt.map((art) => (
            <div className="art-product-card" key={art.id}>
              <img src={art.image} alt={art.title} />
              <h3>{art.title}</h3>
              <p className="art-desc">{art.description}</p>
            </div>
          ))}
        </div>
        <div className="view-more-container">
          <a href="/gallery" className="view-more-button">View Collection</a>
        </div>
      
      </section>
      
     <section className="promotions">
      <div className="promo-container">
        {/* Left side: Image + Quote */}
        <div className="promo-left">
  <img src={promoImage} alt="Promotional Art" />
  <blockquote>"Every place deserves its own art"</blockquote>
</div>

        {/* Right side: Offer */}
<div className="promo-right">
  <h2>🎉 50% OFF Selected Artworks!</h2>
  <p>Free shipping on orders over ₹999. Limited time offer!</p>
  
  <ul className="promo-features">
    <li> Unique and original pieces from talented artists</li>
    <li> Perfect for home, office, or gifting</li>
    <li> High-quality prints with premium materials</li>
    <li> Hurry! Offer valid until stocks last</li>
  </ul>

  <p className="promo-cta">
    Don't miss your chance to own a masterpiece at half the price!  
    Explore our curated collection now.
  </p>

  <div className="shop-now-slide">
  <span>🔥 Hurry..!! Shop Now 🛍️ & Save Big 💰</span>
  <span>✨ Limited Offer! Grab Your Art 🎨 Now! 🏃‍♂️</span>
  <span>💫 Don’t Miss Out! Shop Today 🛒💚</span>
</div>




</div>
      </div>
    </section>

      {/* About Section */}
      <section className="about-simple-section">
        <div className="about-simple-container">
          <h2 className="about-simple-title">About Us</h2>
          <p className="about-simple-text">
            Noor is born out of a deep love for Islamic art, calligraphy, and modern digital expression.
            Our team has worked to bridge tradition and technology , preserving ancient
            scripts while innovating. Our mission is simple: to make meaningful,
            spiritually uplifting art accessible to all.
          </p>
          <p className="about-simple-text">
            Every piece we create is not just a design — it’s a reflection of faith, discipline, and devotion.
            From handcrafted calligraphy to AI-generated art rooted in heritage, we believe that creativity is
            a form of worship.
          </p>
          <p className="about-simple-text">
            Whether you're decorating your home, searching for a heartfelt gift, or exploring art with spiritual depth, 
            Noor offers a sanctuary of elegance, reverence, and soul.
          </p>
          <a href="/about" className="explore-button">Know More</a>
        </div>
      </section>

       {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2>Our Services</h2>
            <p>
              Beyond our collection, we offer personalized services to bring your vision to life
            </p>
           </div>
           <div className="services-grid">
            <div className="service-card">
              <div className="icon-wrapper emerald">
                <FaPalette className="service-icon" />
              </div>
              <h3>Custom Calligraphy</h3>
              <p>
                Commission personalized Islamic calligraphy pieces with your chosen verses, 
                names, or special messages crafted by our master artists.
              </p>
            </div>
            <div className="service-card">
              <div className="icon-wrapper amber">
                <FaCrown className="service-icon" />
              </div>
              <h3>Premium Framing</h3>
              <p>
                Professional framing services using museum-quality materials to preserve 
                and enhance your calligraphy artworks for generations.
              </p>
            </div>
            <div className="service-card">
              <div className="icon-wrapper gold">
                <FaTruck className="service-icon" />
              </div>
              <h3>Free Delivery</h3>
              <p>
                Enjoy fast and free shipping across India, with careful packaging to ensure your 
                art arrives safely.
              </p>
            </div>
            <div className="service-card">
        <div className="icon-wrapper teal">
          <FaGift className="service-icon" />
        </div>
        <h3>Gift Wrapping</h3>
        <p>Optional elegant gift wrapping for your artwork, perfect for special occasions or gifting your loved ones.</p>
      </div>
    
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2 className="newsletter-title">💌 Get Your Customised Art Now</h2>
          <p className="newsletter-text">Stay connected with Noor. Receive fresh, hand-crafted calligraphy delivered to your doorstep.</p>
          <a href="/gallery" className="explore-button">Order Now</a>
        </div>
      </section>

          {/* Newsletter Section */}
      <section className="newsletter">
  {/* Decorative floating elements */}
  <div className="newsletter-decor">
    <span className="decor decor-1">✒️</span>
    <span className="decor decor-2">🖌️</span>
    <span className="decor decor-3">📜</span>
  </div>

  <div className="newsletter-container">
    <h2>Connect With US</h2>
    <p>Subscribe to our newsletter for exclusive deals, updates, and hand-crafted calligraphy tips.</p>

    <form className="newsletter-form" onSubmit={handleSubscribe}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Subscribe</button>
    </form>

    <p className="newsletter-note">
      We respect your privacy. Unsubscribe anytime.
    </p>
  </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="testimonials-heading">💬 What Our Customers Say</h2>
        <div className="testimonial-container">
          {testimonials.map((item, idx) => (
            <div
              className={`testimonial-slide ${idx === current ? 'active' : ''}`}
              key={idx}
            >
              <div className="testimonial-card">
                <p className="testimonial-text">“{item.text}”</p>
                <h4 className="testimonial-author">— {item.author}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === current ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
            ></span>
          ))}
        </div>
      </section>      
    </div>
  );
};

export default Home;
