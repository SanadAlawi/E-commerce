import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="mt-auto px-10 py-10 flex flex-col gap-5 lg:px-32">

      {/* TOP */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

        <div className="flex flex-col gap-2">
          <h1 className="capitalize text-gray-600 text-xl">Categories</h1>
          <Link to='' className="capitalize text-gray-400 text-sm">women</Link>
          <Link to='' className="capitalize text-gray-400 text-sm">men</Link>
          <Link to='' className="capitalize text-gray-400 text-sm">shoes</Link>
          <Link to='' className="capitalize text-gray-400 text-sm">Accessories</Link>
          <Link to='' className="capitalize text-gray-400 text-sm">New Arrivals</Link>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="capitalize text-gray-600 text-xl">links</h1>
          <Link to='' className="capitalize text-gray-400 text-sm">FAQ</Link>
          <Link to='' className="capitalize text-gray-400 text-sm">pages</Link>
          <Link to='' className="capitalize text-gray-400 text-sm">stores</Link>
          <Link to='' className="capitalize text-gray-400 text-sm">compare</Link>
          <Link to='' className="capitalize text-gray-400 text-sm">cookies</Link>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="capitalize text-gray-600 text-xl">about</h1>
          <p className="text-gray-400 text-sm text-justify">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt ut labore etdolore.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="capitalize text-gray-600 text-xl">contact</h1>
          <p className="text-gray-400 text-sm text-justify">
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt ut labore etdolore.          </p>
        </div>

      </div>


      {/* BOTTOM */}
      <div className="flex flex-col-reverse gap-5 justify-between items-center md:flex-row">

        <div className="flex gap-5 items-center">
          <h1 className="capitalize text-blue-600 text-3xl font-bold">logo</h1>
          <p className="text-sm text-gray-400">© Copyright 2023. All Rights Reserved</p>
        </div>

        <img src="/images/payment.png" alt="payment" className="h-14" />
      </div>


    </footer>
  )
}

export default Footer