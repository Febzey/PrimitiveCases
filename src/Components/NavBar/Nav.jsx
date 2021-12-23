import { useState, useEffect } from 'react';
import LoginButton from './Login-Logout/LoginButton';
import Dropdown_ from './Dropdown/Dropdown';

import { Link } from 'react-scroll';
import { Menu } from '@headlessui/react';
import { FaSun, FaMoon, FaShoppingCart, FaBars } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';
import { Link as Rlink} from 'react-router-dom'
const Nav = ({ changeCartState, cartItems }) => {
    const { user } = useAuth0();
    const [moon, setState] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const changeMode = () => {
        if (dropdown) setDropdown(false);
        setState(!moon);
        const root = window.document.documentElement;
        return moon ? root.classList.add('dark') : root.classList.remove('dark');
    };

    const Dropdown = async () => setDropdown(!dropdown);
    useEffect(() => setState(true), []);

    return (
        <div>
            <div className="fixed flex h-16 w-full dark:bg-zinc-900 bg-neutral-100 bg-opacity-75 shadow-sm backdrop-filter backdrop-blur items-center">
                <div className="ml-10 absolute text-indigo-300 text-2xl cursor-pointer">
                    {
                        moon
                            ? <FaMoon onClick={() => { changeMode() }} className="duration-300 transform motion-safe hover:scale-125" />
                            : <FaSun onClick={() => { changeMode() }} className="duration-300 transform motion-safe hover:scale-125" />
                    }
                </div>
                <ul className="hidden md:flex flex-row gap-5 items-center justify-center h-full w-full text-zinc-900 dark:text-neutral-100 font-dmSans">
                    <li className="duration-200 ease-in dark:hover:text-neutral-400 hover:text-neutral-500 cursor-pointer"><Rlink to="/">Home</Rlink></li>
                    <li className="duration-200 ease-in dark:hover:text-neutral-400 hover:text-neutral-500 cursor-pointer"><Link to="items" smooth={true}>Items</Link></li>
                </ul>
                <div className="absolute right-0 mr-10 text-zinb-900 text-zinc-800 dark:text-indigo-400 flex flex-row gap-2 items-center">
                    <LoginButton />
                    {
                        user ?
                            <div className="flex flex-row items-center gap-2">
                                <p>Welcome, <span className="font-semibold">{user.name}</span></p>
                                <img src={user.picture} alt="user profile" height="40" width="40" className="rounded-full" />
                                <Menu as="div" className="flex items-center">
                                    <Menu.Button>
                                        <FaBars className="text-2xl dark:text-indigo-500 cursor-pointer" onClick={Dropdown} />
                                    </Menu.Button>
                                    {
                                        dropdown
                                            ? <div><Dropdown_ changeCartState={changeCartState} /></div>
                                            : null
                                    }
                                </Menu>
                            </div>
                            : null
                    }
                    <div className="text-2xl cursor-pointer active:text-sky-500">
                        {
                            cartItems.length === 0
                                ? <FaShoppingCart onClick={() => { changeCartState() }} />
                                : <FaShoppingCart className="text-orange-500 animate-pulse" onClick={() => { changeCartState() }} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Nav;