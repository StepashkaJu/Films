function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props; //деструтуризация с переименованием для удобства без заглавных букв
  return (
    <div id ={id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={poster} alt="movie poster" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}</span>
        <p>
          {type}, {year}
        </p>
      </div>
    </div>
  );
}

export { Movie };
