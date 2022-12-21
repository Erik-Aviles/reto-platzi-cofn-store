/* eslint-disable func-names */
import React, { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/Success.css';


function Success () {
  const { state: { buyer }} = useContext(AppContext);

  const [state, setState] = useState({
      latitude: 0,
      longitude: 0,
  });
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      // eslint-disable-next-line prefer-arrow-callback
      function (position) {
        setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },
      // eslint-disable-next-line prefer-arrow-callback
      function (error){
        console.log(error)
      },
      {
        enableHighAccuracy: true
      }
      )
    }, []);
    
    console.log(state)

  return (
   <section>
      <div className="Success">
        <div className="Success-content">
          <div>
            <h2>{`${buyer[0].name}, Gracias por tu compra `}</h2> 
            <p>Pedido enviado con exito </p>
            <p>Tu producto llegará a la ubicacion asignada</p>
          </div>
        <button type='button'>
          <Link 
            to ='/checkout/map'
            state={state}
          >Ubicacion actual</Link> 
        </button>
        <button type='button'>
          <Link 
            to ='/checkout/infocontact'
            state={state}
          >Ubicacion del formulario</Link> 
        </button>
 
        </div>
      </div>

    </section>
  )
}

export default Success;
