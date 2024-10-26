import SelectedPlayersCard from "./selected-players-card.jsx";

export default function SelectedPlayerList({selectedPlayers, handleDeletePlayer, setView}) {
    console.log(selectedPlayers)
    return (
        <>
            <div className={"flex flex-col  gap-4 px-4 mt-10 md:px-0 mb-24"}>
                {selectedPlayers?.map((selectedPlayer) => (
                    <SelectedPlayersCard key={selectedPlayer.name} selectedPlayer={selectedPlayer}
                                         handleDeletePlayer={handleDeletePlayer}/>
                ))}

               <div className={"border border-gray-200 w-fit p-2 rounded-xl"}>
                   {
                       selectedPlayers.length > 0 && <button onClick={() => setView("available")} className={"btn bg-yellow-300 text-black"}>Add More Player</button>
                   }
               </div>
            </div>
        </>
    )
}