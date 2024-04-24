import React from 'react';
import './Offer.css';
import data from "../../data/offerApi"
import Offercard from "../../Components/offercard/Offercard";

const OfferDetails = () => {
  // const [isOffer, setIsOffer] = useState(data); 


  return (
    <>
      <div className="offer-container">
          <div className="offer-list">
            <div className="offer-item">
              {data.map((item, index) => {
                return (
                  <Offercard
                    key={index}
                    picLink={item.pic}
                    offerLink={item.offer}
                  />
                );
              })}
            </div>
          </div>
      </div>
    </>
  );
};

export default OfferDetails;
