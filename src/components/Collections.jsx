import React from 'react'
import { testCollections } from '../utils/testCollections'
import CollectionCard from '../utils/CollectionCard'

function Collections() {
  return (
    <div className='w-full min-h-[83vh] bg-cream pb-8'>
      <h1 className='text-center w-full py-5 text-4xl'>{"Your Collections"}</h1>
      <div className="flex justify-between flex-wrap w-[80%] mx-auto">
        {
          testCollections.map((collection) => (
            <div key={collection.id} className="w-[90%] md:w-[45%] lg:w-[20%] mr-2 mb-4">
              <CollectionCard collection={collection} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Collections