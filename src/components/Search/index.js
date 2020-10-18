import React, {useState} from 'react'
import './styles.css'
import { useLocation } from 'wouter'

export default function Search () {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const handleSubmit = evt => {
    evt.preventDefault()
    const keywordToUse = keyword || 'sonic'
    pushLocation(`/search/${keywordToUse}`)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }


  return <div className='Search'>
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className='Search__input'
        onChange={handleChange}
        value={keyword}
        placeholder='Search for gifs!'
        />
      <button className='Search__button'>Search</button>
    </form>
  </div>
}
