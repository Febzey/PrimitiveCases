import CartItems from './CartItem';
import { FaShoppingBasket } from 'react-icons/fa';
import { useNotifications } from '@mantine/notifications';
import { Link } from 'react-router-dom';
const ShoppingCart = ({ cartItems, deleteAllCartItems, removeOne }) => {

    const notifications = useNotifications();
    const clearedCart = () => notifications.showNotification({
        color: 'red',
        message: 'Cart Cleared.',
    });

    let priceArray = [];

    const handleDeleteFromCart = () => {
        clearedCart();
        priceArray = [];
        return deleteAllCartItems();
    }

    const arrSum = () => priceArray.reduce((a, b) => a + b, 0)
    cartItems.map(items => priceArray.push(items.price));

    return (
        <div className="fixed h-screen z-50 w-[60%] md:w-1/5 dark:bg-zinc-800 bg-neutral-300 shadow-xl flex flex-col overflow-scroll overflow-x-hidden py-10">
            <div className="flex flex-row items-center mt-5 gap-3 ml-auto mr-auto">
                <h1 className="text-2xl font-dmSans dark:text-neutral-100 text-zinc-800">Shopping Cart</h1>
                <FaShoppingBasket className="text-2xl font-dmSans dark:text-neutral-100 text-zinc-800 " />
            </div>
            <div className="ml-auto mr-auto my-5">
                {cartItems.length !== 0
                    ? <div className="flex flex-col gap-2">
                        <button onClick={handleDeleteFromCart} className="rounded bg-red-400 py-2 text-neutral-50 font-Poppins duration-200 text-xs ease-in-out transform motion-safe hover:scale-110 hover:bg-red-500">Clear Cart</button>
                        <Link
                            to="/checkout"
                            state={{ data: cartItems }}
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
                    cartItems.length !== 0
                        ? cartItems.map(items => (
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