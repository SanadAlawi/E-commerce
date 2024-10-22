import { Delete, Remove } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { changeQuantity, removeFromCart } from '../redux/Cart/cartSlice'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CartItem = ({ product }) => {

  const { id, img, name, newPrice, desc, quantity } = product

  const dispatch = useDispatch()
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ productId: id }))
  }

  const [count, setCount] = useState(quantity)

  const handleDecrementQuantity = () => {
    setCount(prevCount => prevCount - 1)
    dispatch(changeQuantity({productId: id, quantity: count-1}))
  }
  const handleIncrementQuantity = () => {
    setCount(prevCount => prevCount + 1)
    dispatch(changeQuantity({productId: id, quantity: count+1}))

  }
  return (
    <Link to={`/product/${id}`}>
      <div className="flex justify-between gap-2 w-full">
        <img src={img} alt={name} className="w-20 h-24 object-cover" />
        <div className="flex-[2] flex flex-col gap-2">
          <h1 className="text-xl text-gray-500">{name}</h1>
          <p className="text-gray-400 text-sm line-clamp-1">{desc}</p>
          <div className='flex justify-between items-center'>
            <span className="text-blue-400">{quantity} x ${newPrice}</span>
            <div className='flex items-center gap-2'>
              <button onClick={handleDecrementQuantity} className='border border-blue-400 text-blue-400 outline-none '><Remove /></button>
              {count}
              <button onClick={handleIncrementQuantity} className='border border-blue-400 text-blue-400 outline-none '><Remove /></button>
            </div>
          </div>
        </div>

        <Delete onClick={handleRemoveFromCart} className="text-red-500 cursor-pointer" />
      </div>
    </Link>
  )
}

export default CartItem