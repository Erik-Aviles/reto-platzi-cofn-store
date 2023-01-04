import React from 'react'
import { Helmet } from 'react-helmet';
import Products from '../Products';
import inicialStates from '../../const/inicialCategories';

// eslint-disable-next-line 
const Moda = () => {
  return (
    <>
      <Helmet>
        <title>Moda -Erika Store</title>
      </Helmet>
      <div>
        <Products products={inicialStates.products} />;
      </div>
    </>
  )
}

export default Moda;