import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import handleSumTotal from '../utils/handleSumTotal';
import '../styles/Checkout.css';

function Checkout() {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  /*   const handleRemove = (productId ) => ()=> {
    removeFromCart(productId)
  } */
  const handleRemove = (productId, index) => () => {
    removeFromCart(productId, index);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de pedidos: </h3>
        ) : (
          <h3>Sin pedidos... </h3>
        )}
        <div className={cart.length ? "Checkout-items" : null}>
          {cart.map((items, index) => (
          <div className="Checkout-item" key={items.title}>
            <div className="Checkout-element">
              <h4>{items.title}</h4>
              <span>${items.price}</span>
            </div>
            <button type="button" onClick={handleRemove(items, index)}>
              <i className="fa-solid fa-trash" />
            </button>
          </div>
        ))}
        </div>
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Monto Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedidos</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;
