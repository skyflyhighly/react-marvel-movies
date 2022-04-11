import React from "react";
import SlideShow from "./SlideShow";

const MoviesList = ({ movies }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-600 to-gray-900 p-3 pb-10">
        {movies.title}
      </h1>
      <SlideShow>{movies.movieList}</SlideShow>
    </div>
  );
};

export default MoviesList;
