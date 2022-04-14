import React from "react";
import SearchBox from "./components/SearchBox";
import Card from "./components/Card";
import movies from "./data/moviesname";
import upcomingMovies from "./data/upcomingmovies";
import tvseries from "./data/tvseries";
import MoviesList from "./components/MoviesList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      searchfield: "",
      upcoming: upcomingMovies,
      tvseries: tvseries,
    };
  }
  movieSearch = (event) => {
    this.setState({
      searchfield: event.target.value,
    });
  };
  render() {
    const { movies, searchfield, upcoming, tvseries } = this.state;
    const filterArray = (arr) => {
      return arr.filter((item) => {
        return item.name.toLowerCase().includes(searchfield.toLowerCase());
      });
    };
    let allMovies = [
      {
        movieList: filterArray(movies).map((movie) => (
          <Card
            key={movie.id}
            moviesName={movie.name}
            year={movie.year}
            img={movie.img}
            link={movie.link}
          />
        )),
        id: 1,
        title: "Movies",
      },
      {
        movieList: filterArray(tvseries).map((movie) => (
          <Card
            key={movie.id}
            moviesName={movie.name}
            year={movie.year}
            img={movie.img}
            link={movie.link}
          />
        )),
        id: 2,
        title: "Television Series",
      },
      {
        movieList: filterArray(upcoming).map((movie) => (
          <Card
            key={movie.id}
            moviesName={movie.name}
            year={movie.year}
            img={movie.img}
            link={movie.link}
          />
        )),
        id: 3,
        title: "Upcoming Series",
      },
    ];
    return (
      <div>
        <div>
          <h1 className="text-xl md:text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-yellow-600 to-gray-900 p-4 md:p-12 pb-6">
            MarvelMovies
          </h1>
        </div>
        <SearchBox movieSearch={this.movieSearch} />
        <div className="my-8 p-8 bg-amber-500 text-white text-center">
          Note : Use any adblockers or
          <a
            href="https://brave.com/"
            target="_blank"
            rel="noreferrer"
            className="underline font-bold"
          >
            {" "}
            Brave Browser
          </a>{" "}
          for best experience.
        </div>
        {allMovies.map((movies) =>
          movies.movieList.length > 0 ? (
            <MoviesList key={movies.id} movies={movies} />
          ) : (
            <h1 className="text-center text-2xl mt-8 text-amber-500">
              No {movies.title}
            </h1>
          )
        )}
      </div>
    );
  }
}

export default App;
