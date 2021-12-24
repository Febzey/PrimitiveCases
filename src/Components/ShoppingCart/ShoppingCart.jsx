import CartItems from './CartItem';
import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ShoppingCart = ({ cartItems, deleteAllCartItems, removeOne }) => {

    let priceArray = [];

    const handleDeleteFromCart = () => {
        priceArray = [];
        return deleteAllCartItems();
    }

    const filteredArr = cartItems.reduce((acc, current) => {
        const x = acc.find(item => item.product_id === current.product_id);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);

    const arrSum = () => priceArray.reduce((a, b) => {return a + b})
    cartItems.map(items => priceArray.push(items.price));

    return (
        <div className="fixed h-screen z-50 w-[60%] md:w-1/5 dark:bg-zinc-800 bg-neutral-300 shadow-xl flex flex-col overflow-scroll overflow-x-hidden py-10">
            <div className="flex flex-row items-center mt-5 gap-3 ml-auto mr-auto">
                <h1 className="text-2xl font-dmSans dark:text-neutral-100 text-zinc-800">Shopping Cart</h1>
                <FaShoppingBasket className="text-2xl font-dmSans dark:text-neutral-100 text-zinc-800 " />
            </div>
            <div className="ml-auto mr-auto my-5">
                {filteredArr.length !== 0
                    ? <div className="flex flex-col gap-2">
                        <button onClick={handleDeleteFromCart} className="rounded bg-red-400 py-2 text-neutral-50 font-Poppins duration-200 text-xs ease-in-out transform motion-safe hover:scale-110 hover:bg-red-500">Clear Cart</button>
                        <Link
                            to="/checkout"
                            className="text-center rounded bg-emerald-500 px-6 py-3 text-neutral-50 font-Poppins duration-200 ease-in-out transform motion-safe hover:scale-110 hover:bg-emerald-600">Checkout</Link>

                        <div className="flex flex-col py-4">
                            <p className="px-5 text-center dark:text-neutral-100">Total Price: <span className="font-semibold">${arrSum().toFixed(2)}</span></p>
                            <p className="px-5 text-center dark:text-neutral-100">Total Items: <span className="font-semibold">{priceArray.length}</span></p>
                        </div>

                    </div>
                    : null
                }
            </div>
            <div className="flex ml-auto mr-auto items-center justify-center w-full flex-col gap-6">
                {
                    filteredArr.length !== 0
                        ? filteredArr.map(items => (
                            <CartItems items={items} removeOne={removeOne} />
                        ))
                        : (
                            <div className="dark:text-neutral-100 font-dmSans px-6 text-center">Your cart seems a tad empty. 🤔</div>
                        )
                }
            </div>
        </div>
    )
};
export default ShoppingCart;