import React, { memo, useEffect, useState } from 'react';
import './index.css';
import logo from './assets/logo.jpg';
import OrderForm from './OrderForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import sample images
import chicken from './assets/chicken.png';
import thokku from './assets/thokku.png';
import chickenGongura from './assets/chickenGongura.png';
import mutton from './assets/mutton.png';
import prawns from './assets/prawns.png';

import sweetginger from './assets/sweetginger.png';
import hotginger from './assets/hotginger.png';
import tomato from './assets/tomato.png';
import lemon from './assets/lemon.png';
import gongura from './assets/gongura.png';
import pandumirchi from './assets/pandumirchi.png';

import karivepaku from './assets/karivepaku.png';
import moringa from './assets/moringa.png';
import flax from './assets/flax.png';
import madupuKaram from './assets/madupuKaram.png';
import nuvvulaKaram from './assets/nuvvulaKaram.png';

const App = () => {

  const products = {
    nonVeg: [
      { name: 'Chicken Pickle (Boneless)', price: '₹ 650', img: chicken },
      { name: 'Chicken Thokku Pickle (Boneless)', price: '₹ 650', img: thokku },
      { name: 'Chicken Gongura Pickle (Boneless)', price: '₹ 650', img: chickenGongura },
      { name: 'Mutton Pickle(Boneless)', price: '₹ 1100', img: mutton },
      { name: 'Prawns Pickle', price: '₹ 1000', img: prawns },
    ],
    veg: [
      { name: 'Ginger Pickle (Sweet)', price: '₹ 350', img: sweetginger },
      { name: 'Ginger Pickle (Hot)', price: '₹ 300', img: hotginger },
      { name: 'Tomato Pickle', price: '₹ 275', img: tomato },
      { name: 'Gongura Pickle', price: '₹ 275', img: gongura },
      { name: 'Gongura Pandumirchi Pickle', price: '₹ 350', img: pandumirchi },
      { name: 'Lemon Pickle', price: '₹ 275', img: lemon },
    ],
    powders: [
      { name: 'Karivepaku (Curry Leaves) Podi', price: '₹ 300', img: karivepaku },
      { name: 'Monaga Aaku Karam (Moringa Leaves)', price: '₹ 300', img: moringa },
      { name: 'Flax Seeds Podi (Avisi Ginjala Karam)', price: '₹ 300', img: flax },
      { name: 'Madupu Karam (Nalla Karam)', price: '₹ 300', img: madupuKaram },
      { name: 'Nuvvula Karam (Sesama Karam)', price: '₹ 300', img: nuvvulaKaram },
    ],
  };



  const testimonials = [
  {
    message: "Prompt delivery and very hygienic packaging. Highly recommended!",
    name: "Aparna, Hyderabad",
  },
  {
    message: "Loved the chicken pickle. Spicy and perfect with rice!",
    name: "Sumitra, Guntur",
  },
  {
    message: "The chicken pickle was absolutely delicious! Reminded me of home.",
    name: "Parvathi, Guntur",
  },
  // {
  //   message: "I gifted these pickles to my relatives — they all loved it!",
  //   name: "Vikram, Chennai",
  // }
];


const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 3000); // 4s per testimonial

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h2>💬 What Our Customers Say</h2>
      <div className="testimonial-card">
        <p>"{testimonials[index].message}"</p>
        <h4>- {testimonials[index].name}</h4>
      </div>
    </section>
  );
};


  const renderCategory = (title, items) => (
    <div className="category">
      <h2>{title}</h2>
      <div className="cards">
        {items.map((item, i) => (
          <div className="card" key={i}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>500 g - <strong>{item.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );

  return (

    <Router>
      <div className="container">
        <header className="header">
          <div className="left-header">
            <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
            <div className="brand">
              <div className="brand-title">
                <h1>SRIPATHI'S SPICE JAR</h1>
                <h5>(SSJ)</h5>
              </div>
              <p>Authentic Homemade Pickles & Karampodi</p>
              <p className="tagline">Traditional Flavors | 100% Homemade | No Preservatives</p>
            </div>
          </div>
          <Link to="/order" className="order-btn header-btn">Place Order</Link>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                {renderCategory('🌶️ Non-Veg Pickles', products.nonVeg)}
                {renderCategory('🥬 Veg Pickles', products.veg)}
                {renderCategory('🌶️ Karampodi (Spice Powders)', products.powders)}

                <TestimonialCarousel />

                <footer className="footer">
                  <div className="footer-left">
                    <p>📦 Bulk Orders Available | 🚚 All India Delivery</p>
                    <p>📞 +91 9849454482</p>
                    <p>📧 sripathispicejar@gmail.com</p>
                    <Link to="/order" className="order-btn">Place an Order</Link>
                  </div>

                  <div className="footer-right">
                    <p><strong>Address:</strong><br />
                      Sripathi Homes,
                      Flat No. F1,<br />
                      Ramanujakutam 1st Line,<br />
                      Opposite Jute Mill,<br />
                      Beside TJPS College,<br />
                      Guntur – 522006,
                      Andhra Pradesh
                    </p>
                  </div>
                </footer>


              </>
            }
          />
          <Route path="/order" element={<OrderForm />} />
        </Routes>
      </div>
    </Router>


  );
};

export default memo(App);
