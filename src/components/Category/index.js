import React from 'react'
import { Link } from 'wouter'
import './styles.css'

export default function Category ({title, options =[]}) {
  return (
    <div className='Category'>
      <h3 className='Category__title'>{title}</h3>

      <ul className='Category__list'>
        {options.map((singleOption) => (
          <li key={singleOption}>
            <Link to={`/search/${singleOption}`}>{singleOption}</Link>
          </li>
        ))
        }
      </ul>
    </div>
  )
}
