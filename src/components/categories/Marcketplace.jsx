import React from 'react'
import { Helmet } from 'react-helmet';
import ProductsDetails from '../ProductsDetails';
import inicialStates from '../../const/inicialStates';

// eslint-disable-next-line 
const Marcketplace = () => {
  const marketplaceProducts = inicialStates.categories.filter(items => items.name === 'marketplace')
  const marketplaceProducts2 = marketplaceProducts.flatMap(items => items.products)

  return (
    <>
      <Helmet>
        <title>Marcketplace -Erika Store</title>
      </Helmet>
      <div>
        <ProductsDetails products={marketplaceProducts2} />;
      </div>
    </>
  )
}

export default Marcketplace;