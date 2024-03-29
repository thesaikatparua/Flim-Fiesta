import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MovieList from '../../Components/movieList/MovieList';

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US");
                const data = await response.json();
                setPopularMovies(data.results);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                setError('Error fetching data. Please try again later.');
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {popularMovies.map(movie => (
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
                <MovieList />
                
            </div>
        </>
    );
}

export default Home;
