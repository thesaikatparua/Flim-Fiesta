import React from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Moviemodal from "./MovieModal";
import "../../media query/Moviedetailsres.css";

const fetchMovieDetail = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b935b5ca8bde9733059fef48810c9af7&language=en-US&append_to_response=videos`
  );
  const data = await response.json();
  return data;
};

const Movie = () => {
  const { id } = useParams();

  const {
    data: currentMovieDetail,
    isLoading,
    isError,
  } = useQuery(["movieDetail", id], () => fetchMovieDetail(id));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      <div className="movie">
        <div className="movie_intro">
          <img
            className="movie__backdrop"
            src={`https://image.tmdb.org/t/p/original${
              currentMovieDetail ? currentMovieDetail.backdrop_path : ""
            }`}
            alt="movie poster"
          />
        </div>
        <div className="movie_detail">
          <div className="movie_detail_left">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
              alt="movie poster"
            />
          </div>
          <div className="movie_detail_right">
            <div className="movie__detail_right_top">
              <div className="movie-trailer">
                <Moviemodal />
              </div>
              <div className="movie__name">
                <p>
                  {currentMovieDetail ? currentMovieDetail.original_title : ""}
                </p>
              </div>
              <div className="movie__tagline">
                {currentMovieDetail ? currentMovieDetail.tagline : ""}
              </div>
              <div className="movie__rating">
                {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
                <i className="fas fa-star" />
                <span className="movie__voteCount">
                  {currentMovieDetail
                    ? "(" + currentMovieDetail.vote_count + ") votes"
                    : ""}
                </span>
              </div>
              <div className="movie__runtime">
                {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
              </div>
              <div className="movie__releaseDate">
                {currentMovieDetail
                  ? "Release date: " + currentMovieDetail.release_date
                  : ""}
              </div>
              <div className="movie__genres">
                {currentMovieDetail &&
                  currentMovieDetail.genres &&
                  currentMovieDetail.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="movie__genre_list"
                    >
                      {genre.name}
                    </span>
                  ))}
              </div>
            </div>
            <div className="movie__detail_right_bottom">
              <div className="synopsisText">Synopsis</div>
              <div className="overview">
                {currentMovieDetail ? currentMovieDetail.overview : ""}
              </div>
              <Link
                to={`/movie/${id}/booking`}
                target="_blank"
                style={{ textDecoration: "none", cursor: "pointer" }}
                id="book_ticket"
              >
                <button>Book tickets</button>
              </Link>
              <Link
                to={`/movie/${id}/booking`}
                style={{ textDecoration: "none", cursor: "pointer" }}
                id="book_ticket_mobile"
              >
                <button>Book tickets</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="movie__heading">Production companies</div>
        <div className="movie__production">
          {currentMovieDetail &&
            currentMovieDetail.production_companies &&
            currentMovieDetail.production_companies.map((company) =>
              company.logo_path ? (
                <span key={company.id} className="productionCompanyImage">
                  <img
                    className="movie__productionComapany"
                    src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                    alt="production name:"
                  />
                  <span>{company.name}</span>
                </span>
              ) : null
            )}
        </div>
      </div>
    </>
  );
};

export default Movie;
