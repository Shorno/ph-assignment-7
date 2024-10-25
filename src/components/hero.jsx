import Banner from "../assets/banner-main.png"
import BannerBackground from "../assets/bg-shadow.png"

export default function Hero({handleAddCoin}) {
    return (
        <div className="hero mt-10 py-8 bg-black md:rounded-2xl"
             style={{
                 backgroundImage: `url(${BannerBackground})`,
             }}>
            <div className="hero-content text-neutral-content text-center">
                <div className="flex flex-col max-w-6xl justify-center items-center space-y-8">
                    <img className={"w-60"} src={Banner} alt="banner "/>
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket
                        Team</h1>
                    <p className="mb-5 text-white/75 text-xl md:text-2xl">
                        Beyond Boundaries Beyond Limits
                    </p>
                    <div className={"border border-yellow-300 p-2 rounded-xl"}>
                        <button onClick={handleAddCoin} className="btn btn-warning font-bold">
                            Claim Free Credit
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}