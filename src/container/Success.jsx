import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import usePosiStackAddress from '../hooks/usePosiStackAddress';
import '../styles/Success.css';


function Success() {
  const { state: { buyer }} = useContext(AppContext);

  console.log(buyer[0].address)
  const location = usePosiStackAddress(buyer[0].city);
  console.log(location)

  return (
 
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra `}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion: </span>
        <div className="Success-map">
         {location && <Map data={location} />}
        </div>
      </div>
    </div>
  )
}

export default Success;
