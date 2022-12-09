import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Information.css'

function Information() {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contactos</h2>
        </div>
        <div className="Information-form">
          <form >
            <input type='text' placeholder='Nombre' name='name' />
            <input type='text' placeholder='Apellido' name='apellido' />
            <input type='text' placeholder='Correo' name='email' />
            <input type='text' placeholder='Direccion' name='address' />
            <input type='text' placeholder='Ciudad' name='city' />
            <input type='text' placeholder='Pais' name='country' />
            <input type='text' placeholder='Region' name='state' />
            <input type='text' placeholder='Codigo postatl' name='cp' />
            <input type='text' placeholder='Telefono' name='phone' />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to='/checkout'>
            <i className="fa-solid fa-arrow-left"> Regresar</i>
            </Link>
          </div>
          <div className="Information-next">
          <Link to='/checkout/payment'>
            <i className="fa-solid fa-pager"> Pagar</i>
            </Link>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item Name</h4>
            <span>$18</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information ;
