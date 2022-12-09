import React from 'react';
import '../styles/Success.css';

function Success() {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Erika, Gracias por tu compra </h2>
        <span>Tu pedido llegara en 3 dias a tu direccion: </span>
        <div className="Success-map">
          Google map
        </div>
      </div>
    </div>
  )
}

export default Success;
