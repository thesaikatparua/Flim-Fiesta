import React, { useState, useEffect } from "react";
import "./ticket.css";
import { Link } from "react-router-dom";

const SeatBooking = ({ movieId }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  // const [ticketPrice, setTicketPrice] = useState(10);

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

  return (
    <div className="seat-booking">
      <div className="movie-container">
        <h2>Movie Name</h2>
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
          {Array.from({ length: 14 }, (_, rowIndex) => (
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
                    onClick={() => !isOccupied && handleSeatClick(seatNumber)}
                  ></div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>

      <p className="text">
        <span id="count">{selectedSeats.length}</span> tickets
        {/* seats for a price of $<span id="total">{getTotalPrice()}</span> */}
      </p>

      <div className="book">
        <Link
          to={`/movie/${movieId}/booking/hall`}
          style={{ textDecoration: "none", cursor: "pointer", color: "black" }}
        >
          Book
        </Link>
      </div>
    </div>
  );
};

export default SeatBooking;
