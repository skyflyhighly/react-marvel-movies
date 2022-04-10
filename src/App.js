import React from "react";
import SearchBox from "./SearchBox";
import Card from "./Card";
import movies from "./moviesname";
import upcomingMovies from "./upcomingmovies";

// const API_URL = `http://www.omdbapi.com?apikey=71122cac`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      searchfield: "",
      upcoming: upcomingMovies,
    };
  }
  movieSearch = (event) => {
    this.setState({
      searchfield: event.target.value,
    });
  };
  render() {
    const { movies, searchfield, upcoming } = this.state;
    const filterMovie = movies.filter((movie) => {
      return movie.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    const filterUpcomingMovie = upcoming.filter((movie) => {
      return movie.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div>
        <div>
          <h1 className="text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-600 to-gray-900 p-12 pb-6">
            MarvelMovies
          </h1>
        </div>
        <SearchBox movieSearch={this.movieSearch} />
        <div className="flex justify-center gap-5 flex-wrap pt-7">
          {filterMovie.map((movie) => (
            <Card
              key={movie.id}
              moviesName={movie.name}
              year={movie.year}
              img={movie.img}
              link={movie.link}
            />
          ))}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-600 to-gray-900 p-3 pb-0">
            Upcoming MarvelMovies...
          </h1>
        </div>
        <div className="flex justify-center gap-5 flex-wrap pt-7">
          {filterUpcomingMovie.map((movie) => (
            <Card
              key={movie.id}
              moviesName={movie.name}
              year={movie.year}
              img={movie.img}
              link={movie.link}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
