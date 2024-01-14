import React, { useEffect } from 'react'
import { categories } from './categories'
import { Link } from 'react-router-dom';

function CollectionCard({collection}) {
    const { id, title, category, thumbnail, Links } = collection;

    const image = categories[Number(thumbnail) - 1].image;

    useEffect(() => {
        // console.log(thumbnail);
        console.log(category)
    }, [])
  return (
    <div className='w-[100%] cursor-pointer'>
        <Link to={`/collection/${id}`} className='w-[100%] flex flex-col'>
            <div className="w-[100%] h-[200px] py-4 bg-violet bg-opacity-80">
                <img 
                    src={image} 
                    alt={category} 
                    className='w-[85%] h-[150px] mx-auto' 
                />
            </div>
            <div className='bg-dark-green bg-opacity-20 text-green flex flex-col gap-y-2 px-4 py-3'>
                <h1 className='text-lg font-semibold'>{title}</h1>
                <div className='w-full flex justify-between'>
                    <p className='font-[500] text-sm'>{category}</p>
                    <p className='font-[500] text-sm'>Links: {Links.length}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default CollectionCard;