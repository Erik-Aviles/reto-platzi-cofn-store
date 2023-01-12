import React from 'react'
import { Helmet } from 'react-helmet';
import ProductsDetails from '../ProductsDetails';
import inicialStates from '../../const/inicialStates';

// eslint-disable-next-line 
const Juguetes = () => {
  const jugueteriaProducts = inicialStates.categories.filter(items => items.name === 'jugueteria')
  const jugueteriaProducts2 = jugueteriaProducts.flatMap(items => items.products)
  return (
    <>
      <Helmet>
        <title>Juguetes -Erika Store</title>
      </Helmet>
      <div>
        <ProductsDetails products={jugueteriaProducts2} />;
      </div>
    </>
  )
}

export default Juguetes;