export default function ButtonGroup() {
    return (
        <>
            <div className={"flex justify-between items-center mt-24 px-4 md:px-0"}>
                <p className={"text-2xl font-semibold"}>Available Players</p>
                <div className={"flex border border-gray-200 rounded-r-lg rounded-l-lg font-semibold"}>
                    <button className={"py-2 px-4 bg-red-300 rounded-l-lg"}>
                        Available
                    </button>
                    <button className={"py-2 px-4  rounded-r-lg"}>
                        Selected 0
                    </button>
                </div>
            </div>
        </>
    )
}