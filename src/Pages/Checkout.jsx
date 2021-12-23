import { Link } from 'react-router-dom'

const Checkout = ({ cartItems }) => {

    if (!cartItems || cartItems.length === 0) return (
        <div className="h-screen w-full flex items-center justify-center flex-col gap-4">
            <p>You haven't selected any items.🤔</p>
            <Link to="/" className="text-center bg-emerald-400 py-2 px-4 rounded-sm font-medium font-dmSans text-white">Take me back!</Link>
        </div>
    )

    return (
        <div className="w-full h-full p-5">
            <Link to="/" className="p-4">👈🏻 Take me back.</Link>
            <div className="h-screen ml-auto mr-auto flex items-center justify-center w-4/6">


                <div className="grid grid-cols-3 gap-8">
                    {cartItems.map(item => (
                        <div className="border border-green-400 p-20 rounded">
                            <div>
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
};
export default Checkout;