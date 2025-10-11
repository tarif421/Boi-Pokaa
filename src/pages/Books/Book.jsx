import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';

const Book = ({singleBook}) => {
 const   book = singleBook
 console.log(book)
 const {image, bookName, category,publisher, rating, yearOfPublishing ,tags } = book

    return <>
    
        <div className="card bg-base-100 w-96 shadow-xl border-2 border-gray-300 object-cover rounded-xl p-5 ">
  <figure className='bg-gray-100  mx-auto w-2/3'>
    <img className='h-[200px] p-3' src={image} alt="" />
  </figure>
  <div className="card-body">

    <div className='flex gap-4'>
        {
            tags.map(tag =>  <button className='btn bg-teal-700 text-white rounded-xl '>{tag}</button>)
        }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>

        <p className='flex gap-2 items-center'> <IoMdPerson />{publisher}</p>
 
    <div className="card-actions justify-between">
      <div className="badge badge-outline text-green-700">{category}</div>
      <div className="badge badge-outline text-green-700"> <FaRegStar /> {rating}</div>
    </div>
  </div>
</div>
    </>
};

export default Book;