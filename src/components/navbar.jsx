import CoinIcon from "../assets/coin-money-svgrepo-com.svg"
import Logo from "../assets/logo.png"

export default function Navbar() {
    return (
        <>
            <nav className={"flex justify-between items-center mt-4 md:mt-10 px-4 md:px-0"}>
                <div>
                    <img src={Logo} alt="site logo"/>
                </div>
                <div className={"flex gap-8"}>
                    <div className={"hidden md:flex justify-center items-center gap-8"}>
                        <a>Home</a>
                        <a href="">Fixture</a>
                        <a href="">Teams</a>
                        <a href="">Schedules</a>
                    </div>
                    <div className={"flex justify-center items-center gap-2 border border-gray-300 rounded-lg py-1 px-4"}>
                        <span>0 Coin</span>
                        <img className={"w-7"} src={CoinIcon} alt="coin icon"/>
                    </div>
                </div>
            </nav>
        </>
    )
}