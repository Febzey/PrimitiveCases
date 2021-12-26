import Item_ from './Item';
const MainItems = ({ items, addItemsToCarts, whichCard }) => {
    const phoneName = whichCard.objectsArray.filter(item => item.type === whichCard.type);
    const filteredItemsArray = items.filter(item => item.type === whichCard.type);
    return (
        <div className="h-full mr-auto mt-0 w-full md:w-[80%]" id="items">
            <div className="md:min-h-[80vh] bg-center no-repeat bg-cover ">
                <h1 className="text-5xl font-Russo p-9 text-center md:text-left md:ml-16 dark:text-white font-semibold text-neutral-600 pt-16">{phoneName[0].name}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 p-7 md:px-16 gap-8">
                    {
                        filteredItemsArray.length > 0
                            ? filteredItemsArray.map(itm => (
                                <div className="w-full">
                                    <Item_ props={itm} addItemsToCarts={addItemsToCarts} key={itm.product_id} />
                                </div>
                            ))
                            : <div className="dark:text-neutral-200">Item's not in stock</div>
                    }
                </div>
            </div>
        </div>
    )
}
export default MainItems;