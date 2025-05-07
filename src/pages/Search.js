import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css'; 
// import mockProperties from '../data/data.js';
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
    },
    {
      id: 4,
      address: '901 Pine Street',
      city: 'Denver',
      price: 810000,
      beds: 5,
      baths: 4,
      image: 'https://www.adanirealty.com/-/media/project/realty/blogs/types-of-residential-properties.ashx',
    },
    {
      id: 5,
      address: '14 River Drive',
      city: 'Austin',
      price: 470000,
      beds: 3,
      baths: 2,
      image: 'https://cms.ezylegal.in/wp-content/uploads/2022/04/types-of-properties-1.jpg',
    },
    {
      id: 6,
      address: '321 Elm Road',
      city: 'Chicago',
      price: 620000,
      beds: 4,
      baths: 3,
      image: 'https://cdn.britannica.com/05/157305-004-53D5D212.jpg',
    },
    {
      id: 7,
      address: '88 Coastal View',
      city: 'Miami',
      price: 950000,
      beds: 6,
      baths: 5,
      image: 'https://images.wsj.net/im-97296397/?width=1280&height=853',
    },
    {
      id: 8,
      address: '55 Mountain Ridge',
      city: 'Phoenix',
      price: 520000,
      beds: 3,
      baths: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlZo727G2zM_cq9fG5PcVHs4tyclyog_IaA&s',
    },
    {
      id: 9,
      address: '33 Maple Street',
      city: 'Boston',
      price: 670000,
      beds: 4,
      baths: 3,
      image: 'https://i2.au.reastatic.net/800x600/886f570e7da58c8404416134ec34cc7e33c80886139bc7d6a238fa60155ee900/image.jpg',
    },
    {
      id: 10,
      address: '77 Willow Way',
      city: 'San Francisco',
      price: 1100000,
      beds: 5,
      baths: 4,
      image: 'https://rimh2.domainstatic.com.au/LLVspUrgofLYWxEnIsMN4l8Ob5c=/660x440/filters:format(jpeg):quality(80)/17450734_5_1_250331_025539-w1920-h1280',
    },
  ];


  const handleViewMortgage = (property) => {
    navigate('/mortgage-calculator', { state: property });
  };

  return (<>
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
    
    </>
  );
};

export default Search;
