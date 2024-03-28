import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Book.css";
import Ticket from "./ticket";

const Book = () => {
  const [ticket, setTicket] = useState();
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
      .then((data) => setTicket(data));
  };

  return (
    <>
      <div className="movie_book">
        <div className="moviebook_left">
          <Ticket movieId={id} />
        </div>
      </div>
    </>
  );
};

export default Book;
