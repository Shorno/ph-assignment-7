export default function ButtonGroup({view, setView, selectedPlayers}) {
    return (
        <>
            <div className={"flex justify-between items-center mt-24 px-4 md:px-0"}>
                <p className={"md:text-2xl font-semibold"}>
                    {view === "available" ? "Available Players" : `Selected Player (${selectedPlayers.length}/6)`}
                </p>
                <div className={"flex border border-gray-200 rounded-r-lg rounded-l-lg md:font-semibold"}>
                    <button
                        className={`py-2 px-2 md:px-4 rounded-l-lg ${view === "available" ? "bg-yellow-300 text-black" : "text-gray-500"}`}
                        onClick={() => setView("available")}
                    >
                        Available
                    </button>
                    <button
                        className={`py-2 px-2 md:px-4 rounded-r-lg ${view === "selected" ? "bg-yellow-300" : "text-gray-500"}`}
                        onClick={() => setView("selected")}
                    >
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>
        </>
    )
}