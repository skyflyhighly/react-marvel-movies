import React, { useEffect } from "react";
import "./App.css";
//  Api key  : 71122cac
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
      <h3>Using API</h3>
    </div>
  );
};

export default App;
