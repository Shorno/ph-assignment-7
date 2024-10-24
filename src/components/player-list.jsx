import PlayerCard from "./player-card.jsx";

export default function PlayerList({players}) {
    return (
        <>
            <div className={"grid md:grid-cols-3 gap-8 mt-24"}>
                {players?.map((player) => (
                    <PlayerCard
                        key={`${player.name} + ${player.role}`}
                        image={player.image}
                        name={player.name}
                        role={player.role}
                        rating={player.rating}
                        price={player.price}
                        primaryRole={player.primaryRole}
                        subRole={player.subRole}
                        country={player.country}
                    />
                ))}
            </div>
        </>
    )
}
