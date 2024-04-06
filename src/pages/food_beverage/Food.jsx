import React from "react";
import Foodcard from "../../Components/foodcard/Foodcard";
import "./Food.css";
import data from "../../data/foodApi";

const Food = () => {
  return (
    <>
      <div className="food-list">
        <div className="food-item">
          {data.map((item, index) => {
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
    </>
  );
};

export default Food;
