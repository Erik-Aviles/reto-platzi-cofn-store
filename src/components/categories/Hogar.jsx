import React from 'react'
import { Helmet } from 'react-helmet';
import ProductsDetails from '../ProductsDetails';
import inicialStates from '../../const/inicialStates';

// eslint-disable-next-line 
const Hogar = () => {
  return (
    <>
      <Helmet>
        <title>Hogar -Erika Store</title>
      </Helmet>
      <div>
        <ProductsDetails products={inicialStates.products} />;
      </div>
    </>
  )
}
export default Hogar;
