
import { FaSlash  } from 'react-icons/fa';
import React from 'react'

const Footer = () => {
    return (
        <div className="w-full min-h-44 py-11 bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 flex items-center justify-center gap-6 flex-col md:flex-row dark:text-neutral-300">
            <a className="font-Russo">PrimitiveCases &copy; 2021</a><FaSlash/>
            <p className="font-Russo">Website by: <a href="https://febzey.com" className="text-sky-400 hover:text-sky-500" target="_blank">Febzey</a></p>
        </div>
    )
};

export default Footer;
