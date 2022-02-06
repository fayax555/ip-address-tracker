import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet'
import { GeoData } from 'types'

interface Center {
  lat: number
  lng: number
}

function ChangeView({ center, zoom }: { center: Center; zoom: number }) {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

const Map = (data?: GeoData) => {
  const { lat, lng } = data?.location!
  const position = { lat, lng }

  console.log(position)

  return (
    <MapContainer center={position} zoom={13}>
      <ChangeView center={position} zoom={13} />
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
