import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "",
  };

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  }; //эвент на ввод в строке поиска

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  }; // эвент на поиск фильма по нажатию клавиши

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
            onClick={() => this.props.searchMovies(this.state.search)}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
export { Search };
