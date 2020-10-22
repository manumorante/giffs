import {useContext, useEffect, useState} from 'react'
import getGits from 'services/getGifs';
import GifsContext from 'context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs ({ keyword } = { keyword: 'rick and morty'}) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const {gifs, setGifs} = useContext(GifsContext)

  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(function () {
    setLoading(true)
    getGits({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, setGifs, keywordToUse])

  useEffect(function(){
    if(page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getGits({ keyword: keywordToUse, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })

  }, [page, keywordToUse, setGifs])

  return {loading, gifs, loadingNextPage, setPage}
}
