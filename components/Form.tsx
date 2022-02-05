import { useState, useEffect, FormEvent, Dispatch, SetStateAction } from 'react'
import { GeoData } from 'types'

interface Props {
  setData: Dispatch<SetStateAction<GeoData | undefined>>
}

const Form = ({ setData }: Props) => {
  const [ip, setIp] = useState('')

  const getGeoData = async () => {
    const res = await fetch('/api/geoInfo/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ip }),
    })

    const data: GeoData = (await res.json()) as GeoData
    return data
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setData(await getGeoData())
  }

  useEffect(() => {
    getGeoData().then((data) => setData(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={ip} onChange={(e) => setIp(e.target.value)} />
      <button>Enter</button>
    </form>
  )
}

export default Form
