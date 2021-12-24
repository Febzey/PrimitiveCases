const Item_ = ({ props, addItemsToCarts }) => {

    return (
        <div className="max-h-[90%] md:w-4/5 bg-stone-200 w-full p-11 py-16 flex flex-col items-center justify-center gap-4 rounded-sm shadow-lg dark:bg-zinc-700 ml-auto mr-auto">
            <div className="flex flex-col md:flex-row w-full gap-3 ml-auto">
                <img src={props.imgUrl} height="200" width="190" className="ml-auto mr-auto" />
                <div className="flex-col">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-4">
                        <p className="px-4 font-dmSans text-neutral-600 tracking-wide font-medium dark:text-neutral-100 mb-auto mt-5 text-xl text-center">{props.description}</p>
                        <div className="flex flex-col">
                            <p className="dark:text-neutral-300 font-bold text-right">${props.price}</p>
                            <button
                                onClick={()=>addItemsToCarts(props)}
                                className="active:bg-emerald-600 active:animate-bounce bg-emerald-400 py-2 px-4 font-dmSans font-semibold text-center rounded-sm cursor-pointer hover:bg-emerald-500 dark:text-neutral-100"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Item_;