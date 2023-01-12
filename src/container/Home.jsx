import React from 'react';
import { Helmet } from 'react-helmet' 
import ProductsDetails from '../components/ProductsDetails';
import inicialStates from '../const/inicialStates';

function Home() {

const allProducts = inicialStates.categories.flatMap(items => items.products)

  return (
    <>
    <Helmet>
      <title>Inicio - Erika Store</title>
     {/*  <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@TU_USER"/>
      <meta name="twitter:creator" content="@TU_USER"/>
      <meta name="twitter:title" content="Erika store merch"/>
      <meta name="twitter:description" content="Erika store merch"/>
      <meta
        name="twitter:image"
        content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
      />
      <meta property="og:title" content="Erika store merch"/>
      <meta property="og:description" content="Erika store merch"/>
      <meta
        property="og:image"
        content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
      />
      <meta property="og:url" content="platzistore.xyz" />
      <meta property="og:site_name" content="Erika store merch" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="article" />
      <meta property="fb:app_id" content="ID_APP_FACEBOOK" /> */}
    </Helmet>
      <ProductsDetails products={allProducts} />;

    </>
  )
}

export default Home;
