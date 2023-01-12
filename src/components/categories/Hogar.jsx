import React from 'react'
import { Helmet } from 'react-helmet';
import ProductsDetails from '../ProductsDetails';
import inicialStates from '../../const/inicialStates';

// eslint-disable-next-line 
const Hogar = () => {
  const hogarProducts = inicialStates.categories.filter(items => items.name === 'hogar')
  const hogarProducts2 = hogarProducts.flatMap(items => items.products)

    return (
    <>
      <Helmet>
        <title>Hogar -Erika Store</title>
      </Helmet>
      <div>
        <ProductsDetails products={hogarProducts2} />;
      </div>
    </>
  )
}
export default Hogar;
