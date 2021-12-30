import React, { useState } from 'react'

export default function HandleDelete() {

    const [inputValue, setInputValue] = useState({
        value:null
    });

    const [Id, setId] = useState();
    const [deleteSuccess, setDeleteSuccess] = useState();

    const handleDelete = async () => {
        console.log(inputValue.value)

        const Value = inputValue.value
        try {
            const response = await fetch('http://localhost:3000/api/delete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([Value])
            });

            const resData = await response.json();

            if (resData.success === true) {
                setId(inputValue.value);
                return setDeleteSuccess(true);
            }

            if (resData.success === false) {
                setId(inputValue.value);
                return setDeleteSuccess(false);
            }

        }

        catch (err) {
            console.error(err)
        }
    };

    return (
        <div className="w-3/4 py-32 mx-auto min-h-[50] flex items-center justify-center flex-col dark:text-neutral-100 shadow-lg dark:bg-zinc-800 gap-12">
            <h1 className="text-3xl underline underline-offset-2 decoration-lg decoration-sky-500">Deleting an item</h1>
            <div className="flex flex-row gap-4">
                <input className="bg-neutral-100 rounded-sm py-2 px-4 dark:text-zinc-600" type="text" placeholder="Product ID" onChange={event=>setInputValue({value:event.target.value})}></input>
                <button className="bg-sky-500 px-4 text-neutral-100 rounded-sm hover:bg-sky-600" onClick={()=>handleDelete()}>Delete</button>
            </div>
            {
                deleteSuccess === true && <p className="dark:text-neutral-100 text-neutral-800">Deleted product: {Id} successfully.</p>
            }
            {
                deleteSuccess === false &&  <p className="dark:text-neutral-100 text-neutral-800">Are you sure the item with product id: {Id} exists?</p>
            }

        </div>
    )
};