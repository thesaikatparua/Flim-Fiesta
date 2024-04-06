import React from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import "./Foodcard.css";

const Food = (props) => {

  return (
   <>
    <div className="food">
      <div className="food-img">
        <img src={props.imgLink} alt="" />
      </div>
      <p id="food-name">{props.nameLink}</p>
      <div className="food-bottom">
        <p><CurrencyRupeeIcon style={{fontSize:"1rem"}}/>{props.priceLink}</p>
        <button>Add</button>
      </div>
    </div>
    
   </>
  )
}

export default Food