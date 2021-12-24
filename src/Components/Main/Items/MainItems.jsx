import Item_ from './Item';
const MainItems = ({ items, addItemsToCarts, whichCard }) => {

    let name;
    let num;

    if (whichCard.type === 1) {
        name = 'Iphone XS'
        num = 1
    }
    if (whichCard.type === 2) {
        name = 'Iphone 12'
        num = 2
    }
    
    return (
        <div className="min-h-screen ml-auto mr-auto py-10 mt-0 w-full md:w-[80%]" id="items">
            <div className="mb-32 md:min-h-[80vh] shadow-2xl bg-itemsLight bg-center no-repeat bg-cover dark:bg-itemsDark">
                <h1 className="text-5xl font-Russo p-9 text-center md:text-left ml-16 dark:text-white font-semibold text-neutral-600 pt-16">{name}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 p-7 md:px-16 gap-8">
                    {
                        items.filter(item => item.type === num).map(itm => (
                            <div className="w-full">
                            <Item_ props={itm} addItemsToCarts={addItemsToCarts} key={itm.product_id} />
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default MainItems;