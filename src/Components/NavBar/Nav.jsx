import { FaSun, FaMoon, FaShoppingCart, FaBars, FaMobileAlt } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';
import { Link as Rlink } from 'react-router-dom'
import LoginButton from './Login-Logout/LoginButton';

const Nav = ({ changeCartState, cartItems, dropdown, setDropdown, moon, changeMode }) => {

    const { user, logout, } = useAuth0();

    return (
        <div>
            <div className="fixed flex h-16 w-full dark:bg-zinc-900 bg-neutral-100 bg-opacity-75 shadow-sm backdrop-filter backdrop-blur items-center">

                <div className="flex flex-row gap-2 ml-2 md:ml-12 items-center font-maven text-xl md:text-2xl text-neutral-700 dark:text-neutral-300">
                    <h1 className="cursor-pointer"><Rlink to="/">Primitive<span className="text-sky-500">Cases</span></Rlink></h1>
                    <FaMobileAlt className="hidden md:block" />
                </div>

                <div className="absolute right-0 mr-3 md:mr-10 text-zinb-900 text-zinc-800 dark:text-neutral-200 flex flex-row gap-2 items-center">
                    <LoginButton />
                    {user &&
                        <div className="flex flex-row items-center gap-2">
                            <p className="hidden md:block">Welcome, <span className="font-semibold">{user.name}</span></p>
                            <img src={user.picture} alt="user profile" height="40" width="40" className="rounded-full" />

                            <div>
                                <FaBars className="text-3xl dark:text-neutral-200 cursor-pointer duration-75 hover:text-neutral-600 dark:hover:text-zinc-500" onClick={() => setDropdown(prev => !prev)} />
                                {dropdown &&
                                    <div className="bg-stone-100 absolute right-0 top-[3.5rem] rounded-sm shadow-lg dark:bg-zinc-700">
                                        <ul className="flex flex-col items-left gap-1 font-dmSans">
                                            <Rlink to="/"><li className="text-neutral-600 hover:bg-gray-300 w-full px-6 py-2 cursor-pointer dark:text-neutral-200 dark:hover:bg-zinc-600" onClick={() => setDropdown(false)}>Home</li></Rlink>
                                            <li className="text-neutral-600 hover:bg-gray-300 w-full px-6 py-2 cursor-pointer dark:text-neutral-200 dark:hover:bg-zinc-600" onClick={() => { setDropdown(false), logout() }}>Sign off</li>
                                            <li className="text-neutral-600 hover:bg-gray-300 w-full px-6 py-2 cursor-pointer dark:text-neutral-200 dark:hover:bg-zinc-600" onClick={() => { setDropdown(false), changeCartState() }}>View cart</li>
                                        </ul>
                                    </div>}
                            </div>

                        </div>}

                    {moon
                        ? <FaMoon onClick={() => changeMode()} className="duration-300 transform motion-safe hover:scale-125 text-2xl cursor-pointer" />
                        : <FaSun onClick={() => changeMode()} className="duration-300 transform motion-safe hover:scale-125 text-2xl cursor-pointer" />}

                    <div className="cursor-pointer text-2xl">
                        {cartItems && cartItems.size < 1
                            ? <FaShoppingCart onClick={() => changeCartState()} />
                            : <FaShoppingCart className="text-orange-500 animate-pulse" onClick={() => changeCartState()} />}
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Nav;