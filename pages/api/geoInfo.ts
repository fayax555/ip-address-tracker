import type { NextApiRequest, NextApiResponse } from 'next'
import { GeoData } from 'types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GeoData | { message: string }>
) {
  const { GEO_API_KEY } = process.env
  const detectedIp = req.headers['x-real-ip'] || req.socket.remoteAddress
  const { ip } = req.body
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${GEO_API_KEY}&domain=${
    ip ? ip : detectedIp
  }`
  const response = await fetch(url)
  const data: GeoData = await response.json()

  if (!response.ok) {
    return res
      .status(400)
      .json({ message: 'Enter correct IP address or domain' })
  }

  res.status(200).json(data)
}
