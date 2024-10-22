import React, { useState } from 'react'
import { products } from '../utils'

const Zoom = ({productId}) => {
  const product = products.find(p => p.id === productId)

  const src =
    [
      product.img,
      "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",

    ]

    const [index, setIndex] = useState(0)

  return (
    <div className='flex-1 flex flex-col-reverse gap-3 md:flex-row'>
      <div className='flex-1 flex gap-2 md:flex-col'>
        <img onClick={() => setIndex(0)} src={src[0]} alt="" className='cursor-pointer w-full h-40 object-cover' />
        <img onClick={() => setIndex(1)} src={src[1]} alt="" className='cursor-pointer w-full h-40 object-cover' />
      </div>
      <div className='flex-[5]'>
        <img src={src[index]} alt="" className='w-full h-[600px] max-h-[800px] object-cover' />
      </div>
    </div>
  )
}

export default Zoom