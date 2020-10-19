import React from 'react'
import Menu from 'components/Menu'
import Search from 'components/Search'

export default function Header () {
  return (
    <div className='Header'>
      <h1>The gifs page</h1>
      <Search />
      <Menu />
    </div>
  )
}
