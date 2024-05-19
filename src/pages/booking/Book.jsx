import React from "react";
import { useParams } from "react-router-dom";
import "./Book.css";
import Ticket from "./ticket";
import { useQuery } from "react-query";


const fetchMovieDetail = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b935b5ca8bde9733059fef48810c9af7&language=en-US`
  );
  const data = await response.json();
  return data;
};

const Book = () => {
  const { id } = useParams();

  const { data: ticket, isLoading, isError } = useQuery(["movie", id], () =>
    fetchMovieDetail(id)
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      <div className="movie_book">
        <div className="moviebook_left">
          <Ticket ticket={ticket} />
        </div>
        {/* <div className="moviebook_mobile">
        <Ticketmobile ticket={ticket} />
        </div> */}
      </div>
    </>
  );
};

export default Book;
