import React from 'react'
import Spinner from 'components/Spinner';
import ListOfGifs from 'components/ListOfGifs';
import {useGifs} from 'hooks/useGifs'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })

  const handleNextPage = () => setPage(prevPage => prevPage + 1)

  return <div>
    {loading
      ? <Spinner />
      : <>
        <h4>Searching for '{keyword}'</h4>
        <ListOfGifs gifs={gifs} />
        </>
    }
    <button onClick={handleNextPage}>Next</button>
  </div>
}
