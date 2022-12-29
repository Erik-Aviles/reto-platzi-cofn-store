import React from 'react'
import Products from '../Products';
import inicialStates from '../../const/inicialStates';

// eslint-disable-next-line 
const Hogar = () => {
  return (
    <div>
       <Products products={inicialStates.products} />;

    </div>
  )
}

export default Hogar;
