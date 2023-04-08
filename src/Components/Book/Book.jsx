import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { image, isbn13, price, subtitle, title } = book;
    return (
        <Link to={`../book/${isbn13}`}>
            <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                <img src={image}
                    alt='book cover'
                    className='object-cover w-full h-56 md:h-64 xl:h-80'
                ></img>
                <div className='bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
                    <h1 className='text-xl font-bold'>{title}</h1>
                    <p className='mt-4'>{subtitle.substring(0, 45)}...</p>
                    <p className='mt-auto'>price:{price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Book;