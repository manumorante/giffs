import {useEffect, useState} from 'react'
import getGits from '../services/getGifs';

export function useGifs ({ keyword } = { keyword: null}) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    setLoading(true)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword')
    getGits({ keyword: keywordToUse })
      .then(gifs => setGifs(gifs))
      setLoading(false)
      localStorage.setItem('lastKeyword', keyword)
  }, [keyword])

  return {loading, gifs}
}
