import React from 'react';
import { MapContainer, TileLayer, Marker , Popup} from 'react-leaflet';
import '../styles/Map.css'


// eslint-disable-next-line react/function-component-definition
const Map = ({data}) => { 
    // const defaultPosition =  [51.505, -0.09]
    // const defaultPosition =  [-1.02863, -79.46352]
    const defaultPosition =  [data.latitude, data.longitude]

console.log(defaultPosition)
  return (
    <div className='leaflet-container'>
      <MapContainer 
        center={defaultPosition} 
        zoom={13} 
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker 
          position={defaultPosition}
          
        >
          
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
