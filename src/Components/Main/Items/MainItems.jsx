import Item_ from './Item';



const MainItems = ({ items, addItemsToCarts }) => {

    return (
        <div className="min-h-screen ml-auto mr-auto py-10 mt-24 w-full md:w-[80%]" id="items">
            <div className="mb-32 md:min-h-[80vh] shadow-2xl bg-itemsLight bg-center no-repeat bg-cover dark:bg-itemsDark">
                <h1 className="text-5xl font-Russo p-9 text-center md:text-left ml-16 dark:text-white font-semibold text-neutral-600 pt-16">Our Items</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 p-7 md:px-16 gap-8">
                    {
                        items.map(itemm => (
                            <div className="w-full">
                                <Item_ props={itemm} addItemsToCarts={addItemsToCarts} key={itemm.product_id} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default MainItems;