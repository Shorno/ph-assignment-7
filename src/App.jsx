import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import {useEffect, useState} from "react";
import PlayerList from "./components/player-list..jsx";

function App() {
    const [players, setPlayers] = useState(null);
    const [selectedPlayers, setSelectedPlayers] = useState([])
    const [view, setView] = useState("available")
    const [coins, setCoins] = useState(200000);

    const getPlayerData = () => {
        fetch("data/player-data.json")
            .then((response) => response.json())
            .then((data) => setPlayers(data))
            .catch((error) => console.log("Error fetching data", error))
    }
    useEffect(() => {
        getPlayerData()
    }, [])


    const handleSelectedPlayers = (name, subRole, image, price) => {
        const newSelectedPlayer = {name: name, subRole: subRole, image: image, price: price};
        setSelectedPlayers([...selectedPlayers, newSelectedPlayer]);

        if (price >= coins){
            alert("Not enough coins")
            return
        }

        setCoins((prevState) =>  prevState - price);
    }

    const handleAddCoin = () => {
        setCoins((prevState) => prevState + 100000)
    }

    return (
        <>
            <main className={"container mx-auto"}>
                <Navbar coins={coins}/>
                <Hero handleAddCoin={handleAddCoin}/>
                <PlayerList
                    players={players}
                    handleSelectedPlayers={handleSelectedPlayers}
                    selectedPlayers={selectedPlayers}
                    view={view}
                    setView={setView}

                />
            </main>
        </>
    )
}

export default App
