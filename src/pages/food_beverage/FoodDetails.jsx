import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/foodApi";
import Foodcard from "../../Components/foodcard/Foodcard";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "./FoodDetails.css";
import "../../media query/Foodres.css";
import Swal from 'sweetalert2';

const FoodDetails = () => {

  const [isData, setIsData] = useState(data);
  const [order, setOrder] = useState({});

  const filterItem = (category) => {
    const updatedList = data.filter((item) => item.category === category);
    setIsData(updatedList);
  };

  const handleOrderChange = (food, newOrder) => {
    setOrder({ ...order, [food]: newOrder }); // Update order state with the new order quantity
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    Object.keys(order).forEach((orderedFood) => {
      if (order[orderedFood] > 0) {
        const foodItem = isData.find((item) => item.food === orderedFood);
        if (foodItem) {
          // console.log(foodItem.price);
          // Ensure priceLink is converted to a number before performing arithmetic operations
          totalPrice = totalPrice + foodItem.price * (order[orderedFood]);
        }
      }
    });
    return totalPrice;
  };
  
  const gst = () => {
    return getTotalPrice() * 2;
  };

  const grandTotal = () => {
    return  gst();
  };

  const itemSelect=()=>{
    Swal.fire({
      title: 'This is a Official Alert message',
      text: 'Enjoy Your Day!!!',
      confirmButtonText: 'OK'
    });
  }
  const itemNotSelect=()=>{
    Swal.fire({
      title: 'This is a Official Alert message',
      text: 'You are not add any item',
      confirmButtonText: 'OK'
    });
  }

  return (
    <div className="food-container">
      <div className="food-left">
        <div className="btn-group">
          <button className="btn-item" onClick={() => setIsData(data)}>
            All
          </button>
          <button className="btn-item" onClick={() => filterItem("Sandwich")}>
            Sandwich
          </button>
          <button className="btn-item" onClick={() => filterItem("Popcorn")}>
            Popcorn
          </button>
          <button className="btn-item" onClick={() => filterItem("Burger")}>
            Burger
          </button>
          <button className="btn-item" onClick={() => filterItem("Drinks")}>
            Beverage
          </button>
        </div>
        <div className="food-list">
          <div className="food-item">
            {isData.map((item, index) => (
              <Foodcard
                key={index}
                imgLink={item.image}
                nameLink={item.food}
                priceLink={item.price}
                onOrderChange={(newOrder) =>
                  handleOrderChange(item.food, newOrder)
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div className="food-right">
        <h3>Food Booking summary</h3>
        <hr width="100%" size="2" />
        <div className="food-detail">
          <div className="food-info">
            <h5>Food Info</h5>
            {Object.keys(order).map((orderedFood, index) => (
              order[orderedFood] === 0 ? " " : (
                <button key={index}>{`${orderedFood}: ${order[orderedFood]}`}</button>
              )
            ))}
          </div>
        </div>
        <hr width="100%" size="2" />
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
          {
            getTotalPrice()
            ?
            <Link  to={`/movie/:id/booking/food`} style={{ textDecoration: "none", cursor: "pointer" }} ><button id="proceed" onClick={itemSelect}>Proceed</button></Link>
            :
            <Link  to={`/movie/:id/booking/food`} style={{ textDecoration: "none", cursor: "pointer" }} ><button id="proceed" onClick={itemNotSelect}>Proceed</button></Link>
            }
         
      </div>
    </div>
  );
};

export default FoodDetails;
