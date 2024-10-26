import BannerBackground from "../assets/bg-shadow.png";
import FooterLogo from "../assets/logo-footer.png"
export default function Footer() {
    return (
        <>
            <footer className="bg-slate-900 text-white/75 p-10 relative sm:pt-[28rem] md:pt-96 flex flex-col items-center">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] md:w-1/2 rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-200">
                    <div
                        className="bg-white h-80 sm:h-88 md:h-96 z-30 border border-gray-200 bg-cover bg-center bg-no-repeat rounded-2xl"
                        style={{backgroundImage: `url(${BannerBackground})`}}
                    >
                        <div className="relative z-10 flex h-full items-center justify-center flex-col py-4 sm:py-6 md:py-8 gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center">Subscribe to our Newsletter</h1>
                            <p className="text-black/60 text-sm sm:text-base md:text-lg text-center">Get the latest updates and news right in your inbox!</p>
                            <div className="join w-full max-w-xs sm:max-w-sm md:max-w-md">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="input input-bordered join-item w-full"
                                />
                                <button
                                    className="btn btn-primary text-black join-item font-bold bg-gradient-to-r from-orange-300 via-yellow-200/75 to bg-pink-300 border-none"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className={"mb-24 md:-mt-24 mt-52"} src={FooterLogo} alt="footer logo"/>
                </div>

                <div className="footer justify-between container mx-auto">
                    <nav>
                        <h6 className="text-xl font-bold text-white">About Us</h6>
                        <p className="max-w-60">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </nav>
                    <nav>
                        <h6 className="text-xl font-bold text-white">Quick Links</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Services</a>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <form>
                        <h6 className="text-xl font-bold text-white">Subscribe</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span>Subscribe to our newsletter for the latest updates.</span>
                            </label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Enter your emails"
                                    className="input input-bordered join-item"
                                />
                                <button
                                    className="btn btn-primary text-black join-item font-bold bg-gradient-to-r from-orange-300 via-yellow-200/75 to bg-pink-300 border-none"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="divider divider-neutral" />
                <p className="text-center">@2024 Dream Cricket. All Rights Reserved.</p>
            </footer>
        </>
    )
}