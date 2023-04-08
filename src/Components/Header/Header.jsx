import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <div className="navbar bg-[#F3F4F6] shadow-md px-4">
                <div className="flex-1">
                    <BoltIcon className='h-6 w-6 text-blue-500'></BoltIcon>
                    <Link className="ml-4 normal-case text-2xl font-bold">NextPage</Link>
                </div>

                <div className="flex">
                    {
                        !isMenuOpen &&
                        <button onClick={() => setIsMenuOpen(true)} className="btn btn-square btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                        </button>
                    }
                    <ul className='md:flex lg:flex hidden'>
                        <li><NavLink className={`mr-8 font-semibold ${({ isActive }) => (isActive ? 'active' : '')}`} to="/">Home</NavLink></li>
                        <li><NavLink className={`mr-8 font-semibold ${({ isActive }) => (isActive ? 'active' : '')}`} to="/books">Books</NavLink></li>
                        <li><NavLink className={`mr-8 font-semibold ${({ isActive }) => (isActive ? 'active' : '')}`} to="/about">About us</NavLink></li>
                        <li><NavLink className={`mr-8 font-semibold ${({ isActive }) => (isActive ? 'active' : '')}`} to="/chart">Chart</NavLink></li>
                    </ul>

                </div>
                {/* {
                    isMenuOpen && (
                        <div className='absolute top-0 left-3/4 w-full z-10 md:hidden'>
                            <ul className=''>
                                <li><button className='btn btn-success' onClick={() => setIsMenuOpen(false)}>X</button></li>
                                <li><NavLink className={`mr-8 font-semibold ${({ isActive }) => (isActive ? 'active' : '')}`} to="/">Home</NavLink></li>
                                <li><NavLink className={`mr-8 font-semibold ${({ isActive }) => (isActive ? 'active' : '')}`} to="/books">Books</NavLink></li>
                                <li><NavLink className={`mr-8 font-semibold ${({ isActive }) => (isActive ? 'active' : '')}`} to="/about">About us</NavLink></li>
                            </ul>
                        </div>
                    )
                } */}
                {isMenuOpen && (
                    <div className='absolute top-0  left-0 w-full z-10 md:hidden'>
                        <div className='p-5 bg-white border rounded shadow-sm w-full'>
                            {/* Logo & Button section */}
                            <div className='flex items-center justify-between mb-4'>
                                <div>
                                    <Link to='/' className='inline-flex items-center'>
                                        <BoltIcon className='h-6 w-6 text-blue-500' />
                                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                            nextPage
                                        </span>
                                    </Link>
                                </div>
                                {/* Dropdown menu close button */}
                                <div>
                                    <button
                                        aria-label='Close Menu'
                                        title='Close Menu'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <XMarkIcon className='w-5 text-gray-600' />
                                    </button>
                                </div>
                            </div>
                            {/* Mobile Nav Items Section */}
                            <nav>
                                <ul className='space-y-4'>
                                    <li>
                                    <NavLink className={`mr-8 font-semibold ${({ isActive }) => (isActive ? 'active' : '')}`} to="/">Home</NavLink>
                                    </li>
                                    <li>
                                    <NavLink className={`mr-8 font-semibold ${({ isActive }) => (isActive ? 'active' : '')}`} to="/books">Books</NavLink>
                                    </li>
                                    <li>
                                    <NavLink className={`mr-8 font-semibold ${({ isActive }) => (isActive ? 'active' : '')}`} to="/about">About us</NavLink>
                                    </li>
                                    <li>
                                    <li><NavLink className={`mr-8 font-semibold ${({ isActive }) => (isActive ? 'active' : '')}`} to="/chart">Chart</NavLink></li>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
};

export default Header;