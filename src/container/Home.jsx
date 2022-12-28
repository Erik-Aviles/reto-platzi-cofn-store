import React from 'react';
import Products from '../components/Products';
import inicialStates from '../const/inicialStates';

function Home() {
  return (
    <>
      <Products products={inicialStates.products} />;

    </>
  )
}

export default Home;
