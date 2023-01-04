import React from 'react'
import { Helmet } from 'react-helmet';
import Products from '../Products';
import inicialStates from '../../const/inicialStates';

// eslint-disable-next-line 
const Hogar = () => {
  return (
    <>
      <Helmet>
        <title>Hogar -Erika Store</title>
      </Helmet>
      <div>
        <Products products={inicialStates.products} />;
      </div>
    </>
  )
}
export default Hogar;
