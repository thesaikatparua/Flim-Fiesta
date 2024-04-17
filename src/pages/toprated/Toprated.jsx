import React from "react";
import { useParams } from "react-router-dom";
import Cards from "../../Components/card/Card";
import { useQuery } from "react-query";

const fetchToprated = async (type) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=b935b5ca8bde9733059fef48810c9af7&language=en-US`
  );
  const data = await response.json();
  return data.results;
};

const MovieList = () => {
  const { type } = useParams();
  
  const { data: toprated, isLoading, isError } = useQuery(
    ["toprated", type],
    () => fetchToprated(type)
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="movie__list">
      <div className="list__cards">
        {toprated.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
