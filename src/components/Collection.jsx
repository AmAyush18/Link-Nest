import React from 'react'
import { useParams } from 'react-router-dom'

function Collection() {
    const {id} = useParams();
  return (
    <div className='text-3xl min-h-screen text-center py-24'>Collection ID : <span className='text-4xl px-4 py-3 bg-cream'>{id}</span></div>
  )
}

export default Collection