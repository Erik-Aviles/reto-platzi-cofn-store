import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Payment.css'

function Payment() {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido: </h3>
        <div className="Payment-button">
         <Link to='/checkout/success'>
         <i className="fa-solid fa-money-bill-1-wave"> Pago con payment</i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Payment;
