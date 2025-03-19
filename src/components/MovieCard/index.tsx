import { useEffect, useState } from "react";
import "../../App.css";
import "./styles.css";
import { Movie } from "types/Movie";
import axios from "axios";
import { BASE_URL, TOKEN } from "util/requests";

const MovieCard = () => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    axios
      .get(BASE_URL + "/3/trending/movie/day?language=en-US", {
        headers: {
          Authorization: TOKEN,
        },
      })
      .then((response) => {
        setMovie(response.data.results[0]);
      });
  }, []);
console.log(movie);
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
        alt=""
      />
      <p className="nowPLayingTitle">{movie?.title}</p>
      <span className="tagContainer">
        <img className="rateStar" src="/images/star.svg" alt="" />
        <p className="rate">{movie?.vote_average}</p>
        <p className="tag">|</p>
        <p className="tag">{movie?.release_date}</p>
      </span>
    </div>
  );
};

export default MovieCard;
