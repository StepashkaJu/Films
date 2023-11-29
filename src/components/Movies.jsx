import { Movie } from "./Movie";
function Movies(props) {
  const { movies = [] } = props; //movie = [] - по умолчанию
  return (
    <div className="movies">
      {movies.length ? (
        props.movies.map((movie) => (
          <Movie key={movie.id} {...movie} /> // после key спред-оператор {...movie}, он сам подтянет остальные props
        ))
      ) : (
        <h3>Nothing found</h3>
      )}
    </div>
  );
}

export { Movies };
