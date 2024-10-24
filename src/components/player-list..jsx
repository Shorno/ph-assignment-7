import ButtonGroup from "./button-group.jsx";
import AvailablePlayerList from "./available-player-list.jsx";
import SelectedPlayerList from "./selected-player-list.jsx";

export default function PlayerList({players, selectedPlayers, handleSelectedPlayers}) {
    return (
        <>
            <ButtonGroup/>
            <SelectedPlayerList selectedPlayers={selectedPlayers}/>
            <AvailablePlayerList players={players} handleSelectedPlayers={handleSelectedPlayers}/>
        </>
    )
}