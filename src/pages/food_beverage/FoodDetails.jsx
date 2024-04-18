import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../data/foodApi";
import Foodcard from "../../Components/foodcard/Foodcard";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "./FoodDetails.css";
import { useQuery } from "react-query";

const FoodDetails = () => {
  const [selectedFoods] = useState([]);
  const [foodPrice] = useState(100);//food 
  const [isData, setIsData]=useState(data);

  const { id } = useParams();

  const { data: ticket, isLoading, isError } = useQuery(
    ["movie", id],
    async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const filterItem = (category) => {
    const updatedList = data.filter((item) => {
      return item.category === category;
    });
    setIsData(updatedList);
  };


  const getTotalPrice = () => {
    return selectedFoods.length * foodPrice;
  };

  const convFee = () => {
    return selectedFoods.length * 25;
  };

  const gst = () => {
    return selectedFoods.length * 4.5;
  };

  const grandTotal = () => {
    return getTotalPrice() + convFee() + gst();
  };

  return (
    <>
      <div className="food-container">
        <div className="food-left">
          <div className="btn-group">
            <button className="btn-item"  onClick={()=>setIsData(data)}>All</button>
            <button className="btn-item"  onClick={()=>filterItem("Sandwich")}>Sandwich</button>
            <button className="btn-item"  onClick={()=>filterItem("Popcorn")}>Popcorn</button>
            <button className="btn-item"  onClick={()=>filterItem("Burger")}>Burger</button>
            <button className="btn-item"  onClick={()=>filterItem("Drinks")}>Beverage</button>
          </div>
          <div className="food-list">
            <div className="food-item">
              {isData.map((item, index) => {
                return (
                  <Foodcard
                    key={index}
                    imgLink={item.image}
                    nameLink={item.food}
                    priceLink={item.price}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side food booking start */}
        <div className="food-right">
          <h3>Food Booking summary</h3>
          <hr width="100%" size="2"></hr>
          <div className="food-detail">
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
                  {ticket ? ticket.vote_average : ""} <i className="fas fa-star" />
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
          <div className="food-info">
            <h5>Food Info</h5>
            <p>EXECUTIVE</p>
            <button id="button">{selectedFoods.length}</button>
          </div>

          <hr width="100%" size="2"></hr>

          <div className="ticket-info">
            <h5>Foods</h5>
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

          <Link  to={`/movie/${id}/booking/food`} style={{ textDecoration: "none", cursor: "pointer" }} ><button id="proceed">Proceed</button></Link>
        </div>
        {/* food booking right end */}
      </div>
    </>
  );
};

export default FoodDetails;
