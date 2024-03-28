import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./cinemaHall.css";
import HallTop from "./hallTop";



const CinemaHall = () => {
  const [poster, setPoster] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setPoster(data));
  };

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
                  <>
                    <span className="movie__genre" id={genre.id}>
                      {genre.name}
                    </span>
                  </>
                ))
              : ""}
          </div>
          
        </div>
        <hr width="100%" size="2"></hr>
        <HallTop />
        
      </div>
    </>
  );
};

export default CinemaHall;
