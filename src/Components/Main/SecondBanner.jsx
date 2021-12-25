const SecondBanner = () => {
    return (
        <div className="w-full h-[30%] bg-indigo-200 dark:bg-zinc-800 flex items-center justify-center flex-col gap-4 px-5">

            <div className="w-[90%] md:w-1/5 px-5 text-center font-Poppins text-neutral-700 dark:text-neutral-100">
                <p>Subscribe to get updates on new products and limited time deals.</p>
            </div>


            <div className="flex flex-row gap-0">
                <input type="email" className="rounded-sm py-3 px-6 text-center" placeholder="Subscribe to updates"/>
                <button type="submit" className="bg-emerald-400 text-white font-medium px-4 py-5 active:bg-emerald-500">
                    Subscribe
                </button>
            </div>

        </div>
    )

};

export default SecondBanner;