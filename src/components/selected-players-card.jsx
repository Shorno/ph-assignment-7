import { FaTrashAlt } from "react-icons/fa";

export default function SelectedPlayersCard({selectedPlayer, handleDeletePlayer}) {


    return (
        <>
            <div className="card bg-base-100 border border-gray-200 py-2s">
                <div className={"flex justify-between items-center pl-2 pr-4 md:pr-8 py-2"}>
                    <div className={"flex items-start gap-4"}>
                        <div>
                            <img className={"w-20 h-20 object-cover rounded-xl"} src={selectedPlayer.image}
                                 alt={selectedPlayer.name}
                            />

                        </div>
                        <div className={"flex flex-col"}>
                            <p className={"text-2xl font-semibold"}>{selectedPlayer.name}</p>
                            <p className={"text-gray-500"}>{selectedPlayer.subRole}</p>
                            <p className={"font-semibold"}>${selectedPlayer.price}</p>
                        </div>
                    </div>
                    <FaTrashAlt
                        onClick={()=>handleDeletePlayer(selectedPlayer.name)}
                        className={"cursor-pointer"}
                        fill={"red"}
                    />
                </div>
            </div>
        </>
    )
}