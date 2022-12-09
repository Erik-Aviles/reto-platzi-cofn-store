/* eslint-disable arrow-body-style */
import { useState } from 'react';
import inicialStates from '../const/inicialStates'

const useInicialState = () => {
  const  [state, setStates] = useState(inicialStates);

  const addCart = payload => {
    setStates({
      ...state,
      cart: [...state.cart, payload]
    });
  };

  const removeFromCart = payload => {
    setStates({
      ...state,
      cart: state.cart.filter(items => items.id !== payload)
    })
  };

  return {
    state,
    addCart,
    removeFromCart
  }
  
}

export default useInicialState;