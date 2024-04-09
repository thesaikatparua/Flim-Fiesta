import React, { useState } from "react";
import { useQuery } from "react-query";
import Cards from "../card/Card";
import "./Search.css";

const fetchMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=b935b5ca8bde9733059fef48810c9af7&language=en-US`
  );
  const data = await response.json();
  return data.results;
};

const Search = () => {
  const { data: movies, isLoading, error } = useQuery("movies", fetchMovies);

  const [query, setQuery] = useState("");
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = () => {
    const filteredArray = movies.filter((movie) =>
      movie.original_title.toLowerCase().includes(query.toLowerCase())
    );
    setMovieSearch(filteredArray);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="movie-search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            style={{ color: "black" }}
            placeholder="Search here"
            value={query}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      
          {movieSearch.length === 0 ? (
            <div>No results found</div>
          ) : (
            movieSearch.map((movie) => (
              <Cards key={movie.id} movie={movie} />
            ))
          )}
    </>
  );
};

export default Search;
