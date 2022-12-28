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
  to: '/contactos',
  text: 'Contactos'
})
routes.push({
  to: '/login',
  text: 'Mi cuenta'
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
        <Link to='/'> <img src={logo} alt="" width={200} /></Link>
      </section>
      <section className='nav-content-items'>
        <ul>
          {
            routes.map(route => ((
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
                  { route.to === "/checkout" 
                    ?  cart.length > 0 
                        ?
                          <span>
                              <span className='car-cant-items'>
                                <p>{cart.length}</p>
                                <i className="fa-solid fa-cart-shopping"  title="Checkout"/>
                              </span>
                              <p>{route.text}</p>
                          </span>
                        :  
                          <span>
                            <span className='car-cant-items'>
                              <p>0</p>
                              <i className="fa-solid fa-cart-shopping"  title="Checkout"/>
                            </span>
                            <p>{route.text}</p>
                          </span>
                    : route.to === "/login" 
                    ? <span>
                        <i className="fa-solid fa-lock" title='Candadito'/>
                        <p>{route.text}</p>
                    </span>
                    : route.to === "/buscar" 
                    ? <span>
                        <i className="fa-solid fa-magnifying-glass" title='Icono de Lupa'/>
                        <p>{route.text}</p>
                        </span>
                    : <span>
                        <i className="fa-brands fa-whatsapp" title='Icono de telefono'/>
                        <p>{route.text}</p>
                      </span>

                  }
                   
                </NavLink>
              </li>
            )))
          }
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
// <i class="fa-regular fa-user"></i> 
// </div> */}

/*  { route.to === "/checkout" 
                      ?  cart.length > 0 
                          ?
                            <span className="Header-alert">{cart.length}<i className="fa-solid fa-cart-shopping"  title="Checkout"/> </span>
                            :  <span className="Header-alert">0<i className="fa-solid fa-cart-shopping"  title="Checkout"/></span>
                      : route.to === "/login" 
                      ? <i className="fa-regular fa-user"/>
                      : route.to === "/buscar" 
                      ? <i className="fa-solid fa-magnifying-glass"/>
                      : route.text
                  } */


export default Menu
