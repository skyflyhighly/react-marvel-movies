import React from "react";

const Card = (props) => {
  return (
    <div className="inline-block p-3 pt-10">
      <img
        src={props.img}
        alt="marvel_movies"
        className="w-64 h-96 rounded-md"
      />
      <div className="text-amber-400 text-center">
        <h2>{props.moviesName}</h2>
        <p>{props.year}</p>
      </div>
    </div>
  );
};

export default Card;
