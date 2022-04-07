import React, { useEffect } from "react";
import "./App.css";
import SearchBox from "./SearchBox";

const API_URL = `http://www.omdbapi.com?apikey=71122cac`;
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("SpiderMan");
  });
  return (
    <div>
      <div>
        <h1 className="text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-600 to-gray-900 p-12 pb-6">
          MarvelMovies
        </h1>
      </div>
      <SearchBox />
    </div>
  );
};

export default App;
