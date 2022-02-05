import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { GeoData } from 'types'
import Form from 'components/Form'
import InfoBox from 'components/InfoBox'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('components/Map'), { ssr: false })

const Home: NextPage = () => {
  const [data, setData] = useState<GeoData>()

  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>IP Address Tracker</h1>
        <Form setData={setData} />
        <InfoBox {...data} />
        <Map />
      </main>
    </>
  )
}

export default Home
