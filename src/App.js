import React from "react";
import "./App.css";
import SearchBox from "./SearchBox";
import Card from "./Card";
import movies from "./moviesname";

// const API_URL = `http://www.omdbapi.com?apikey=71122cac`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      searchfield: "",
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1 className="text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-600 to-gray-900 p-12 pb-6">
            MarvelMovies
          </h1>
        </div>
        <SearchBox movieSearch={this.movieSearch} />
        {movies.map((movie) => (
          <Card
            key={movie.id}
            moviesName={movie.name}
            year={movie.year}
            img={movie.img}
            link={movie.link}
          />
        ))}
      </div>
    );
  }
}

export default App;
