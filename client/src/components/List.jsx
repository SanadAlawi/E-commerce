import { useEffect, useState } from 'react'
import Card from './Card'
import CardSkeleton from './CardSkeleton'
import {products} from '../utils'
const List = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="flex-[5] grid grid-cols-1 p-5 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

      {
        loading ? <CardSkeleton />
          :
          products.map(product =>
            <Card key={product.id} product={product} />
          )
      }
    </div>
  )
}

export default List