import React, { useState } from 'react'
import { motion } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion";

const CartItems = ({ items, removeOne }) => {
    const [rotation, setRotation] = useState(0);
    const removeItem = (it) => {
        setRotation(rotation - 400)
        setTimeout(()=>{
            removeOne(it)
            return setRotation(0)
        },100)
    }
    return (
        <AnimateSharedLayout>
            <motion.div
                animate={{x: rotation}}
                transiton={{duration:1}}
                layout className="w-4/5 bg-neutral-400 bg-opacity-50 flex flex-col items-center justify-center gap-5 p-6 dark:text-neutral-50 font-Poppins">
                <h1 className="ml-auto mr-auto text-xl mt-4 text-center">{items.description}</h1>
                <img src={items.imgUrl} height="150" width="150" className="ml-auto mr-auto" />
                <p>Price: <span className="font-semibold text-neutral-900 dark:text-sky-300 text-lg">${items.price}</span></p>

                <motion.div layout className="flex flex-row gap-3">
                    <motion.button className="bg-red-300 dark:bg-red-400 text-xs font-dmSans py-1 px-2 rounded-sm" onClick={() => removeItem(items)}>remove</motion.button>
                </motion.div>
            </motion.div>
        </AnimateSharedLayout>
    )
};
export default CartItems;