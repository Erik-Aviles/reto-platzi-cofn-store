/* eslint-disable*/
import React, { useContext, useEffect } from 'react'
import Product from '../components/Product'
import AppContext from '../context/AppContext';
import Messages from '../components/Messages';
import '../styles/SearchLayout.css'
import ProductsDetails from '../components/ProductsDetails';

const SearchLayout = () => {
  const {search, filteredProduct, messages} = useContext(AppContext);
  console.log(filteredProduct) 
  useEffect(()=> {SearchLayout}, [search])

  return (
  <div>
    <h3>{search ? (`BUSCAR  "${search.title}"`) : 'BUSCAR' }</h3>
    {/* {messages && <Messages >No se ha encontrado resultados para su búsqueda "{search.title}"</Messages>} */}
    {search 
      ? 
       <ProductsDetails products={filteredProduct} />

      : 
        <Messages >Por favor, introduzca un término de búsqueda</Messages>

    }
  </div>
  )
}

export default SearchLayout;
