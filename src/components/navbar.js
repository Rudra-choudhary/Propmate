import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar" style={{padding: '20px',backgroundColor:'lightgrey'}}>
    <div className="logo">🏡 PropMate</div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/mortgage-calculator">Mortgage</Link>
    </div>
  </nav>
  );
}

export default Navbar;
