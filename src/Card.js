import React from "react";

const Card = (props) => {
  return (
    <div className="inline-block p-3 pt-10">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img
          src={props.img}
          alt="marvel_movies"
          className="w-64 h-96 rounded-md hover:scale-105  hover:opacity-80"
        />
      </a>
      <div className="text-amber-400 text-center">
        <h2 className="pt-3">{props.moviesName}</h2>
        <p>{props.year}</p>
      </div>
    </div>
  );
};

export default Card;
