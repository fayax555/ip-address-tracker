import { useRef, FormEvent, Dispatch, SetStateAction } from 'react'
import { GeoData } from 'types'
import { getGeoData } from 'utils/getGeoData'
import styles from 'styles/Form.module.css'

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
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' />
      <button>
        <svg xmlns='http://www.w3.org/2000/svg' width='11' height='14'>
          <path fill='none' stroke='#FFF' strokeWidth='3' d='M2 1l6 6-6 6' />
        </svg>
      </button>
    </form>
  )
}

export default Form
