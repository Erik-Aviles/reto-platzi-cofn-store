import React from 'react'
import { Helmet } from 'react-helmet';
import ProductsDetails from '../ProductsDetails';
import inicialStates from '../../const/inicialStates';

// eslint-disable-next-line 
const Deporte = () => {
  const deporteProducts = inicialStates.categories.filter(items => items.name === 'deporte')
  const deporteProducts2 = deporteProducts.flatMap(items => items.products)
  return (
    <>
      <Helmet>
        <title>Deporte -Erika Store</title>
      </Helmet>
      <div>
        <ProductsDetails products={deporteProducts2} />;
      </div>
    </>
  )
}

export default Deporte;
