
import { FaSlash  } from 'react-icons/fa';
import React from 'react'

const Footer = () => {
    return (
        <div className="w-full min-h-44 py-11 bg-gray-100 dark:bg-zinc-800 flex items-center justify-center gap-6 flex-col md:flex-row dark:text-neutral-100">
            <a>2021 &copy;</a><FaSlash/>
            <a>Lorem ipsum dolor sit amet.</a><FaSlash/>
            <p>Website by: <a href="https://febzey.com" className="text-sky-400 hover:text-sky-500" target="_blank">Febzey</a></p>
        </div>
    )
};

export default Footer;
