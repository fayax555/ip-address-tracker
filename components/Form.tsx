import { useRef, FormEvent, Dispatch, SetStateAction } from 'react'
import { GeoData } from 'types'
import { getGeoData } from 'utils/getGeoData'

interface Props {
  setData: Dispatch<SetStateAction<GeoData | undefined>>
}

const Form = ({ setData }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setData(await getGeoData(inputRef.current?.value ?? ''))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' />
      <button>Enter</button>
    </form>
  )
}

export default Form
