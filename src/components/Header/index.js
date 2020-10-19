import React from 'react'
import Menu from 'components/Menu'
import Search from 'components/Search'
import './styles.css'

export default function Header () {
  return (
    <div className='Header'>
      <div className='Logo Header__logo'>
        <h1>The page of the gifs</h1>
      </div>

      <div className='Header__menu'>
        <Menu />
        <Search />
      </div>

    </div>
  )
}
