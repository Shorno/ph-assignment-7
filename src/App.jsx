import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import {useEffect, useState} from "react";
import PlayerList from "./components/player-list.jsx";

function App() {
    const [players, setPlayers] = useState(null);

    const getPlayerData = () => {
        fetch("data/player-data.json")
            .then((response) => response.json())
            .then((data) => setPlayers(data))
            .catch((error) => console.log("Error fetching data", error))
    }

    useEffect(() => {
        getPlayerData()
    }, [])


    return (
        <>
            <main className={"container mx-auto"}>
                <Navbar/>
                <Hero/>
                <PlayerList players={players}/>
            </main>
        </>
    )
}

export default App
