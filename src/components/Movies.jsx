import { Movie } from "./Movie";
function Movies(props) {
  return (
    <div className="movies">
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          year={movie.year}
          type={movie.type}
          poster={movie.poster}
        /> //либо после key добавить спред-оператор {...movie}, И он сам подтянет остальные props
      ))}
    </div>
  );
}

export { Movies };
