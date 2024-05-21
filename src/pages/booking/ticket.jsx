import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ticket.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useQuery } from "react-query";
import "../../media query/Ticketsummresp.css"
import Swal from 'sweetalert2';

const SeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketPrice] = useState(100);

  const { id } = useParams();

  const {
    data: ticket,
    isLoading,
    isError,
  } = useQuery(["movie", id], async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const handleSeatClick = (seatIndex) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatIndex)) {
        return prevSelectedSeats.filter((index) => index !== seatIndex);
      } else {
        return [...prevSelectedSeats, seatIndex];
      }
    });
  };

  const getTotalPrice = () => {
    return selectedSeats.length * ticketPrice;
  };

  const convFee = () => {
    return selectedSeats.length * 25;
  };

  const gst = () => {
    return selectedSeats.length * 4.5;
  };

  const grandTotal = () => {
    return getTotalPrice() + convFee() + gst();
  };

  const bookTicket = () => {
    Swal.fire({
      title: 'This is a Official Alert message',
      text: 'Thank for ticket booking',
      confirmButtonText: 'OK'
    });
  };
  const seatBook=()=>{
    Swal.fire({
      title: 'This is a Official Alert message',
      text: 'Please book your seat',
      confirmButtonText: 'OK'
    });
  }

  return (
    <>
      <div className="ticket-booking">
        {/* left side seat booking page start  */}
        <div className="seat-booking">
          <div className="movie-container">
            <h2>This is Show Time</h2>
          </div>

          <div className="status">
            <div className="item">Available</div>
            <div className="item">Booked</div>
            <div className="item">Selected</div>
          </div>

          <div className="container">
            <div className="screen"></div>
            <div className="row1">
              {/* Render seats dynamically */}
              {Array.from({ length:15}, (_, rowIndex) => (
                <div key={rowIndex} className="seat-row">
                  {Array.from({ length:30 }, (_, seatIndex) => {
                    const seatNumber = rowIndex *30 + seatIndex + 1; // Corrected seat numbering calculation
                    const isOccupied = [
                      15, 16, 23, 24, 25, 32, 33, 40, 41,
                    ].includes(seatNumber);
                    const isSelected = selectedSeats.includes(seatNumber);
                    return (
                      <div
                        key={seatIndex}
                        className={`seat ${isOccupied ? "occupied" : ""} ${
                          isSelected ? "selected" : ""
                        }`}
                        onClick={() =>
                          !isOccupied && handleSeatClick(seatNumber)
                        }
                      ></div>
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="row2">
              {/* Render seats dynamically */}
              {Array.from({ length:30}, (_, rowIndex) => (
                <div key={rowIndex} className="seat-row">
                  {Array.from({ length:15 }, (_, seatIndex) => {
                    const seatNumber = rowIndex *15 + seatIndex + 1; // Corrected seat numbering calculation
                    const isOccupied = [
                      15, 16, 23, 24, 25, 32, 33, 40, 41,
                    ].includes(seatNumber);
                    const isSelected = selectedSeats.includes(seatNumber);
                    return (
                      <div
                        key={seatIndex}
                        className={`seat ${isOccupied ? "occupied" : ""} ${
                          isSelected ? "selected" : ""
                        }`}
                        onClick={() =>
                          !isOccupied && handleSeatClick(seatNumber)
                        }
                      ></div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* left side seat booking page end */}

        {/* right side booking summary start  */}

        <div className="moviebook_right">
          <h3>Booking summary</h3>
          <hr width="100%" size="2"></hr>
          <div className="movie-detail">
            <div className="detail-left">
              <img
                className="movie__poster"
                id="banner"
                src={`https://image.tmdb.org/t/p/original${
                  ticket ? ticket.poster_path : ""
                }`}
                alt="movie poster"
              />
            </div>
            <div className="detail-right">
              <div className="banner-name">
                {ticket ? ticket.original_title : ""}
              </div>
              <div id="summary">
                <div className="movie__rating">
                  {ticket ? ticket.vote_average : ""}{" "}
                  <i className="fas fa-star" />
                  <span className="movie__voteCount">
                    {ticket ? "(" + ticket.vote_count + ") votes" : ""}
                  </span>
                </div>
                <div className="movie__runtime">
                  {ticket ? ticket.runtime + " mins" : ""}
                </div>
                <div className="movie__releaseDate">
                  {ticket ? "Release date: " + ticket.release_date : ""}
                </div>
              </div>
            </div>
          </div>
          <hr width="100%" size="2"></hr>
          <div className="seat-info">
            <h5>Seat Info</h5>
            <p>EXECUTIVE</p>
            <button className="seat-button">{selectedSeats.length}</button>
          </div>

          <hr width="100%" size="2"></hr>

          <div className="ticket-info">
            <h5>Tickets</h5>
            <div id="payment">
              <p>Sub Total</p>
              <p id="price" style={{ fontSize: "18px" }}>
                <CurrencyRupeeIcon style={{ fontSize: "16px" }} />
                {getTotalPrice()}
              </p>
            </div>
          </div>

          <hr width="100%" size="2"></hr>

          <div className="ticket-info">
            <h5>Payment Info</h5>
            <div id="payment">
              <p>CONV FEE</p>
              <p id="price" style={{ fontSize: "18px" }}>
                <CurrencyRupeeIcon style={{ fontSize: "16px" }} />
                {convFee()}
              </p>
            </div>
            <div id="payment">
              <p>GST</p>
              <p id="price" style={{ fontSize: "18px" }}>
                <CurrencyRupeeIcon style={{ fontSize: "16px" }} />
                {gst()}
              </p>
            </div>
          </div>

          <hr width="100%" size="2"></hr>

          <div className="ticket-info">
            <div id="payment">
              <p>Grand Total</p>
              <p id="price" style={{ fontSize: "18px" }}>
                <CurrencyRupeeIcon style={{ fontSize: "16px" }} />
                {grandTotal()}
              </p>
            </div>
          </div>

          <Link
            to={selectedSeats.length?`/movie/${id}/booking/food`: `/movie/${id}/booking/ticket`}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <button id="proceed" onClick={selectedSeats.length?bookTicket:seatBook}>Proceed</button>
            {/* <button id="proceed">Proceed</button> */}
          </Link>
        </div>
        {/* right side booking summary end*/}
      </div>
    </>
  );
};

export default SeatBooking;
