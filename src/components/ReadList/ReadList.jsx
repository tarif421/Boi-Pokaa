import React, { useEffect, useState } from "react";
import { BsDatabaseDash } from "react-icons/bs";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/AddToDb/ksx";
import ReadBooks from "../../pages/Books/ReadBooks";

const ReadList = () => {
  const data = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('');
  console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBook = storedBookData.map((book) => parseInt(book));
    const myReadList = data.filter((book) =>
      convertedStoredBook.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type)
  }
  return (
    <div>
      <div className="dropdown dropdown-bottom dropdown-end flex justify-end mt-5 mb-15">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort By
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm "
        >
          <li>
            <a onClick={()=> handleSort("Pages")}>Pages</a>
          </li>
          <li>
            <a onClick={()=> handleSort("Ratings")}>Ratings</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>Read Book List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read {readList.length}</h2>
          {readList.map((book) => (
            <ReadBooks key={book.bookId} book={book}></ReadBooks>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>My wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
