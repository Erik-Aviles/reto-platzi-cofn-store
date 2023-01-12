import React from 'react'
import { Helmet } from 'react-helmet';
import ProductsDetails from '../ProductsDetails';
import inicialStates from '../../const/inicialStates';

// eslint-disable-next-line 
const SaludBelleza = () => {
  const saludBellezaProducts = inicialStates.categories.filter(items => items.name === 'saludBelleza')
  const saludBellezaProducts2 = saludBellezaProducts.flatMap(items => items.products)

  return (
    <>
      <Helmet>
        <title>Salud y Belleza -Erika Store</title>
      </Helmet>
      <div>
        <ProductsDetails products={saludBellezaProducts2} />;
      </div>
    </>
  )
}

export default SaludBelleza;