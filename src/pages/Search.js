// Inside Search.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css'; // assume some basic styling

const Search = () => {
  const navigate = useNavigate();

  const properties = [
    {
      id: 1,
      address: '123 Main St',
      city: 'New York',
      price: 450000,
      beds: 3,
      baths: 2,
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      address: '456 Oak Ave',
      city: 'Los Angeles',
      price: 650000,
      beds: 4,
      baths: 3,
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  const handleViewMortgage = (property) => {
    navigate('/mortgage-calculator', { state: property });
  };

  return (
    <div className="property-list">
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
      ))}
    </div>
  );
};

export default Search;
