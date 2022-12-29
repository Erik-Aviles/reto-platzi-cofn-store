import React from 'react'
import Products from '../Products';
import inicialStates from '../../const/inicialCategories';

// eslint-disable-next-line 
const SaludBelleza = () => {
  return (
    <div>
       <Products products={inicialStates.products} />;

    </div>
  )
}

export default SaludBelleza;