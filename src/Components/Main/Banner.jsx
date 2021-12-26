import { Link } from 'react-scroll';
const Banner = () => {
    return (
        <div className="h-[70%] flex flex-col items-center justify-center gap-5 bg-banner no-repeat bg-cover bg-bottom dark:bg-bannerDark" id="top">
            <h1 className="dark:text-neutral-100 font-Russo text-5xl md:text-6xl w-5/6 md:w-2/5 text-center">We Sell <span className="text-indigo-500">Affordable</span> Phone Cases</h1>
            <div className="flex flex-row gap-4">
                <Link to="about" smooth={true}><a className="bg-indigo-300 py-3 px-5 rounded text-neutral-700 dark:text-white font-Poppins font-semibold cursor-pointer duration-200 hover:bg-indigo-400">Learn More</a></Link>
                <Link to="items" smooth={true}><a className="bg-indigo-300 py-3 px-5 rounded text-neutral-700 dark:text-white font-Poppins font-semibold cursor-pointer duration-200 hover:bg-indigo-400">Our Items</a></Link>
            </div>
        </div>
    )
}
export default Banner;