import {useContext, useEffect, useState} from 'react'
import getGits from 'services/getGifs';
import GifsContext from 'context/GifsContext'

export function useGifs ({ keyword } = { keyword: 'rick and morty'}) {
  const [loading, setLoading] = useState(false)
  const {gifs, setGifs} = useContext(GifsContext)

  useEffect(function () {
    setLoading(true)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword')
    getGits({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, setGifs])

  return {loading, gifs}
}
