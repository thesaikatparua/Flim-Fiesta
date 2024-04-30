import React from 'react';
import "./Offercard.css";
import "../../media query/Offerresp.css"

const Offer = (props) => {

  return (
   <>
    <div className="offer">
      <div className="offer-img">
        <img src={props.picLink} alt="" />
      </div>
      {/* <p id="offer-name">{props.offerLink}</p> */}
      {/* <div className="offer-bottom">
        <p> </p>
        <button>View</button>
      </div> */}
    </div>
   </>
  )
}

export default Offer