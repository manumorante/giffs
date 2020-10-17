import React from 'react'

export default function Gif ({ title, id, url}) {
  return (
    <div className='gif'>
      <img className='gif__img' key={id} src={url} alt={title} />
      <div className='gif__title'>{title}</div>
    </div>
  )
}

