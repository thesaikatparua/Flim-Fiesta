import React from "react";
import { useParams } from "react-router-dom";
import "./Cinemahall.css";
import HallTop from "./hallTab";
import { useQuery } from "react-query";
import Tabmobile from "../../pages/cinemahall/Tabmobile";

const fetchMovieDetail = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b935b5ca8bde9733059fef48810c9af7&language=en-US`
  );
  const data = await response.json();
  return data;
};

const CinemaHall = () => {
  const { id } = useParams();

  const {
    data: poster,
    isLoading,
    isError,
  } = useQuery(["movieDetail", id], () => fetchMovieDetail(id));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      <div className="cinema-hall">
        <div className="banner">
          <div className="movie__name">
            {poster ? poster.original_title : ""}
          </div>
          {/* <div className="movie__tagline">
            {poster ? poster.tagline : ""}
          </div> */}
          <div className="movie__genres">
            {poster && poster.genres
              ? poster.genres.map((genre) => (
                  <span key={genre.id} className="movie__genre">
                    {genre.name}
                  </span>
                ))
              : ""}
          </div>
        </div>
        <hr width="100%" size="2"></hr>
        <HallTop />
        <div className="moviehall_mobile">
          <Tabmobile />
        </div>
      </div>
    </>
  );
};

export default CinemaHall;
