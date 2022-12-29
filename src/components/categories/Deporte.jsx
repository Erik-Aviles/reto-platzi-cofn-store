import React from 'react'
import Products from '../Products';
import inicialStates from '../../const/inicialStates';

// eslint-disable-next-line 
const Deporte = () => {
  return (
    <div>
       <Products products={inicialStates.products} />;

    </div>
  )
}

export default Deporte;
