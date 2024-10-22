import { useParams } from "react-router-dom"
import Filter from "../components/Filter"
import List from "../components/List"

const Products = () => {
  const {category} = useParams()

  return (
    <div className="flex flex-col md:flex-row">
      
        <Filter />  
        <List />

    </div>
  )
}

export default Products