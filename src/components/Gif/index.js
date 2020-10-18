import React from 'react'
import { Link } from 'wouter'
import './styles.css'

export default function Gif ({ title, id, url}) {
  return (
    <div className='gif'>
      <Link to={`/gif/${id}`}>
        <img loading='lazy' className='gif__img' key={id} src={url} alt={title} />
        <div className='gif__title'>{title}</div>
      </Link>
    </div>
  )
}

