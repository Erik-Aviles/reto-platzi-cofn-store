import React from 'react'
import { Helmet } from 'react-helmet';
import ProductsDetails from '../ProductsDetails';
import inicialStates from '../../const/inicialCategories';

// eslint-disable-next-line 
const SaludBelleza = () => {
  return (
    <>
      <Helmet>
        <title>Salud y Belleza -Erika Store</title>
      </Helmet>
      <div>
        <ProductsDetails products={inicialStates.products} />;
      </div>
    </>
  )
}

export default SaludBelleza;