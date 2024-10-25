import ButtonGroup from "./button-group.jsx";
import AvailablePlayerList from "./available-player-list.jsx";
import SelectedPlayerList from "./selected-player-list.jsx";

export default function PlayerList({players, selectedPlayers, handleSelectedPlayers, view, setView}) {
    return (
        <>
            <ButtonGroup view={view} setView={setView}/>

            {
                view === "available" ?
                    <AvailablePlayerList players={players} handleSelectedPlayers={handleSelectedPlayers}/>
                    :
                    <SelectedPlayerList selectedPlayers={selectedPlayers}/>
            }
        </>
    )
}