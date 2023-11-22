import { Movie } from "./Movie";
function Movies(props) {
  return (
    <div className="movies">
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          {...movie}
        /> // после key спред-оператор {...movie}, он сам подтянет остальные props
      ))}
    </div>
  );
}

export { Movies };
