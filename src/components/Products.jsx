import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/Products.css'

function Products (){
  const { state: { products }, addCart} = useContext(AppContext);

  const handleAddToCart = (product) =>{
    addCart(product)
  }

  // funcion que retorna otra funcion, donde se recibe esta funcion no es necesario generar otra funcion
/*   const handleAddToCart = product => () => {
    addCart(product)
  } */


  return (
    <div className='Products'>
      <div className="Products-items">
        {products.map(product => (
            <Product 
              key={product.id} 
              product={product}
              handleAddToCart={handleAddToCart}
            />
        ))}
      </div>
    </div>
  )
}

export default Products;
