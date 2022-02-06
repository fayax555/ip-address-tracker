import {
  useRef,
  useState,
  useEffect,
  FormEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import { GeoData } from 'types'
import { getGeoData } from 'utils/getGeoData'
import styles from 'styles/Form.module.css'

interface Props {
  setData: Dispatch<SetStateAction<GeoData | undefined>>
}

const Form = ({ setData }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { error, data } = await getGeoData(inputRef.current?.value ?? '')
    console.log({ error, data })

    return error ? setError(data.message!) : setData(data)
  }

  useEffect(() => {
    if (error) setTimeout(() => setError(''), 3000)
  }, [error])

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      {error && <p className={styles.error}>{error}</p>}
      <input
        ref={inputRef}
        type='text'
        placeholder='Search for any IP address or domain'
      />
      <button>
        <svg xmlns='http://www.w3.org/2000/svg' width='11' height='14'>
          <path fill='none' stroke='#FFF' strokeWidth='3' d='M2 1l6 6-6 6' />
        </svg>
      </button>
    </form>
  )
}

export default Form
