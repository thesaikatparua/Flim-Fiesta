import React, { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "./Foodcard.css";
import "../../media query/Foodres.css";

const Food = (props) => {
  const [order, setOrder] = useState(0);
  const inc = () => {
    setOrder(order + 1);
    props.onOrderChange(order+1); // Call the callback function with updated order value
  };

  const dec = () => {
    setOrder(order - 1);
    props.onOrderChange(order-1); // Call the callback function with updated order value
  };
  return (
    <>
      <div className="food">
        <div className="food-img">
          <img src={props.imgLink} alt="" />
        </div>
        <p id="food-name">{props.nameLink}</p>
        <div className="food-bottom">
          <p>
            <CurrencyRupeeIcon style={{ fontSize: "1rem" }} />
            {props.priceLink}
          </p>
          <div className="add">
            {order === 0 ? " " : <button onClick={dec}>-</button>}
            {
              order ===0 || order >9 ? " ":<span style={{ margin: "5px" }}>{order}</span>
            }
            {order <=9 ? <button onClick={inc}>+</button> : " "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
