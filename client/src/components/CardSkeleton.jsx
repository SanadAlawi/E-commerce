
const CardSkeleton = () => {

    const Skeleton = () => (
        <div className="shadow-sm flex flex-col gap-2 animate-pulse">
            <div className="w-full h-80 bg-gray-400"></div>
            <div className="w-full h-10 bg-gray-400"></div>
            <div className="flex gap-5">
                <div className="w-20 h-10 bg-gray-400"></div>
                <div className="w-20 h-10 bg-gray-400"></div>
            </div>
        </div>
    )

    const cards = Array.from({ length: 8 }, (_, index) => (
        <Skeleton key={index} />
    ))
    return (
        cards
    )
}

export default CardSkeleton