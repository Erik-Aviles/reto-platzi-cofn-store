import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/Map.css';

function Map({ data }) {
  console.log(data);
  // const defaultPosition =  [51.505, -0.09]
  const ubicacion = { lat: data.latitude, lng: data.longitude };

  return (
    <div className="leaflet-container">
      <MapContainer center={ubicacion} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={ubicacion}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
