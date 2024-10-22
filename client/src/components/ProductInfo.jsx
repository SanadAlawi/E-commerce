import { FavoriteBorder, ShoppingCart } from "@mui/icons-material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/Cart/cartSlice"
import { products } from "../utils"

const ProductInfo = ({ productId }) => {

    const [quantity, setQuantity] = useState(1)

    const product = products.find(p => p.id === productId)

    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart({ product, quantity }))
    }

    return (
        <div className="flex-1 flex flex-col gap-5">
            <h1 className="font-bold text-2xl">{product.name}</h1>
            <p className="text-blue-400">${product.newPrice}</p>
            <p>{product.desc}</p>
            <div className="flex items-center gap-2">
                <button onClick={() => setQuantity(prevCount => prevCount <= 1 ? 1 : prevCount - 1)} className="w-10 h-10 cursor-pointer bg-gray-300 outline-none">-</button>
                {quantity}
                <button onClick={() => setQuantity(prevCount => prevCount + 1)} className="w-10 h-10 cursor-pointer bg-gray-300 outline-none">+</button>
            </div>

            <button onClick={handleAddToCart} className="w-48 h-10 uppercase bg-blue-600 text-white flex justify-center items-center gap-2">
                <ShoppingCart />
                add to cart
            </button>

            <div className="flex items-center gap-5">
                <div className="flex cursor-pointer items-center gap-2 uppercase text-blue-600">
                    <FavoriteBorder />
                    add to wish list
                </div>
                <div className="flex cursor-pointer items-center gap-2 uppercase text-blue-600">
                    <FavoriteBorder />
                    add to compare
                </div>
            </div>
        </div>
    )
}

export default ProductInfo