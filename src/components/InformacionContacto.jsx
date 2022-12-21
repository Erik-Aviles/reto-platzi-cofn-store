import React, { useContext } from 'react';
import '../styles/InformacionContacto.css'
import AppContext from '../context/AppContext';


function InformacionContacto () { 
  const { state: { buyer }} = useContext(AppContext);
  return (
    <div className='InformacionContacto-container'>
      <div>
        <h2>{`${buyer[0].name}, Gracias por tu compra `}</h2> 
        <p>Pedido enviado con exito </p>
        <p>A: {buyer[0].address} , en la ciudad de {buyer[0].city}</p>
      </div>
    
    </div>
  )
}

export default InformacionContacto;
