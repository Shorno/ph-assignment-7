import ButtonGroup from "./button-group.jsx";
import AvailablePlayerList from "./available-player-list.jsx";
import SelectedPlayerList from "./selected-player-list.jsx";

export default function PlayerList({players, selectedPlayers, handleSelectedPlayers, view, setView}) {
    return (
        <>
            <div className={"pb-64"}>
                <ButtonGroup view={view} setView={setView} selectedPlayers={selectedPlayers} />

                {
                    view === "available" ?
                        <AvailablePlayerList players={players} handleSelectedPlayers={handleSelectedPlayers}/>
                        :
                        <SelectedPlayerList selectedPlayers={selectedPlayers}/>
                }
            </div>
        </>
    )
}