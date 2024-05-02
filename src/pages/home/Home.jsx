import React from 'react';
import { useQuery } from 'react-query';
import { Link } from "react-router-dom";
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MovieList from '../../Components/movieList/MovieList';
import  "../../media query/Moviesliderres.css";

const fetchPopularMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b935b5ca8bde9733059fef48810c9af7&language=en-US");
    if (!response.ok) {
        throw new Error('Failed to fetch popular movies');
    }
    return response.json();
};

const Home = () => {
    const { data: popularMovies, error, isLoading } = useQuery('popularMovies', fetchPopularMovies);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <div className="poster">
            <div className="home1">
            <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {popularMovies.results.slice(0,5).map(movie => (
                        <Link key={movie.id} style={{ textDecoration: "none", color: "snow" }} to={`/movie/${movie.id}`}>
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path || ''}`} alt={movie?.original_title || ''} />
                            </div>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title">{movie?.original_title || ''}</div>
                                <div className="posterImage__runtime">
                                    {movie?.release_date || ''}
                                    <span className="posterImage__rating">
                                        {movie?.vote_average || ''}
                                        <i className="fa-solid fa-star" />{" "}
                                    </span>
                                </div>
                                <div className="posterImage__description">{movie?.overview || ''}</div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            </div>
            <div className="home2">
            <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {popularMovies.results.slice(0,5).map(movie => (
                        <Link key={movie.id} style={{ textDecoration: "none", color: "snow" }} to={`/movie/${movie.id}`}>
                            <div className="posterImage" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path || ''}` }}>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title">{movie?.original_title || ''}</div>
                                <div className="posterImage__tagline">{movie?.tagline || ''}</div>
                                <div className="posterImage__runtime">
                                    {movie?.release_date || ''}
                                    <span className="posterImage__rating">
                                        {movie?.vote_average || ''}
                                        <i className="fa-solid fa-star" />{" "}
                                    </span>
                                </div>
                                
                            </div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            </div>
            <MovieList />  
            </div>
        </>
    );
}

export default Home;
