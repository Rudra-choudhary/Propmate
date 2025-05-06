import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">


      <header className="hero-section">
        <h1>Find Your Dream Home</h1>
        <p>Search properties, compare listings, and estimate your mortgage — all in one place.</p>
        <Link to="/search">
          <button className="hero-button">Start Searching</button>
        </Link>
      </header>

      <section className="filter-section">
        <h2>🔍 Quick Filters</h2>
        <div className="filter-bar">
          <input type="text" placeholder="Location" />
          <select>
            <option>Type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Condo</option>
          </select>
          <input type="text" placeholder="Min Price" />
          <input type="text" placeholder="Max Price" />
          <button className="search-btn">Search</button>
        </div>
      </section>

      <section className="featured-section">
        <h2>🏠 Featured Properties</h2>
        <div className="property-grid">
          <div className="property-card">Property 1</div>
          <div className="property-card">Property 2</div>
          <div className="property-card">Property 3</div>
        </div>
      </section>

      <section className="cta-section">
        <p>Curious about mortgage payments?</p>
        <Link to="/mortgage-calculator">
          <button className="calc-btn">Try Our Calculator</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
