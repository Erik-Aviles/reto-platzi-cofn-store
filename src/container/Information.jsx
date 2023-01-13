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
    const nameRef = form.current.name
    const apellidoRef = form.current.apellido
    const emailRef = form.current.email
    const addressRef = form.current.address
    const cityRef = form.current.city
    const regionRef = form.current.region
    const countryRef = form.current.country
    const phoneRef = form.current.phone
    const cpRef = form.current.cp
    switch (true) {
      case buyer.name === '':
        nameRef.focus();
        break;
      case buyer.apellido === '':
        apellidoRef.focus();
        break;
      case buyer.email === '':
        emailRef.focus();
        break;
      case buyer.address === '':
        addressRef.focus();
        break;
      case buyer.city === '':
        cityRef.focus();
        break;
      case buyer.region === '':
        regionRef.focus();
        break;
      case buyer.country === '':
        countryRef.focus();
        break;
      case buyer.phone === '':
        phoneRef.focus();
        break;
      case buyer.cp === '':
        cpRef.focus();
        break;
    
      default:   
        addToBuyer(buyer);
        navegate('/checkout/payment');
        break;
    }

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
              <input type="text" placeholder="Region" name="region" />
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
