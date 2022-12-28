import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/MenuProduct.css'
import listMenuProducts from '../const/inicialCategories';

function MenuProduct () {
    const location = useLocation()
  return (
   <>
  
    <div className='MenuProducts-container'>
      <ul>
       {listMenuProducts.map((items) => (
        <li key={items.to}
        >
            <Link className='li' to={items.to}>{items.title}</Link>
        </li>
       ))}
      </ul>
    </div> 
    <h5>
        {
            location.pathname === '/' 
            ? null 
            : `Inicio ${ location.pathname}`
        }
    </h5>
    </>
  )
}

export default MenuProduct
