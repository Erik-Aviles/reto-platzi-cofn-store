import React from 'react'
import { Helmet } from 'react-helmet';
import ProductsDetails from '../ProductsDetails';
import inicialStates from '../../const/inicialStates';

// eslint-disable-next-line 
const CocinaAlimentos = () => {
  const cocinaProducts = inicialStates.categories.filter(items => items.name === 'cocina')
  const cocinaProducts2 = cocinaProducts.flatMap(items => items.products)
  
  return (
    <>
      <Helmet>
        <title>Cocina y Alimentos -Erika Store</title>
      </Helmet>
      <div>
        <ProductsDetails products={cocinaProducts2} />;
      </div>
    </>
  )
}

export default CocinaAlimentos;