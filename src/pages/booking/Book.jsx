import React,{useState,useEffect} from "react";
import "./Book.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Book = () => {

  const [booking, setBooking] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);                                         

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then(res => res.json())
    .then(data => setBooking(data))
}

  return (
    
    <>
      <div className="movie_book">
        <div className="moviebook_left">
          <div className="trailer">
            <img
              className="movie__backdrop"
              src={`https://image.tmdb.org/t/p/original${booking? booking.poster_path  : ""}`} alt="movie trailer"/>
          </div>
        </div>
        <div className="moviebook_right">
        <Link  to={`/movie/${id}/booking/hall`}  style={{ textDecoration: "none" , "cursor":"pointer"}}><p>proceed</p></Link>
        </div>
      </div>
    </>
  );
};

export default Book;
