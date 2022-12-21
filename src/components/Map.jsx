import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker , Popup} from 'react-leaflet';
import '../styles/Map.css'
import AppContext from '../context/AppContext';


function Map () { 
  const  location = useLocation()
  const { state: { buyer }} = useContext(AppContext);
  return (
    <div className='Map-container'>
      <div>
        <h2>{`${buyer[0].name}, Gracias por tu compra `}</h2> 
        <p>Pedido enviado con exito </p>
      </div>
      <div>
        <h3>Ubicacion asignada en el mapa con: </h3>
            <span>Latitud: {location.state.latitude}</span>
            <span>, Longitud: {location.state.longitude}</span>
        </div>
      <div className='leaflet-container'>
        <MapContainer 
          center={{lat:location.state.latitude, lng: location.state.longitude}} 
          zoom={13} 
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker 
            position={{lat:location.state.latitude, lng: location.state.longitude}} 
          >  
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Map
