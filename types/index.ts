export interface GeoData {
  ip?: string
  isp?: string
  location?: Location
  code?: number
  message?: string
}

interface Location {
  city: string
  country: string
  lat: number
  lng: number
  postalCode: string
  region: string
  timezone: string
}
