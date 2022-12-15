import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/icon-black.png'
import AppContext from '../context/AppContext';
import '../styles/Header.css';

function Header() {
  const { state: {cart} } = useContext(AppContext);
  return (
    <div className="Header">
      <div>
        <Link to='/'> <img src={logo} alt="" width={100} /></Link>
      </div>
     {/*  <h1>
        <Link className="Header-title" to='/'><span className="Header-title1">iB</span><span className="Header-title2">iS</span> </Link>
      </h1> */}
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
