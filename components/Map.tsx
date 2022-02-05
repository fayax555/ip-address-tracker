import { useState, useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'

interface Props {}

function createIcon(url: string) {
  return new L.Icon({
    iconUrl: url,
  })
}

const Map = () => {
  const position = { lat: 4.17521, lng: 73.50916 }

  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker
        icon={createIcon('/images/icon-location.svg')}
        position={position}
      />
    </MapContainer>
  )
}

export default Map
