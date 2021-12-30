import { useState } from 'react'
import HandleAdd from '../Components/AdminPage/HandleAdd';
import HandleDelete from '../Components/AdminPage/HandleDelete';

export default function AdminPanel() {
    const [option, setOption] = useState("");
    return (
        <div className="dark:bg-zinc-700 min-h-screen pb-32 border-l border-r border-zinc-300 dark:border-zinc-700 w-full md:w-[80%] mx-auto">
            <div className="dark:bg-zinc-700">
                <div className="h-[80vh] md:h-[60vh] w-full items-center justify-center flex flex-col gap-3 dark:bg-zinc-700">
                    <h1 className="dark:text-neutral-100 text-3xl px-7 md:text-4xl font-medium font-dmSans text-center">What would you like to do ?</h1>
                    <div className="flex flex-col md:flex-row gap-3 mx-auto">
                        <button className="bg-sky-500 py-3 px-6 rounded-sm text-center font-dmSans text-neutral-50 font-medium cursor-pointer hover:bg-sky-600 text-xl" onClick={() => setOption("delete")}>Delete Item</button>
                        <button className="bg-sky-500 py-3 px-6 rounded-sm text-center font-dmSans text-neutral-50 font-medium cursor-pointer hover:bg-sky-600 text-xl" onClick={() => setOption("add")}>Add Item</button>
                    </div>
                </div>
                {
                    option === "add" && <HandleAdd />
                }

                {
                    option === "delete" && <HandleDelete/>
                }
            </div>
        </div>
    )
}
