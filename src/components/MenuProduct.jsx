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
    <div className='MenuProducts-location'>
        {
            location.pathname === '/' 
            ?   null 
            :   <>
                Inicio /
                
                {location.pathname.replaceAll('/', ' ').toUpperCase().replaceAll('-', ' ')}
                </> 
        }
    </div>
        
  
    </>
  )
}

export default MenuProduct
