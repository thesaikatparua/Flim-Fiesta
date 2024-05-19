import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useAutocomplete } from '@mui/base/useAutocomplete';
import { styled } from '@mui/system';
import "../../media query/Navbarres.css";


const fetchPopularMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b935b5ca8bde9733059fef48810c9af7&language=en-US");
    if (!response.ok) {
        throw new Error('Failed to fetch popular movies');
    }
    return response.json();
};

const Input = styled('input')(({ theme }) => ({
  width: 200,
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  color: theme.palette.mode === 'light' ? '#000' : '#fff',
}));

const Listbox = styled('ul')(({ theme }) => ({
  width: 200,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  overflow: 'auto',
  maxHeight: 200,
  border: '1px solid rgba(0,0,0,.25)',
  '& li.Mui-focused': {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
}));

export default function UseAutocomplete() {
  const { data: popularMovies, error, isLoading } = useQuery('popularMovies', fetchPopularMovies);

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: popularMovies ? popularMovies.results.map(movie => ({ title: movie.original_title, id: movie.id })) : [],
    getOptionLabel: (option) => option.title,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div {...getRootProps()} >
        <Input className="movie_search_input" placeholder="Search here..." {...getInputProps()}  style={{width:"25rem"}}/>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()} id="search_listbox" style={{width:"25rem"}}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <Link to={`/movie/${option.id}`} style={{ textDecoration: "none", color: "black" }}>
                <p id="link">{option.title}</p>
              </Link>
            </li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}
