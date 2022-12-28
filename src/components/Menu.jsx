/* eslint-disable no-nested-ternary */

import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/icon-black.png';
import AppContext from '../context/AppContext'
import '../styles/Menu.css'

const routes = [];

routes.push({
  to:'/buscar',
  text: 'Buscar'
})

routes.push({
  to:'/',
  text: 'Inicio'
})

routes.push({
  to: '/quienes-somos',
  text: 'Quienes Somos'
})

routes.push({
  to: '/contactos',
  text: 'Contactenos'
})
routes.push({
  to: '/login',
  text: 'Inicio de seccion'
})
routes.push({
  to: '/checkout',
  text: 'Carrito'
})

function Menu (){
  const {state: { cart } } = useContext(AppContext)
  return (
    <nav className='nav'>
      <section>
        <Link to='/'> <img src={logo} alt="" width={250} /></Link>
      </section>
      <section className='nav-content-items'>
      <ul>
        {routes.map(route => ((
            <li
              key={route.to}
            >
              <NavLink
                end
                style={({ isActive }) => ({
                  color: isActive ? 'red' : 'blue'
               })}
                to={route.to}
              >
                { 
                  route.to === "/checkout" 
                    ?  cart.length > 0 
                        ?
                          <span className="Header-alert">{cart.length}<i className="fa-solid fa-cart-shopping"/> </span>
                          :  <span className="Header-alert">0<i className="fa-solid fa-cart-shopping"/></span>
                    : route.text
                }
              </NavLink>
            </li>
          ))
        )}
      </ul>
        
      </section>
     
    </nav>
  )
}
// {/* <div>
// <Link to='/'> <img src={logo} alt="" width={250} /></Link>
// </div>
// <div className="Header-checkout">
// { 
//   cart.length > 0 && 
//     <div className="Header-alert">{cart.length}</div> 
// }
// <Link to="/checkout">
// <i className="fa-solid fa-cart-shopping"/>
// </Link>
// </div> */}


export default Menu
