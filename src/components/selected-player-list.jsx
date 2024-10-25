import SelectedPlayersCard from "./selected-players-card.jsx";

export default function SelectedPlayerList({selectedPlayers}) {
    console.log(selectedPlayers)
    return (
        <>
            <div className={"flex  flex-col  gap-4 px-4 mt-10 md:px-0 mb-24"}>
                {selectedPlayers?.map((selectedPlayer) => (
                    <SelectedPlayersCard key={selectedPlayer.name} selectedPlayer={selectedPlayer} />
                ))}
            </div>
        </>
    )
}