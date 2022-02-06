import { GeoData } from 'types'
import styles from 'styles/InfoBox.module.css'

const InfoBox = (data?: GeoData) => {
  const { ip, isp, location } = data || {}
  const { city, region, country, lat, lng, timezone, postalCode } =
    location || {}

  return (
    <div className={styles.wrapper}>
      {data && (
        <div className={styles.content}>
          <article>
            <h2>IP ADDRESS</h2>
            <p>{ip}</p>
          </article>
          <article>
            <h2>LOCATION</h2>
            <p>
              {city}, {region}, {country} {postalCode}
            </p>
          </article>
          <article>
            <h2>TIMEZONE</h2>
            <p>UTC{timezone}</p>
          </article>
          <article>
            <h2>ISP</h2>
            <p>{isp}</p>
          </article>
        </div>
      )}
    </div>
  )
}

export default InfoBox
