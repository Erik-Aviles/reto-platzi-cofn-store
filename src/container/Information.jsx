import React, { useRef, useContext } from 'react';
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/Information.css';

function Information() {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);
  const form = useRef(null);
  const navegate = useNavigate();

  const handleSutmit = () => {
    const formData = new FormData(form.current);
    const buyer = Object.fromEntries(formData);
    /*     const buyer = {
      'name': formData.get('name'),
      'apellido': formData.get('apellido'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    } */
    addToBuyer(buyer);
    navegate('/checkout/payment');
  };

  return (
    <>
      <Helmet> 
        <title>Informacion de contacto - Erika Store</title>
      </Helmet>
      <div className="Information">
        <div className="Information-content">
          <div className="Information-head">
            <h3>INFORMACION DE CONTACTO</h3>
          </div>
          <div className="Information-form">
            <form ref={form}>
              <input type="text" placeholder="Nombre" name="name" />
              <input type="text" placeholder="Apellido" name="apellido" />
              <input type="text" placeholder="Correo" name="email" />
              <input type="text" placeholder="Direccion" name="address" />
              <input type="text" placeholder="Ciudad" name="city" />
              <input type="text" placeholder="Pais" name="country" />
              <input type="text" placeholder="Region" name="state" />
              <input type="text" placeholder="Codigo postal" name="cp" />
              <input type="text" placeholder="Telefono" name="phone" />
            </form>
          </div>
          <div className="Information-buttons">
            <div className="Information-back">
              <Link to="/checkout">
                <i className="fa-solid fa-arrow-left"> Regresar</i>
              </Link>
            </div>
            <div className="Information-next">
              <button type="button" onClick={handleSutmit}>
                <i className="fa-solid fa-pager"> Pagar</i>
              </button>
            </div>
          </div>
        </div>
        <div className="Information-sidebar">
          <h3>PEDIDO:</h3>
          {cart.map((items) => (
            <div className="Information-item" key={items.id}>
              <div className="Information-element">
                <h4>{items.title}</h4>
                <span>$ {items.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Information;
