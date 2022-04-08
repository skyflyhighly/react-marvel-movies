import React, { useEffect } from "react";
import "./App.css";
import SearchBox from "./SearchBox";
import Card from "./Card";
import movies from "./moviesname";

// const API_URL = `http://www.omdbapi.com?apikey=71122cac`;
// const App = () => {
//   // const searchMovies = async (title) => {
//   //   const response = await fetch(`${API_URL}&s=${title}`);
//   //   const data = await response.json();
//   //   console.log(data.Search);
//   // };
//   // useEffect(() => {
//   //   searchMovies("SpiderMan");
//   // });
//   return (
//     <div>
//       <div>
//         <h1 className="text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-600 to-gray-900 p-12 pb-6">
//           MarvelMovies
//         </h1>
//       </div>
//       <SearchBox />
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//       <Card />

//     </div>
//   );
// };
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
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
        <SearchBox />
        <Card
          moviesName={movies[0].name}
          year={movies[0].year}
          img={movies[0].img}
        />
        <Card
          moviesName={movies[1].name}
          year={movies[1].year}
          img={movies[1].img}
        />
        <Card
          moviesName={movies[2].name}
          year={movies[2].year}
          img={movies[2].img}
        />
        <Card
          moviesName={movies[3].name}
          year={movies[3].year}
          img={movies[3].img}
        />
        <Card
          moviesName={movies[4].name}
          year={movies[4].year}
          img={movies[4].img}
        />
      </div>
    );
  }
}

export default App;
