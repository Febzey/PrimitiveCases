import React, { useState } from 'react'

import { FaSpinner } from 'react-icons/fa';

export default function HandleAdd() {

    const [itemOptions, setSelectedImage] = useState({
        image: null,
        description: null,
        type: null,
        color: null,
        quantity: null,
        price: null
    });

    const [itemIsGood, setItemIsGood] = useState({
        itemCheckPassed: null,
        itemIsLoading: null,
        product_id: null
    });


    const getBase64 = file => {
        return new Promise(resolve => {
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();
            // Convert the file to base64 text
            reader.readAsDataURL(file);
            // on reader load somthing...
            reader.onload = () => {
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };

    const submitItem = async () => {
        const { image, description, type, color, quantity, price } = itemOptions;

        if (!image || !description || !type || !color || !quantity || !price) return setItemIsGood(prev => { return { ...prev, itemCheckPassed: false } });

        const base64StringImage = await getBase64(image);

        setItemIsGood(prev => { return { ...prev, itemCheckPassed: true, itemIsLoading: true } });


        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([itemOptions, base64StringImage])
            });

            const resData = await response.json();

            if (resData.success === false && !resData.product_id) return setItemIsGood({ failed: true });

            return setItemIsGood(prev => { return { ...prev, itemIsLoading: false, product_id: resData.product_id } });

        }

        catch (err) {
            console.log(err);
        }

    };

    return (
        <div className="flex items-center justify-center flex-col dark:text-neutral-100 shadow-lg dark:bg-zinc-800 w-full md:w-3/4 mx-auto pt-14 py-32 mb-20 text-neutral-700">

            <div className="flex flex-col items-center justify-center mx-auto px-8">
                <h1 className="text-3xl underline underline-offset-2 decoration-lg decoration-sky-500 text-center">Uploading an item</h1>
                <p className="pt-1 text-sm dark:text-neutral-400 text-center">Remember, what you put here will be on the live website for people to see</p>
                <p className="dark:text-neutral-100 pb-20">Max image file size: 20mb</p>
            </div>

            <div className="flex flex-col items-center md:flex-row md:gap-3 gap-8">
                {itemOptions.image &&
                    <div className="flex flex-col gap-3">
                        <img alt="not fount" width={"250px"} src={URL.createObjectURL(itemOptions.image)} />
                        <button className="bg-red-400 text-neutral-50 p-1 font-dmSans rounded-sm w-[40%] text-xs" onClick={() => setSelectedImage(prev => { return { ...prev, image: null } })}>Remove Image</button>
                    </div>
                }
                <div className="flex flex-col gap-4">
                    <input type="file" name="myImage" onChange={(event) => setSelectedImage(prev => { return { ...prev, image: event.target.files[0] } })} />
                    <input className="bg-neutral-100 rounded-sm py-2 px-4 dark:text-zinc-600" type="text" placeholder="Item Description/Name" onChange={event => setSelectedImage(prev => { return { ...prev, description: event.target.value } })}></input>
                    <input className="bg-neutral-100 rounded-sm py-2 px-4 dark:text-zinc-600" type="text" placeholder="Item Type" onChange={event => setSelectedImage(prev => { return { ...prev, type: event.target.value } })}></input>
                    <input className="bg-neutral-100 rounded-sm py-2 px-4 dark:text-zinc-600" type="text" placeholder="Item Color" onChange={event => setSelectedImage(prev => { return { ...prev, color: event.target.value } })}></input>
                    <input className="bg-neutral-100 rounded-sm py-2 px-4 dark:text-zinc-600" type="text" placeholder="Item Quantity" onChange={event => setSelectedImage(prev => { return { ...prev, quantity: event.target.value } })}></input>
                    <input className="bg-neutral-100 rounded-sm py-2 px-4 dark:text-zinc-600" type="text" placeholder="Item Price" onChange={event => setSelectedImage(prev => { return { ...prev, price: event.target.value } })}></input>
                    <button className="bg-emerald-500 py-2 px-4 text-center text-neutral-100 hover:bg-emerald-600" onClick={() => submitItem()}>Submit</button>
                </div>

            </div>
            <div className="mx-auto px-14 gap-4 py-8 w-[80%] md:w-[40%] flex flex-col items-center justify-center text-center">
                {
                    itemIsGood.itemCheckPassed === true ? <p className="dark:text-neutral-100">Item looks good.</p>
                        : itemIsGood.itemCheckPassed === false && <p className="dark:text-neutral-100">Seems you are missing a few arguments or you entered something incorrectly.</p>
                }
                {
                    itemIsGood.itemIsLoading === true ? <FaSpinner className="mx-auto text-4xl dark:text-indigo-500 animate-spin" />
                        : itemIsGood.itemIsLoading === false ? <p className="mx-auto text-neutral-400">Item uploaded successfully! <span className="font-semibold">Product ID: {itemIsGood.product_id}</span></p>
                            : itemIsGood.failed === true && <p>Failed to upload or you entered something incorrectly.</p>
                }

            </div>
        </div>
    )
};