const SecondBanner = () => {
    return (
        <div className="w-full h-[30%] bg-indigo-200 dark:bg-zinc-800 flex items-center justify-evenly flex-col md:flex-row gap-4">

            <div className="flex flex-col gap-3 items-center">
                <div className="w-[90%] md:w-[70%] px-5 text-center font-Poppins text-neutral-700 dark:text-neutral-100">
                    <p>Subscribe to get updates on new products and limited time deals.</p>
                </div>
                <div className="flex flex-row">
                    <input type="email" className="rounded-sm py-3 px-2 md:px-6 text-center" placeholder="Subscribe to updates"/>
                    <button type="submit" className="bg-emerald-400 text-white font-medium active:bg-emerald-500 px-2">
                        Subscribe
                    </button>
                </div>
            </div>


            {/* <div className="font-Poppins text-neutral-700 flex flex-col items-center gap-4 dark:text-neutral-100 border border-zinc-400 h-24 px-10">
                <p className="my-auto mx-auto">Ad Here</p>
            </div> */}

        </div>
    )

};

export default SecondBanner;