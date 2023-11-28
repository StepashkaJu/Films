import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all", //по умолчанию ищем все типы all
  };

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  }; //эвент на ввод в строке поиска

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  }; // эвент на поиск фильма по нажатию клавиши

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.value }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type); //мы дожны вызывать эту функцию поиска с фильтрацией только в тот момент, когда у нас изменился ключ type, поэтому обновление state это функция, по завершении которой вызыввается callback на поиск по фильтру
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Search"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={this.handleSearch}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn"
            color="deep-purple lighten-1"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
          <div className="radioButtons">
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                value="all"
                onChange={this.handleFilter}
                checked={this.state.type === "all"} // полe checked либо true, либо false. если в state состояние all, то будут выполняться действия из соответствующего input
              />
              <span>All type</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                value="movie"
                onChange={this.handleFilter}
                checked={this.state.type === "movie"}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                value="series"
                onChange={this.handleFilter}
                checked={this.state.type === "series"}
              />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
export { Search };
