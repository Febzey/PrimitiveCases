const Item_ = ({ props, addItemsToCarts }) => {

    return (
        <div className="md:w-4/5 bg-stone-200 w-full p-11 py-12 flex flex-col items-center justify-center gap-4 rounded-sm shadow-lg dark:bg-zinc-700 ml-auto mr-auto">
            <div className="flex flex-col md:flex-row w-full gap-3 ml-auto">
                
                <div className="flex flex-col gap-2 md:w-[50%] w-full">
                    <img src={props.imgUrl} height="250" width="190" className="ml-auto mr-auto" />    

                <div className="flex flex-row items-center font-dmSans gap-2">
                    <p className="bg-sky-500 rounded-full py-1 px-1 text-xs text-center text-white w-[38%] ml-auto">color: {props.color}</p>
                    <p className="text-[0.8rem] mr-auto text-neutral-500 dark:text-neutral-300">pid: {props.product_id}</p>
                </div>

                </div>                

                <div className="flex-col md:w-[50%] w-full py-9">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-4">
                        <p className="px-2 font-dmSans text-neutral-600 tracking-wide font-medium dark:text-neutral-100 mb-auto text-xl text-center">{props.description}</p>
                        <div className="flex flex-col">
                            <p className="dark:text-neutral-300 font-bold text-right">${props.price}</p>
                            <button
                                onClick={()=>addItemsToCarts(props)}
                                className="active:bg-emerald-600 active:animate-bounce bg-emerald-500 py-2 px-4 font-dmSans font-semibold text-center rounded-sm cursor-pointer hover:bg-emerald-500 dark:text-neutral-100"
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