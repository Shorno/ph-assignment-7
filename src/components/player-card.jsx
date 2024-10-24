import {RiUser3Fill} from "react-icons/ri";
import {FaFlag} from "react-icons/fa";

export default function PlayerCard({image, name, price, primaryRole, subRole, rating, country, handleSelectedPlayers}) {
    return (
        <div className="card bg-base-100 border border-gray-200">
            <figure className="px-4 pt-4">
                <img
                    src={image}
                    alt={name}
                    className="rounded-xl h-60 w-full object-cover"
                />
            </figure>
            <div className="card-body p-4">
                <div className="flex items-center justify-between mb-2">
                    <div className={"flex justify-center items-center"}>
                        <div className="avatar mr-2">
                            <RiUser3Fill className={"w-10 h-10 p-2 rounded-full border border-gray-200"}/>
                        </div>
                        <div>
                            <h2 className="card-title text-lg">{name}</h2>
                            <div className="flex items-center text-sm text-gray-500">
                                <FaFlag className={"h-4 w-4 mr-1"}/>
                                <span>{country}</span>
                            </div>
                        </div>
                    </div>
                    <div className="badge badge-accent pb-0.5 rounded-md">{primaryRole}</div>
                </div>
                <div className="divider mt-0"></div>
                <div className="flex flex-col gap-2 mb-2">
                    <div className={"flex"}>
                        <p className="text-sm text-gray-500">Rating</p>
                        <div className="text-sm font-medium">{rating}</div>
                    </div>
                    <div className={"flex"}>
                        <p className="text-sm text-gray-500">Speciality</p>
                        <div className="text-sm font-medium">{subRole}</div>
                    </div>
                    <div className={"flex"}>
                        <p className="text-sm text-gray-500">Price</p>
                        <div className="text-sm font-medium">${price}</div>
                    </div>
                </div>
                <div className="card-actions">
                    <button
                        className="btn btn-neutral btn-block"
                        onClick={() => handleSelectedPlayers(name, subRole, image)}
                    >Choose Player
                    </button>
                </div>
            </div>
        </div>
    );
}