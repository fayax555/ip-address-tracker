import '../styles/globals.css'
import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const L = require('leaflet')

    delete L.Icon.Default.prototype._getIconUrl

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/images/marker-icon-2x.png',
      iconUrl: '/images/marker-icon.png',
      shadowUrl: '/images/marker-shadow.png',
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
