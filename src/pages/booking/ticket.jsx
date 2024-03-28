import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ticket.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const SeatBooking = ({ movieId }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketPrice, setTicketPrice] = useState(100);

  useEffect(() => {
    const storedSelectedSeats = JSON.parse(
      localStorage.getItem("selectedSeats")
    );
    if (storedSelectedSeats) {
      setSelectedSeats(storedSelectedSeats);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  }, [selectedSeats]);

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
      <div className="ticket-booking">
        {/* left side seat booking page start  */}
        <div className="seat-booking">
          <div className="movie-container">
            <h2>This is Show Time</h2>
          </div>

          <div class="status">
            <div class="item">Available</div>
            <div class="item">Booked</div>
            <div class="item">Selected</div>
          </div>

          <div className="container">
            <div className="screen"></div>
            <div className="row">
              {/* Render seats dynamically */}
              {Array.from({ length: 52 }, (_, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {Array.from({ length: 8 }, (_, seatIndex) => {
                    const seatNumber = rowIndex * 8 + seatIndex + 1;
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
                </React.Fragment>
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
                  {ticket ? ticket.vote_average : ""} <i class="fas fa-star" />
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
            <button id="button">{selectedSeats.length}</button>
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

          <button id="proceed">Proceed</button>
          
        </div>
        {/* right side booking summary end*/}
      </div>
    </>
  );
};

export default SeatBooking;
