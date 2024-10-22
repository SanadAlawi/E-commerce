import { ShoppingCart } from "@mui/icons-material"
import CartItem from './CartItem'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getItems, resetCart } from "../redux/Cart/cartSlice"


const CartIcon = () => {

  const [open, setOpen] = useState(false)
  const items = useSelector(getItems)

  let total = 0
  items.forEach(item => total += item.newPrice * item.quantity);

  const dispatch = useDispatch()
  const handleResetCart = () => {
    dispatch(resetCart())
  }


  return (
    <div className="relative">
      <ShoppingCart onClick={() => setOpen(prevOpen => !prevOpen)} className="cursor-pointer" />
      <span className="absolute size-5 bg-blue-600 text-white rounded-full flex justify-center items-center bottom-[-0.5em] pointer-events-none left-[-0.5em]">{items.length}</span>
      {
        open &&
        <div className="flex flex-col items-start gap-5 absolute w-[500px] top-[54px] right-5 shadow-xl rounded-lg bg-white p-5">
          <h1 className="text-xl text-gray-500">Products in your cart</h1>
          {
            items.length <= 0 ?
              <h1 className="text-center w-full">Your carts is Empty</h1>
              :
              items.map(item =>
                <CartItem key={item.id} product={item} />
              )
          }
          {
            items.length > 0 &&
            <>
              <div className="flex justify-between text-black w-full">
                <span className="uppercase">subtotal</span>
                ${total.toFixed(2)}
              </div>
              <button className="uppercase px-10 py-2 text-white bg-blue-500">proceed to checkout</button>
              <button onClick={handleResetCart} className="text-red-500 outline-none border-none bg-transparent">Reset Cart</button>
            </>
          }
        </div>
      }
    </div>
  )
}

export default CartIcon