import { useState } from 'react'

const SwitchCategory = ({ changeCategory }) => {

    const [categoryButton, setButtonActive] = useState({
        activeObject: null,
        objectsArray: [
            {
                type: 1,
                name: "Iphone XS"
            },
            {
                type: 2,
                name: "Iphone 12"
            }
        ]
    });

    const toggleActive = (index, elementType) => {
        changeCategory({ type: elementType })
        return setButtonActive({...categoryButton, activeObject: categoryButton.objectsArray[index]})
    }

    const toggleActiveStyles = (index) => {
        if (categoryButton.objectsArray[index] === categoryButton.activeObject) {
            return "bg-sky-600 motion-safe transform scale-110 -translate-y-3"
        }
        return ""
    }

    return (
        <div className="w-full flex items-center justify-center h-52">
            <ul className="flex flex-row gap-5 items-center justify-center">
                {
                    categoryButton.objectsArray.map((element, index) => (
                        <li key={index} className={toggleActiveStyles(index) + " bg-sky-400 py-3 cursor-pointer duration-100 hover:bg-sky-600 px-6 rounded-md text-xl text-white font-dmSans "} onClick={() => toggleActive(index, element.type)}>{element.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SwitchCategory;