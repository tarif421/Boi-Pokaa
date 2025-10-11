import { Suspense } from "react";
import Book from "./Book";

const Books = ({ books }) => {
  //   const [books, setBooks] = useState([]);
  //   useEffect(() => {
  //     fetch("bookData.json")
  //       .then((res) => res.json())
  //       .then((book) => setBooks(book));
  //   });
  return (
    <div >
      
      <Suspense fallback={<span>Loading...</span>}>
    <div className="grid grid-cols-3 gap-3 my-10 px-10 ">
            {books.map((singleBook) => (
          <Book key={singleBook.bookId} singleBook={singleBook}></Book>
        ))}
    </div>
      </Suspense>
    </div>
  );
};

export default Books;
