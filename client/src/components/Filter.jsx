import React, { useState } from 'react'

const Filter = () => {

    const [price, setPrice] = useState(1000)


    return (
        <div className='h-full bg-white flex-1 grid grid-cols-1 gap-10 p-5 text-sm sm:grid-cols-3 md:sticky md:top-20 md:grid-cols-1'>
            {/* CATEGORIES */}
            <div className='flex flex-col gap-3'>
                <h1 className='text-xl capitalize mb-1'>product categories</h1>
                <div className='flex items-center gap-1'>
                    <input type="checkbox" id='1' />
                    <label htmlFor="1" className='capitalize'>hats</label>
                </div>
                <div className='flex items-center gap-1'>
                    <input type="checkbox" id='2' />
                    <label htmlFor="2" className='capitalize'>t-shirt</label>
                </div>
                <div className='flex items-center gap-1'>
                    <input type="checkbox" id='3' />
                    <label htmlFor="3" className='capitalize'>coats</label>
                </div>
            </div>

            {/* PRICE */}
            <div className='flex flex-col gap-3'>
                <h1 className='text-xl capitalize mb-1'>filter by price</h1>
                <div className='flex items-center gap-2'>
                    <span>0</span>
                    <input type="range" min={0} max={1000} value={price} onChange={(e) => setPrice(e.target.value)} />
                    <span>{price}</span>
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='text-xl capitalize mb-1'>sort by</h1>
                <div className='flex items-center gap-1'>
                    <input type="radio" name='price' value='asc' id='asc' />
                    <label htmlFor="asc">Price (Lowest first)</label>
                </div>
                <div className='flex items-center gap-1'>
                    <input type="radio" name='price' value='desc' id='desc' />
                    <label htmlFor="desc">Price (Highest first)</label>
                </div>
            </div>

        </div>
    )
}

export default Filter