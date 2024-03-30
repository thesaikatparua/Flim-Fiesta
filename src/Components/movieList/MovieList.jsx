import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/Card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=b935b5ca8bde9733059fef48810c9af7&language=en-US`
      );
      const data = await response.json();
      setMovieList(data.results.slice(0, 10));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [type]);

  return (
    <div className="movie__list">
      {/* <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2> */}
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
