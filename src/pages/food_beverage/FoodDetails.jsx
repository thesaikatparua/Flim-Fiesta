import React, { useState } from "react";
import data from "../../data/foodApi";
import Foodcard from "../../Components/foodcard/Foodcard";
import "./FoodDetails.css";

const FoodDetails = () => {

  const [isData, setIsData]=useState(data);

  const filterItem = (category) => {
    const updatedList = data.filter((item) => {
      return item.category === category;
    });
    setIsData(updatedList);
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
        <div className="food-right"></div>
      </div>
    </>
  );
};

export default FoodDetails;
