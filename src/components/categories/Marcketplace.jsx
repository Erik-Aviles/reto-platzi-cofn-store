import React from 'react'
import { Helmet } from 'react-helmet';
import ProductsDetails from '../ProductsDetails';
import inicialStates from '../../const/inicialCategories';

// eslint-disable-next-line 
const Marcketplace = () => {
  return (
    <>
      <Helmet>
        <title>Marcketplace -Erika Store</title>
      </Helmet>
      <div>
        <ProductsDetails products={inicialStates.products} />;
      </div>
    </>
  )
}

export default Marcketplace;