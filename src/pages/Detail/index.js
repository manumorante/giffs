import React from 'react'

export default function Detail ({ params }) {
  const { id } = params
  console.log(id)

  return (
  <div>detail {id}</div>
  )
}

