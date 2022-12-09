import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/Header.css';

function Header() {
  const { state: {cart} } = useContext(AppContext);
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to='/'> Erik Conf Merch </Link>
      </h1>
      <div className="Header-checkout">
        { 
          cart.length > 0 && 
            <div className="Header-alert">{cart.length}</div> 
        }
        <Link to="/checkout">
        <i className="fa-solid fa-cart-shopping"/>
        </Link>
      </div>
    </div>
  );
}

export default Header;
