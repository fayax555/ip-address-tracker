import type { NextApiRequest, NextApiResponse } from 'next'
import { GeoData } from 'types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GeoData>
) {
  const { GEO_API_KEY } = process.env
  const { ip = '' } = req.body
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${GEO_API_KEY}&ipAddress=${ip}`
  const data: GeoData = await (await fetch(url)).json()

  res.status(200).json(data)
}
