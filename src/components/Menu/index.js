import React from 'react'
import ActiveLink from 'components/ActiveLink'
import './styles.css'

export default function Menu () {
  return (
    <ul className='Menu'>
      <li className='Menu__link'>
        <ActiveLink href="/">Home</ActiveLink>
      </li>

      <li className='Menu__link'>
        <ActiveLink href="/info">Info</ActiveLink>
      </li>

      <li className='Menu__link'>
        <ActiveLink href="/contact">Contact</ActiveLink>
      </li>
    </ul>
  )
}
