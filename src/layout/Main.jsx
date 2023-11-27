import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
class Main extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=6bb8a9b6&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=6bb8a9b6&s=${str}`)
    .then((response) => response.json())
    .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    return (
      <main className="container-content">
        <Search searchMovies={this.searchMovies} />
        {this.state.movies.length ? (
          <Movies movies={this.state.movies} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }
}

export { Main };
