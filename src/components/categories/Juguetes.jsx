import React from 'react'
import { Helmet } from 'react-helmet';
import ProductsDetails from '../ProductsDetails';
import inicialStates from '../../const/inicialCategories';

// eslint-disable-next-line 
const Juguetes = () => {
  return (
    <>
      <Helmet>
        <title>Juguetes -Erika Store</title>
      </Helmet>
      <div>
        <ProductsDetails products={inicialStates.products} />;
      </div>
    </>
  )
}

export default Juguetes;