import { useParams } from "react-router-dom"
import ProductInfo from "../components/ProductInfo"
import Zoom from "../components/Zoom"

const Product = () => {

    const {id} = useParams()

  return (
    <div className="flex flex-col gap-5 p-5 min-h-[calc(100vh-5rem)] md:flex-row">
      <Zoom  productId={+id} />
      <ProductInfo productId={+id} />
    </div>
  )
}

export default Product