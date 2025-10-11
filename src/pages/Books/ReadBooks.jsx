import React from 'react';

const ReadBooks = ({book}) => {
     console.log(book)
    return (
        <div>
            <h1>read{book.length}</h1>
        </div>
    );
};

export default ReadBooks;