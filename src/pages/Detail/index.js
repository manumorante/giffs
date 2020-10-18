import React from 'react'

export default function Detail ({ params }) {
  const { id } = params

  return <div>
    <h1>Gif's details page</h1>
    <h2>ID: {id}</h2>
  </div>
}

