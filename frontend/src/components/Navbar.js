import React from 'react';
import '../styles/components.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Marketplace</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
