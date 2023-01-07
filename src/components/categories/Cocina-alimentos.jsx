import React from 'react'
import { Helmet } from 'react-helmet';
import ProductsDetails from '../ProductsDetails';
import inicialStates from '../../const/inicialCategories';

// eslint-disable-next-line 
const CocinaAlimentos = () => {
  return (
    <>
      <Helmet>
        <title>Cocina y Alimentos -Erika Store</title>
      </Helmet>
      <div>
        <ProductsDetails products={inicialStates.products} />;
      </div>
    </>
  )
}

export default CocinaAlimentos;