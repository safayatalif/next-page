import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from '../Book/Book';
import Loading from '../Loading/Loading';

const Books = () => {
    const navigation = useNavigation()
    console.log(navigation.state)
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }
    const books = useLoaderData();
    console.log(books.books)
    return (
        <div className='mt-12'>
            <h1 className='grid gap-5 md:grid-cols-4 lg:grid-cols-4'>
                {
                    books.books.map(book => <Book
                        key={book.isbn13}
                        book={book}
                    ></Book>)
                }
            </h1>
        </div>
    );
};

export default Books;