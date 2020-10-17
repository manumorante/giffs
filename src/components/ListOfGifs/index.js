import React from 'react'
import Gif from '../Gif';
import './styles.css'

export default function ListOfGifs ({ gifs }) {
  return <div className='ListOfGifs'>
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
