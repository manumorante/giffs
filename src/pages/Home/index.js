import React from 'react'
import ListOfGifs from 'components/ListOfGifs'
import Spinner from 'components/Spinner'
import { useGifs } from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'

export default function Home () {
  const {loading, gifs} = useGifs()

  return (
    <div className='Home'>
      { loading
      ? <Spinner />
      : <ListOfGifs gifs={gifs} />
      }

      <TrendingSearches />
    </div>
  )
}
