import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import {useEffect, useState} from "react";
import PlayerList from "./components/player-list..jsx";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer.jsx";

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

        if (selectedPlayers.length >= 6) {
            toast.warning("Maximum player already selected")
            return;
        }

        if (selectedPlayers.some(player => player.name === name)) {
            toast.warning(`${name} already selected`)
            return;
        }

        if (price > coins) {
            toast.warning("Not Enough Coins")
            return
        }

        const newSelectedPlayer = {name: name, subRole: subRole, image: image, price: price};
        setSelectedPlayers([...selectedPlayers, newSelectedPlayer]);


        toast.success(`${name} is added`)

        setCoins((prevState) => prevState - price);
    }

    const handleAddCoin = () => {
        setCoins((prevState) => prevState + 100000)
    }

    const handleDeletePlayer = (name) => {
        setSelectedPlayers((prevSelectedPlayers) =>
            prevSelectedPlayers.filter((player) => player.name !== name))

        toast.success(`${name} removed from team`)
    }


    return (
        <>
            <Navbar coins={coins}/>
            <main className={"container mx-auto"}>
                <Hero handleAddCoin={handleAddCoin}/>
                <PlayerList
                    players={players}
                    handleSelectedPlayers={handleSelectedPlayers}
                    selectedPlayers={selectedPlayers}
                    view={view}
                    setView={setView}
                    handleDeletePlayer={handleDeletePlayer}

                />
            </main>
            <ToastContainer position={"top-center"}/>
            <Footer/>
        </>
    )
}

export default App
