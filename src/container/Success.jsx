import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
// import usePosiStackAddress from '../hooks/usePosiStackAddress';
import '../styles/Success.css';


function Success() {
  const { state: { buyer }} = useContext(AppContext);

  return (
 
    <div className="Success">
      <div className="Success-content">
     <h2>{`${buyer[0].name}, Gracias por tu compra `}</h2> 
        <span>Tu pedido llegara en 3 dias a tu direccion en {buyer[0].city}</span>
        <div className="Success-map">
        <Map /> 
        </div>
      </div>
    </div>
  )
}

export default Success;
