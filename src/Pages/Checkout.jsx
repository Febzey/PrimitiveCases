import { Link } from 'react-router-dom'
const Checkout = ({ cartItems }) => {
    if (!cartItems || cartItems.length === 0) return (
        <div className="min-h-screen w-full flex items-center justify-center flex-col gap-4 dark:bg-zinc-800">
            <p className="dark:text-zinc-100">You haven't selected any items.🤔</p>
            <Link to="/" className="text-center bg-emerald-400 py-2 px-4 rounded-sm font-medium font-dmSans text-white">Take me back!</Link>
        </div>
    )
    return (
        <div className="w-full p-5 min-h-screen py-56 dark:bg-zinc-800">
            <div className="ml-auto mr-auto flex items-center justify-center w-full ">
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
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white dark:bg-zinc-700">
                                            {
                                                cartItems.map(item => (
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
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Checkout;