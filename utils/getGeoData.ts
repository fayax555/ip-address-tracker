import { GeoData } from 'types'

export const getGeoData = async (ip: string) => {
  const res = await fetch('/api/geoInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ip }),
  })

  const data: GeoData = (await res.json()) as GeoData
  return { error: !res.ok, data }
}
