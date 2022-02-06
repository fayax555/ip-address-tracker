import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import { GeoData } from 'types'

const Map = (data?: GeoData) => {
  const { lat, lng } = data?.location!
  const position = { lat, lng }

  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker icon={createIcon()} position={position} />
    </MapContainer>
  )
}

function createIcon() {
  return new L.Icon({
    iconUrl: '/images/icon-location.svg',
    shadowUrl: '/images/marker-shadow.png',
    iconSize: [30, 40],
    shadowSize: [50, 64],
    iconAnchor: [12, 34],
    shadowAnchor: [4, 72],
    popupAnchor: [-3, -76],
  })
}

export default Map