import React from 'react'
import { Helmet } from 'react-helmet';
import ProductsDetails from '../ProductsDetails';
import inicialStates from '../../const/inicialStates';

// eslint-disable-next-line 
const Moda = () => {
  const modaProducts = inicialStates.categories.filter(items => items.name === 'moda')
  const modaProducts2 = modaProducts.flatMap(items => items.products)

  return (
    <>
      <Helmet>
        <title>Moda -Erika Store</title>
      </Helmet>
      <div>
        <ProductsDetails products={modaProducts2} />;
      </div>
    </>
  )
}

export default Moda;