import React, {useState, useEffect} from 'react'
import Gif from './Gif';
import getGits from '../services/getGifs';

export default function ListOfGifs ({ params }) {
  const { keyword } = params
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    getGits({ keyword })
      .then(gifs => setGifs(gifs))
  }, [keyword])

  return <div className='gifs-list'>
    {
      gifs.map(gif => <Gif
        key={gif.id}
        id={gif.id}
        title={gif.title}
        url={gif.url}
        />)
    }
  </div>
}
