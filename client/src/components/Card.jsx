import { Link } from 'react-router-dom'

const Card = ({ product }) => {
  const { id, name, img, newPrice, oldPrice } = product

  return (
    <Link to={`/product/${id}`}>
      <div className='flex flex-col gap-2'>
        <img src={img} alt={name} className='h-80 object-cover' />
        <h1 className='font-bold text-xl'>{name}</h1>
        <div className='flex items-center gap-5'>
          <span className='text-gray-500'><s>${oldPrice}</s></span>
          <span className='font-bold'>${newPrice}</span>
        </div>
      </div>
    </Link>
  )
}

export default Card