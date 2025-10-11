import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const {id} = useParams();
  const bookId = parseInt(id)
  const data = useLoaderData();
const singleBook = data.find(book =>  book.bookId === bookId)
console.log(singleBook)
  const {
    image,
    bookName,
    category,
    publisher,
    rating,
    yearOfPublishing,
    tags,
    review,
    totalPages,
    
    
  } = singleBook
  
  return (
  <div className="my-10 flex justify-center ">
    <div className="mr-15 mt-8 ">
        <img className="h-[500px] w-[1800px]" src={image} alt="" />
    </div>
      <div>
      <h1 className="font-bold text-2xl">{bookName}</h1>
      <p className="border-b-2 mt-2 border-gray-200">{publisher}</p>
      <h2  className=" border-b-2 border-gray-200 p-2">{category}</h2>
      <p className="mt-4"><span className="font-bold">Review</span> {review}</p>
         <div className="flex gap-4 items-center my-4 border-b-2 border-gray-200 py-4">
            <p className="font-bold">Tag</p>
              {tags.map((tag) => (
                <button className="btn text-teal-700 t rounded-xl text-xs px-3 py-1 ">
                   {tag}
                </button>
              ))}
            </div>

            <p>Number of page: <span className="font-bold ml-10">{totalPages}</span></p>
            <p>Publisher: <span className="font-bold ml-23">{publisher}</span></p>
            <p>Number of page: <span className="font-bold ml-10">{totalPages}</span></p>
            <p>Year of Publishig: <span className="font-bold ml-10">{yearOfPublishing}</span></p>
            <p>Rating: <span className="font-bold ml-28">{rating}</span></p>
            <div className="flex gap-10 my-9">
                <button className="btn ">Read</button>
                <button className="btn">Wishlist</button>
            </div>
    </div>
  </div>
  );
};

export default BookDetails;
