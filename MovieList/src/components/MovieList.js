import Movie from "./Movie.js";
import style from "./MovieList.module.css";

export default function MovieList(props) {
  return (
    <ul className={style["movie-list"]}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
}
