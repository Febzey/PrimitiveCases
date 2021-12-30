import { Link } from 'react-router-dom'
const Checkout = ({ cartItems, removeOne, totalPriceAndItems }) => {

    if (!cartItems || cartItems.size === 0) return (
        <div className="min-h-screen w-full flex items-center justify-center flex-col gap-4 dark:bg-zinc-800">
            <p className="dark:text-zinc-100">You haven't selected any items.🤔</p>
            <Link to="/" className="text-center bg-emerald-400 py-2 px-4 rounded-sm font-medium font-dmSans text-white">Take me back!</Link>
        </div>
    )

    const CartItemsArray = [];

    const totalItems = totalPriceAndItems.totalItems;
    const totalPrice = totalPriceAndItems.totalPrice.toFixed(2);

    for (const [key, value] of cartItems) CartItemsArray.push(value);

    return (
        <div className="w-full p-5 min-h-screen py-56 dark:bg-zinc-800">
            <div className="ml-auto mr-auto flex items-center justify-center w-full flex-col gap-3 ">
                <div className="flex flex-col">
                    <div className=" bg-zinc-100 dark:bg-zinc-700 rounded flex flex-col gap-1">
                        <div className="flex justify-center mx-auto">
                            <div className="flex flex-col">
                                <div className="w-full">
                                    <div className="border-b border-gray-200 dark:border-zinc-900 shadow">
                                        <thead className="bg-gray-50 dark:bg-zinc-700" >
                                            <tr>
                                                <th className="px-6 py-2 text-xs text-gray-500 dark:text-zinc-200">
                                                    Description
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500 dark:text-zinc-200">
                                                    Color
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500 dark:text-zinc-200">
                                                    Price
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500 dark:text-zinc-200">
                                                    Quantity
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white dark:bg-zinc-700">
                                            {
                                                CartItemsArray.map(item => (
                                                    <tr className="whitespace-nowrap">
                                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-zinc-200">
                                                            {item.description}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="text-sm text-gray-900 dark:text-zinc-200">
                                                                {item.color}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="text-sm text-gray-500 dark:text-zinc-200">{item.price}</div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="text-sm text-gray-500 dark:text-zinc-200">{item.buyCount}</div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="text-sm text-red-400 cursor-pointer hover:underline" onClick={() => removeOne(item)}>Remove</div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 flex flex-row gap-0 dark:text-neutral-200 text-sm font-dmSans">

                        <div className="flex flex-col">
                            <h1>Total Items: <span className="font-bold">{totalItems}</span></h1>
                            <h1>Total Price: <span className="font-bold">${totalPrice}</span></h1>
                        </div>

                        <div className="ml-auto">
                           <button className="bg-emerald-500 py-2 px-4 rounded-sm text-lg font-semibold text-neutral-100 active:bg-emerald-700">Purchase</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};
export default Checkout;