import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
// import logo from '../assets/images/logo.png'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar(props) {

    const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Crop Recommendation', href: '/recommendation', current: false },
    { name: 'Yield Profit', href: '/profit', current: false },
    ]
    
    if(props.name)
        navigation.find(nav => nav.name === props.name).current = true;


    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link to="/"><h1 className="text-2xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-green-800 to-green-500">AGRI-CULTIVATE</h1></Link><br />
                                </div>
                                <div className="hidden sm:block sm:ml-auto">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-green-200 text-black' : 'text-gray-500 hover:text-black',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-green-300 text-black' : 'text-gray-800 hover:bg-green-200 hover:text-black',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}