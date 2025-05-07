import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const properties = [
    {
      id: 1,
      address: '123 Main St',
      city: 'New York',
      price: 450000,
      beds: 3,
      baths: 2,
      image: 'https://s3.amazonaws.com/rcp-prod-uploads/property_images/slider_images/2021-06/da3ae62144e59058a1d27b1b958af4b96a6135e5LE.jpg',
    },
    {
      id: 2,
      address: '456 Oak Ave',
      city: 'Los Angeles',
      price: 650000,
      beds: 4,
      baths: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg05oCCpRx3IHhtJRHcyIzpTG6SJTTNazCVw&s',
    },
    {
      id: 3,
      address: '22 Cedar Lane',
      city: 'Seattle',
      price: 590000,
      beds: 2,
      baths: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQracQu4WbuywNp_VIaZtSpoBYPN4U-EeM30A&s',
    },]
  return (
    <div className="home-container">


      <header className="main-section">
        <h1>Find Your Dream Home</h1>
        <p>Search properties and estimate your mortgage only with Propmate.</p>
        <Link to="/search">
          <button className="main-button">Start Searching</button>
        </Link>
      </header>

      <section className="filter-section">
        <h2>Quick Filters</h2>
        <div className="filter-bar">
          <input type="text" placeholder="Location" />
          <select>
            <option>Type</option>
            <option>House</option>
            <option>Apartment</option>
          </select>
          <input type="text" placeholder="Min Price" />
          <input type="text" placeholder="Max Price" />
          <Link to="/search">
          <button className="search-btn">Search</button>
          </Link>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Properties</h2>
        <div className="property-grid">
        {properties.map((property) => (
    <div className="property-card" key={property.id} >
      <img src={property.image} alt={property.address} />
      <h3>{property.address}, {property.city}</h3>
      <p>Price: ${property.price.toLocaleString()}</p>
      <p>Beds: {property.beds} | Baths: {property.baths}</p>

  </div>
))}
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

{/* <div className="property-list">

{properties.map((property) => (
  <div className="property-card" key={property.id}>
    <img src={property.image} alt={property.address} />
    <h3>{property.address}, {property.city}</h3>
    <p>Price: ${property.price.toLocaleString()}</p>
    <p>Beds: {property.beds} | Baths: {property.baths}</p>
    <button onClick={() => handleViewMortgage(property)}>
      View Mortgage
    </button>
  </div>
))} */}