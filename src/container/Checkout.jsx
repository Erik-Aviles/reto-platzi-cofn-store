import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Checkout.css'

function Checkout() {
  return (
    <div className='Checkout'>
      <div className='Checkout-content'>
        <h3>Lista de pedidos: </h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>Item name</h4>
            <span>$18</span>
          </div>
          <button type='button'>
          <i className="fa-solid fa-trash"/>
          </button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: $18</h3>
         <Link to='/checkout/information'>
          <button type='button'>Continuar pedidos</button>
        </Link>
      </div>

    </div>
  );
}

export default Checkout;
