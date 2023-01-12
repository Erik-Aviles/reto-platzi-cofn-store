import React from 'react'
import { Helmet } from 'react-helmet';
import ProductsDetails from '../ProductsDetails';
import inicialStates from '../../const/inicialStates';

// eslint-disable-next-line 
const Tecnologia = () => {
  const tegnologiaProducts = inicialStates.categories.filter(items => items.name === 'tegnologia')
  const tegnologiaProducts2 = tegnologiaProducts.flatMap(items => items.products)

  return (
    <>
      <Helmet>
        <title>Tecnologia -Erika Store</title>
      </Helmet>
      <div>
        <ProductsDetails products={tegnologiaProducts2} />;
      </div>
    </>
  )
}

export default Tecnologia;