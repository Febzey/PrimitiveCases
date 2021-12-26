import React, { useState } from 'react'
import { motion } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion";

const CartItems = ({ items, removeOne }) => {
    const [rotation, setRotation] = useState(0);
    const removeItem = (it) => {
        setRotation(rotation - 400)
        setTimeout(() => {
            removeOne(it)
            return setRotation(0)
        }, 100)
    }
    return (
        <AnimateSharedLayout>
            <motion.div
                animate={{ x: rotation }}
                transiton={{ duration: 1 }}
                layout
                className="w-4/5 bg-neutral-300 bg-opacity-50 rounded-sm flex flex-col items-center justify-center p-6 dark:text-neutral-50 dark:bg-zinc-700 font-dmSans">
                <div className="flex flex-col gap-5">
                    <h1 className="ml-auto mr-auto text-xl mt-4 text-center">{items.description}</h1>
                    <img src={items.imgUrl} height="150" width="150" className="ml-auto mr-auto" />
                    <div className="ml-auto mr-auto">
                        <div className="flex flex-row gap-3 items-center justify-center">
                            <p>Price: <span className="font-semibold text-neutral-900 dark:text-white text-lg">${items.price}</span></p>
                            {items.buyCount > 1 && <p className="p-0 m-0 left-0 top-0">x {items.buyCount}</p>}
                        </div>
                        <div className="flex flex-row gap-3">
                            <motion.button className="bg-red-300 dark:bg-red-400 text-xs font-dmSans py-1 px-2 rounded-sm ml-auto mr-auto" onClick={() => removeItem(items)}>remove</motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimateSharedLayout>
    )
};
export default CartItems;