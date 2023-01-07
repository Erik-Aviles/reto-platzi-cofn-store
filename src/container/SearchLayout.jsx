/* eslint-disable*/
import React, { useContext, useEffect } from 'react'
import ProductsDetails from '../components/ProductsDetails';
import AppContext from '../context/AppContext';
import Messages from '../components/Messages';

const SearchLayout = () => {
  const {search, filteredProduct } = useContext(AppContext);

  return (
  <div>
    <h3>{search ? (`BUSCAR  "${search.title.toLowerCase()}"`) : 'BUSCAR' }</h3>
    {!search 
        ? (<Messages>Por favor, introduzca un término de búsqueda</Messages>) 
        : <ProductsDetails /> 
    }
  </div>
  )
}

export default SearchLayout
