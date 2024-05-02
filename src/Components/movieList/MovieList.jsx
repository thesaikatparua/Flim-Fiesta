import React from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/Card";
import { useQuery } from "react-query";
import "../../media query/Movielistresp.css"

const fetchMovieList = async (type) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=b935b5ca8bde9733059fef48810c9af7&language=en-US`
  );
  const data = await response.json();
  return data.results.slice(0,18);
};

const MovieList = () => {
  const { type } = useParams();
  
  const { data: movieList, isLoading, isError } = useQuery(
    ["movieList", type],
    () => fetchMovieList(type)
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="movie__list">
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
