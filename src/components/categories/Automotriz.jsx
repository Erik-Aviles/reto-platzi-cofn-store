import React from 'react'
import { Helmet } from 'react-helmet';
import ProductsDetails from '../ProductsDetails';
import inicialStates from '../../const/inicialStates';

// eslint-disable-next-line 
const Automotriz = () => {
  const automotrizProducts = inicialStates.categories.filter(items => items.name === 'automotriz')
  const automotrizProducts2 = automotrizProducts.flatMap(items => items.products)

  return (
    <>
      <Helmet>
        <title>Automotriz -Erika Store</title>
      </Helmet>
      <div>
        <ProductsDetails products={automotrizProducts2} />;
      </div>
    </>
  )
}

export default Automotriz;