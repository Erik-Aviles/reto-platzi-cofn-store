/* eslint-disable arrow-body-style */
import { useState } from 'react';
import inicialStates from '../const/inicialStates';

const useInicialState = () => {
  const [state, setStates] = useState(inicialStates);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);

  let filteredProduct = [];
  
  if (search  === null ) {
    filteredProduct = state.products
  } else {
    const {title}= search;
    filteredProduct = state.products.filter((product) => {
        return product.title.toLowerCase().includes(title.toLowerCase())
      })
  }

  const handleSearch = (data) =>{
    setSearch(data)
    console.log(data)
  }
  
  const removeFromCart = (payload, indexToRemove) => {
    setStates({
      ...state,
      cart: state.cart.filter(
        (_items, indexCurrent) => indexCurrent !== indexToRemove
      ),
    });
  };

  const addCart = (payload) => {
    setStates({
      ...state,
      cart: [...state.cart, payload],
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
    filteredProduct,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    handleSearch,
    search,
    loading,
  };
};

export default useInicialState;


/* metodo para buscar con opciones
  const filteredPersons = details.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .email
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  ); */

  
  /*   const removeFromCart = payload => {
    setStates({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id)
    });
  }; */
