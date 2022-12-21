import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { MapContainer, TileLayer, Marker , Popup} from 'react-leaflet';
import '../styles/Map.css'
// import AppContext from '../context/AppContext';



function Map () { 
    // const defaultPosition =  [51.505, -0.09]
    const [ubicacion, setUbicacion] = useState([]);
    // const { state: {buyer}} = useContext(AppContext)

    const Api = 'http://api.positionstack.com/v1/forward'

    const params = {
        access_key: 'ad6fd358a8dcfb4085b12127cc30df77',
        query: 'Riobamba Ecuador'/* buyer[0].city */
    }

    useEffect(() => {
        axios(Api, {params})
            .then(response => {
                setUbicacion(response.data.data);
                console.log(response.data.data)
            }) .catch((error )=> {
              console.log(error);
          }); 
    }, []);
    console.log()

  return (
     <div className='leaflet-container'>
     {ubicacion.map(item => (
      <MapContainer 
        center={{lat: item.latitude, lng: item.longitude}} 
        zoom={13} 
        scrollWheelZoom={false}
      > 
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker 
          position={{lat: item.latitude, lng: item.longitude}}
          
        >
          
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>))}
    </div>

  )
}

export default Map
