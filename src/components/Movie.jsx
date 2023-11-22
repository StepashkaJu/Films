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
        {
            poster ==='N/A' ? <img className="activator" src={`"https://via.placeholder.com/200x80/258DC8/E0F6FD?text=${title}"`} alt="movie poster" /> : <img className="activator" src={poster} alt="movie poster" />
        }
        
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
