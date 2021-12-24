import { Link } from 'react-router-dom'
const Checkout = ({ cartItems }) => {
    if (!cartItems || cartItems.length === 0) return (
        <div className="h-screen w-full flex items-center justify-center flex-col gap-4">
            <p>You haven't selected any items.🤔</p>
            <Link to="/" className="text-center bg-emerald-400 py-2 px-4 rounded-sm font-medium font-dmSans text-white">Take me back!</Link>
        </div>
    )
    return (
        <div className="w-full p-5">
            <Link to="/" className="p-4">👈🏻 Take me back.</Link>
            <div className="min-h-screen ml-auto mr-auto flex items-center justify-center w-full">
                <div className="flex flex-col">
                    <div className=" bg-zinc-100 rounded flex flex-col gap-1">
                        <div className="flex justify-center mx-auto">
                            <div className="flex flex-col">
                                <div className="w-full">
                                    <div className="border-b border-gray-200 shadow">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                    Description
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                    Color
                                                </th>
                                                <th className="px-6 py-2 text-xs text-gray-500">
                                                    Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {
                                                cartItems.map(item => (
                                                    <tr className="whitespace-nowrap">
                                                        <td className="px-6 py-4 text-sm text-gray-500">
                                                            {item.description}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="text-sm text-gray-900">
                                                                {item.color}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="text-sm text-gray-500">{item.price}</div>
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