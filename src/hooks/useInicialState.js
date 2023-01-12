/* eslint-disable arrow-body-style */
import { useState } from 'react';
import inicialStates from '../const/inicialStates';

const useInicialState = () => {
  const [state, setStates] = useState(inicialStates);
  const [search, setSearch] = useState(null);
  const [messages, setMessages] = useState(false);
  const [loading, setLoading] = useState(false);
  let filteredProduct = [];

  // const allProducts = state.categories.flatMap(items => items.products)
  //   console.log(allProducts)

  
  
  if (search) {
   const {title} = search;
    filteredProduct = state.categories.flatMap(items => items.products).filter((product) =>product.title.toLowerCase().includes(title.toLowerCase())
      )
  }

  const handleSearch = (data) =>{
    setSearch(data)
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
    messages,
    setMessages,
    loading,
    setLoading
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
