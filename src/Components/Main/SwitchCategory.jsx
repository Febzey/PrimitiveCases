import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const SwitchCategory = ({ setWhichCard, whichCard }) => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleActive = (index, elementType) => {
        if (isMenuOpen) setMenuOpen(false);
        setWhichCard(prevState => prevState.type = elementType)
        return setWhichCard(() => { return { ...whichCard, activeObject: whichCard.objectsArray[index] } })
    }

    const toggleActiveStyles = (index) =>
        whichCard.objectsArray[index] === whichCard.activeObject ? "bg-sky-200 dark:bg-emerald-600" : "";


    return (
        <>
            <div className="md:flex justify-center ml-auto border-l border-zinc-200 dark:border-zinc-800 hidden">
                <ul className="flex flex-col items-center justify-center mb-auto mt-32">
                    {
                        whichCard.objectsArray.map((element, index) => (
                            <li
                                key={index}
                                className={toggleActiveStyles(index) + " border-b border-zinc-200 dark:border-zinc-800 w-full 00 py-3 active:bg-sky-200 cursor-pointer duration-100 hover:bg-zinc-200 dark:hover:bg-emerald-500 px-7 text-xl text-left text-zinc-500 dark:text-zinc-200 font-Poppins"}
                                onClick={() => toggleActive(index, element.type)}>
                                {element.name}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="flex md:hidden items-center justify-center p-14">
                <FaBars className="text-7xl text-center dark:text-neutral-100 cursor-pointer" onClick={() => setMenuOpen(prevState => !prevState)} />
            </div>


            {
                isMenuOpen &&
                <div className="w-full">
                    <ul className="flex flex-col items-center justify-center">
                        {
                            whichCard.objectsArray.map((element, index) => (
                                <li
                                    key={index}
                                    className={toggleActiveStyles(index) + " border-b border-zinc-200 dark:border-zinc-800 w-full 00 py-3 active:bg-sky-200 cursor-pointer duration-100 hover:bg-zinc-200 dark:hover:bg-emerald-500 px-7 text-xl text-left text-zinc-500 dark:text-zinc-200 font-Poppins"}
                                    onClick={() => toggleActive(index, element.type)}>
                                    {element.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }

        </>
    )
}

export default SwitchCategory;