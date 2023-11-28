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

  searchMovies = (str, type = "all") => {
    fetch(`http://www.omdbapi.com/?apikey=6bb8a9b6&s=${str}${type !== 'all' ? `&type=${type}` : ""}`) // если у нас выбрат тип вильмов не all, то в запрос добавится Get параметр c type=тот тип, который мы выбираем по радиокнопке и отобразятся нужные фильмы или сериалы, если выбран all, то в запрос просто добавится пустая строка,т.к. all выбран по умолчанию type="all"
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

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
