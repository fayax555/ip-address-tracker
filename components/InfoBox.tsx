import { GeoData } from 'types'
import styled from 'styled-components'

const InfoBox = (data?: GeoData) => {
  const { ip, isp, location } = data || {}
  const { city, region, country, lat, lng, timezone, postalCode } =
    location || {}

  console.log(lat, lng)

  return (
    <Box>
      {data && (
        <>
          <article>
            <h2>IP ADDRESS</h2>
            <p>{ip}</p>
          </article>
          <article>
            <h2>LOCATION</h2>
            <p>
              {city}, {region}, {country}
            </p>
            <p>{postalCode}</p>
          </article>
          <article>
            <h2>TIMEZONE</h2>
            <p>UTC{timezone}</p>
          </article>
          <article>
            <h2>ISP</h2>
            <p>{isp}</p>
          </article>
        </>
      )}
    </Box>
  )
}

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  border: solid blue;
  text-align: center;

  @media (min-width: 800px) {
    text-align: revert;
  }
`

export default InfoBox
