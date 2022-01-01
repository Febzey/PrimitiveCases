import React, { useState } from 'react'

export default function HandleCategory() {

    const [inputValue, setInputValue] = useState({
        categoryId: null,
        categoryName: null
    });

    const [isSuccess, setSuccess] = useState();

    const handleAddCategory = async () => {
        const cId = inputValue.categoryId;
        const cName = inputValue.categoryName;
        try {
            const response = await fetch('http://localhost:3005/api/createCategory', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([cId, cName])
            });

            const resData = await response.json();


            console.log(resData);

            if (resData.success === true) {
                return setSuccess(true);
            }

            if (resData.success === false) {
                return setSuccess(false);
            }

        }

        catch (err) {
            console.error(err)
        }
    };

    return (
        <div className="w-full md:w-3/4 py-32 mx-auto flex items-center justify-center flex-col dark:text-neutral-100 shadow-lg dark:bg-zinc-800 gap-12">
            <h1 className="text-3xl underline underline-offset-2 decoration-lg decoration-sky-500">Add a category</h1>
            <div className="flex flex-col gap-2">
                <input className="bg-neutral-100 rounded-sm py-2 px-4 dark:text-zinc-600" type="text" placeholder="Category ID" onChange={event => setInputValue(prev => {return {...prev, categoryId: event.target.value }})}></input>
                <input className="bg-neutral-100 rounded-sm py-2 px-4 dark:text-zinc-600" type="text" placeholder="Category Name" onChange={event => setInputValue(prev => {return {...prev, categoryName: event.target.value }})}></input>
                <button className="bg-sky-500 px-4 text-neutral-100 rounded-sm hover:bg-sky-600" onClick={() => handleAddCategory()}>Add</button>
            </div>
            {
                isSuccess === true && <p className="dark:text-neutral-100 text-neutral-800">Successfully added category</p>
            }
            {
                isSuccess === false &&  <p className="dark:text-neutral-100 text-neutral-800">Error.</p>
            }
        </div>
    )
}
