
const Features = ({ type }) => {
  return (
    <div className="flex flex-col gap-5 px-10 py-10 lg:px-32">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <h1 className="flex-1 text-2xl font-bold">{type} Products</h1>
        <p className="text-gray-400 flex-1 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:grid-cols-2 lg:px-20">

        <div className="flex flex-col gap-2 cursor-pointer">
          <div className="relative h-[40vh] group">
            <img src="/images/white dress 4.jpeg" alt="" className="absolute group-hover:z-10 w-full h-full object-cover" />
            <img src="/images/white dress 6.jpeg" alt="" className="absolute w-full h-full object-cover" />
          </div>
          <h1 className="text-xl">Long White Dress</h1>
          <div className="flex items-center gap-5">
            <s className="text-gray-400">$39.9</s>
            <span className="font-bold">$29.9</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 cursor-pointer">
          <div className="relative h-[40vh] group">
            <img src="/images/men black t shirt 2.jpeg" alt="" className="absolute group-hover:z-10 w-full h-full object-cover" />
            <img src="/images/men black t shirt 1.jpeg" alt="" className="absolute w-full h-full object-cover" />
          </div>
          <h1 className="text-xl">Long White Dress</h1>
          <div className="flex items-center gap-5">
            <s className="text-gray-400">$39.9</s>
            <span className="font-bold">$29.9</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 cursor-pointer">
          <div className="relative h-[40vh] group">
            <img src="/images/men whitet shirt 2.jpeg" alt="" className="absolute group-hover:z-10 w-full h-full object-cover" />
            <img src="/images/men whitet shirt 1.jpeg" alt="" className="absolute w-full h-full object-cover" />
          </div>
          <h1 className="text-xl">Long White Dress</h1>
          <div className="flex items-center gap-5">
            <s className="text-gray-400">$39.9</s>
            <span className="font-bold">$29.9</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 cursor-pointer">
          <div className="relative h-[40vh] group">
            <img src="/images/hat 2.jpeg" alt="" className="absolute group-hover:z-10 w-full h-full object-cover" />
            <img src="/images/hat 6.jpeg" alt="" className="absolute w-full h-full object-cover" />
          </div>
          <h1 className="text-xl">Long White Dress</h1>
          <div className="flex items-center gap-5">
            <s className="text-gray-400">$39.9</s>
            <span className="font-bold">$29.9</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Features