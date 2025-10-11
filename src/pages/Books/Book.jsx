import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const book = singleBook;

  const {
    image,
    bookName,
    category,
    publisher,
    rating,
    yearOfPublishing,
    tags,
    bookId
    
  } = book;

  return (
    <>
    
    <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-xl border-2 border-gray-300 object-cover rounded-xl p-5 h-[500px] w-full ">
          <figure className="bg-gray-100  mx-auto w-2/3">
            <img className="h-[200px] p-3" src={image} alt="" />
          </figure>
          <div className="card-body">
            <div className="flex gap-4">
              {tags.map((tag) => (
                <button className="btn text-teal-700 t rounded-xl text-xs px-3 py-1 ">
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">{yearOfPublishing}</div>
            </h2>

            <p className="flex gap-2 items-center">
              {" "}
              <IoMdPerson />
              {publisher}
            </p>

            <div className="card-actions justify-between">
              <div className="badge badge-outline text-green-700">
                {category}
              </div>
              <div className="badge badge-outline text-green-700">
                {" "}
                <FaRegStar /> {rating}
              </div>
            </div>
          </div>
        </div>
    </Link>
   
    </>
  );
};

export default Book;
