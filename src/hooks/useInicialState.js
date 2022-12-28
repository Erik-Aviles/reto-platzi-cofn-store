/* eslint-disable arrow-body-style */
import { useState } from 'react';
import inicialStates from '../const/inicialStates';

const useInicialState = () => {
  const [state, setStates] = useState(inicialStates);

  const addCart = (payload) => {
    setStates({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  /*   const removeFromCart = payload => {
    setStates({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id)
    });
  }; */
  const removeFromCart = (payload, indexToRemove) => {
    setStates({
      ...state,
      cart: state.cart.filter(
        (_items, indexCurrent) => indexCurrent !== indexToRemove
      ),
    });
  };

  const addToBuyer = (payload) => {
    setStates({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };
  const addNewOrder = (payload) => {
    setStates({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    state,
    addCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
  };
};

export default useInicialState;
