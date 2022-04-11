import React from "react";

const Card = (props) => {
  return (
    <div className="w-64 ">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img
          src={props.img}
          alt="marvel_movies"
          className="w-64 h-96 rounded-lg hover:scale-105  hover:opacity-80 "
        />
      </a>
      <div className="text-amber-400 text-center">
        <p className="pt-3 break-words">{props.moviesName}</p>
        <p>{props.year}</p>
      </div>
    </div>
  );
};

export default Card;
