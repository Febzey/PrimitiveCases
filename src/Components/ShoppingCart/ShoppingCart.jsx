import CartItems from './CartItem';
import { FaShoppingBasket, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ShoppingCart = ({ cartItems, deleteAllCartItems, removeOne, setCartMenu, totalPriceAndItems }) => {

    let CartItemsArray = [];

    if (cartItems) {
        for (const [key, value] of cartItems) {
            CartItemsArray.push(value);
        }
    }

    return (
        <div className="fixed h-screen z-50 w-[85%] md:w-1/5 dark:bg-zinc-800 bg-gray-100 shadow-xl flex flex-col overflow-scroll overflow-x-hidden py-10 scrollbar-thin scrollbar scrollbar-thumb-zinc-400 scrollbar scrollbar-track-gray-100">

            <FaSignInAlt className="dark:text-neutral-300 absolute right-7 top-6 rotate-180 text-2xl cursor-pointer text-neutral-600" onClick={() => setCartMenu(false)} />

            <div className="flex flex-row items-center mt-5 gap-3 mx-auto">
                <h1 className="text-2xl font-dmSans dark:text-neutral-100 text-zinc-800">Shopping Cart</h1>
                <FaShoppingBasket className="text-2xl font-dmSans dark:text-neutral-100 text-zinc-800" />
            </div>

            <div className="mx-auto my-5">
                {CartItemsArray.length !== 0 &&
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2 px-8 w-full mx-auto">
                            <button
                                onClick={() => deleteAllCartItems()}
                                className="bg-red-400 py-2 text-neutral-50 font-Poppins duration-200 text-xs ease-in-out transform motion-safe hover:scale-110 hover:bg-red-500">
                                Clear Cart
                            </button>
                            <Link
                                to="/checkout"
                                onClick={() => setCartMenu(false)}
                                className="text-center bg-emerald-500 px-6 py-3 text-neutral-50 font-Poppins duration-200 ease-in-out transform motion-safe hover:scale-110 hover:bg-emerald-600">

                                Checkout
                            </Link>
                        </div>
                        <div className="flex flex-col py-4">
                            <p className="px-5 text-left dark:text-neutral-100">Total Items: <span className="font-semibold">{totalPriceAndItems.totalItems}</span></p>
                            <p className="px-5 text-left dark:text-neutral-100">Total Price: <span className="font-semibold">${totalPriceAndItems.totalPrice.toFixed(2)}</span></p>
                        </div>
                    </div>
                }

            </div>

            <div className="flex ml-auto mr-auto items-center justify-center w-full flex-col gap-6">
                {CartItemsArray.length !== 0
                    ? CartItemsArray.map((items, index) => (<CartItems items={items} removeOne={removeOne} key={index} />))
                    :
                    <div className="dark:text-neutral-100 font-dmSans px-6 text-center flex flex-col items-center gap-3">
                        <p>Your cart seems a tad empty. ????</p>
                        <button className="bg-emerald-500 py-2 px-2 rounded-sm font-dmSans text-white" onClick={() => setCartMenu(false)}>Close cart</button>
                    </div>

                }
            </div>

        </div>
    )
};
export default ShoppingCart;