import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
const API_KEY = process.env.REACT_APP_KEY;
class Main extends React.Component {
  state = {
    movies: [],
    loading: true, //идет загрузка
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false })) //все загрузилось
      .cath((err) => {
        alert(err.message);
        this.setState({ loading: false });
      });
  }

  searchMovies = (str, type = "all") => {
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    ) // если у нас выбрат тип вильмов не all, то в запрос добавится Get параметр c type=тот тип, который мы выбираем по радиокнопке и отобразятся нужные фильмы или сериалы, если выбран all, то в запрос просто добавится пустая строка,т.к. all выбран по умолчанию type="all"
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .cath((err) => {
        alert(err.message);
        this.setState({ loading: false }); 
      }); 
  };

  render() {
    return (
      <main className="container-content">
        <Search searchMovies={this.searchMovies} />
        {this.state.loading ? (
          <Preloader />
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </main>
    );
  }
}

export { Main };
