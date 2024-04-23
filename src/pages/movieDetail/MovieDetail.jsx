import React from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Moviemodal from "./MovieModal";

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
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
          alt="movie poster"
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
              alt="movie poster"
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
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
                  <span key={genre.id} className="movie__genre">
                    {genre.name}
                  </span>
                ))}
            </div>
            <div className="movie-trailer">
              <Moviemodal/>
            </div>
          </div>

          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
            <div className="button-container">
              <Link
                to={`/movie/${id}/booking`}
                target="_blank"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <p>Book tickets</p>
              </Link>
            </div>
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
  );
};

export default Movie;
