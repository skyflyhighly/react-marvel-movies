import React from "react";

const SearchBox = (props) => {
  return (
    <div className=" relative text-center flex justiy-center items-center bg-gray-900 w-72 mx-auto rounded-sm">
      <input
        type="text"
        placeholder="Search for movies"
        className="p-2 w-full md:w-96 text-center bg-gray-900 rounded-md text-amber-400 focus:outline-amber-500 outline-none placeholder-amber-400"
        onChange={props.movieSearch}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 fill-amber-500 absolute right-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default SearchBox;
