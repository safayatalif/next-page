import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import reading from "../../assets/reading-boy.json"
import { ShoppingCartIcon } from '@heroicons/react/24/solid';


const Home = () => {
    return (
        <div className='grid p-8 gap-4 md:grid-cols-2'>
            <div className='mt-16'>
                <small className='badge bg-yellow-300 text-black mb-5 border-none'>ON SALE!</small>
                <h1 className='text-4xl font-bold mb-5'>A reader lives a <br /> thousand lives <span className='text-blue-400'>before he dies</span></h1>
                <p className='max-w-xl mb-4'>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>
                <div>
                    <Link to='/books' className='btn md:w-auto md:mr-4 bg-blue-500'>
                        <div className='inline-flex items-center justify-center w-full h-full'>
                            <p className='mr-3'>Visit Store</p>
                            <ShoppingCartIcon className='w-5 text-gray-100' />
                        </div>
                    </Link>
                    <Link
                        to='/about'
                        className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
                    >
                        Learn More
                    </Link>
                </div>
            </div>
            <div className=''>
                <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                    <Lottie animationData={reading} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;