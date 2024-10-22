import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from 'react'
const Slider = () => {
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const [index, setIndex] = useState(1)
    console.log(index)

    return (
        <div className="overflow-hidden h-[calc(100vh-80px)]">

            <div className={`h-full flex w-[300vw] transition duration-500 translate-x-[-${index * 100}vw]`}>
                {data.map((src, index) =>
                    <img key={index} src={src} alt="" className="h-full object-cover w-screen" />
                )}
            </div>

            <div className="flex gap-5 items-center absolute bottom-10 left-[50%] translate-x-[-50%]">
                <div onClick={() => setIndex(prevIndex => prevIndex <= 0 ? data.length - 1 : prevIndex - 1)} className="border-2 border-gray-300 p-2 flex justify-center items-center hover:bg-gray-300 cursor-pointer"><ArrowBackIos /></div>
                <div onClick={() => setIndex(prevIndex => prevIndex >= data.length - 1 ? 0 : prevIndex + 1)} className="border-2 border-gray-300 p-2 flex justify-center items-center hover:bg-gray-300 cursor-pointer"><ArrowForwardIos /></div>
            </div>

        </div>
    )
}

export default Slider