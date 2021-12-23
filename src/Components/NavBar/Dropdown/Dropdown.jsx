import { Menu } from '@headlessui/react'
import { useAuth0 } from '@auth0/auth0-react';
const classNames = (...classes) => classes.filter(Boolean).join(' ');


const Dropdown_ = ({changeCartState}) => {

    const { logout } = useAuth0();

    return (

        <Menu.Items className="origin-top-right absolute right-0 mt-10 w-56 rounded-md shadow-lg bg-white dark:bg-zinc-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            <div className="py-1">
                <Menu.Item>
                    {({ active }) => (
                        <a onClick={()=>{logout()}}
                            href="/"
                            className={classNames(
                                active ? 'bg-gray-100 dark:text-indigo-400 dark:bg-zinc-700 text-gray-900' : 'text-gray-700 dark:text-indigo-400',
                                'block px-4 py-2 text-sm text-center'
                            )}
                        >
                            Sign out
                        </a>
                    )}
                </Menu.Item>

                <Menu.Item>
                    {({ active }) => (
                        <a
                            href="/"
                            className={classNames(
                                active ? 'bg-gray-100 dark:text-indigo-400 dark:bg-zinc-700 text-gray-900' : 'text-gray-700 dark:text-indigo-400',
                                'block px-4 py-2 text-sm text-center'
                            )}
                        >
                            See what's new
                        </a>
                    )}
                </Menu.Item>

                <Menu.Item>
                    {({ active }) => (
                        <a
                            href="/"
                            className={classNames(
                                active ? 'bg-gray-100 dark:text-indigo-400 dark:bg-zinc-700 text-gray-900' : 'text-gray-700 dark:text-indigo-400',
                                'block px-4 py-2 text-sm text-center'
                            )}
                        >
                            Switch Accounts
                        </a>
                    )}
                </Menu.Item>
            </div>
        </Menu.Items>
    )
};

export default Dropdown_;