import { FavoriteBorder, Person, Search } from "@mui/icons-material"
import { Link } from "react-router-dom"
import CartIcon from "./CartIcon"


const Navbar = () => {
  return (
    <header className="h-20 z-20 px-5 flex justify-between items-center shadow-md bg-white sticky top-0">

      <div className="flex items-center gap-5">
        <Link to='/' className="font-bold text-3xl uppercase">LOGO</Link>
        <Link to='/products/women' className="capitalize">women</Link>
        <Link to='/products/men' className="capitalize">men</Link>
        <Link to='/products/children' >children</Link>
      </div>


      <div className="flex items-center gap-5 text-gray-400">
        <Search />
        <Person />
        <FavoriteBorder />
        <CartIcon />
      </div>

    </header>
  )
}

export default Navbar