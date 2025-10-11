import React from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const books = useLoaderData();
  return <>
    <div>
      <Banner></Banner>
      <h1 className="underline underline-offset-10  text-center font-bold text-3xl">Books</h1>
      <Books books={books}></Books>
    </div>
  </>
};

export default Home;
