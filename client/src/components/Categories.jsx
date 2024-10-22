import { Link } from "react-router-dom"

const Categories = () => {

    const data = [
        "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ]
    return (
        <div className="px-5 py-10 grid grid-cols-1 min-h-[80vh] md:grid-cols-4">

            <Link to='/products/sale' className="relative group flex justify-center items-center">
                <img src={data[0]} alt="" className="absolute object-cover w-full h-full" />
                <span className="uppercase px-5 py-3 bg-white z-10 group-hover:bg-blue-900 group-hover:text-white">sale</span>
            </Link>
            <Link to='/products/men' className="relative group flex justify-center items-center md:row-span-2">
                <img src={data[2]} alt="" className="absolute object-cover w-full h-full" />
                <span className="uppercase px-5 py-3 bg-white z-10 group-hover:bg-blue-900 group-hover:text-white">men</span>
            </Link>
            <Link to='/products/new-season' className="relative group flex justify-center items-center">
                <img src={data[1]} alt="" className="absolute object-cover w-full h-full" />
                <span className="uppercase px-5 py-3 bg-white z-10 group-hover:bg-blue-900 group-hover:text-white">new season</span>
            </Link>
            <Link to='/products/accessories' className="relative group flex justify-center items-center">
                <img src={data[3]} alt="" className="absolute object-cover w-full h-full" />
                <span className="uppercase px-5 py-3 bg-white z-10 group-hover:bg-blue-900 group-hover:text-white">accessories</span>
            </Link>
            <Link to='/products/women' className="relative group flex justify-center items-center">
                <img src={data[4]} alt="" className="absolute object-cover w-full h-full" />
                <span className="uppercase px-5 py-3 bg-white z-10 group-hover:bg-blue-900 group-hover:text-white">women</span>
            </Link>
            <Link to='/products/shoes' className="relative group flex justify-center items-center md:col-span-2">
                <img src={data[5]} alt="" className="absolute object-cover w-full h-full" />
                <span className="uppercase px-5 py-3 bg-white z-10 group-hover:bg-blue-900 group-hover:text-white">shoes</span>
            </Link>
            
            
        </div>
    )
}

export default Categories