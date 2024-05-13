import React, { useState } from "react";
import Hall from "../../Components/hallcard/hall";
import data from "../../data/hallData.json";
import DirectionsIcon from "@mui/icons-material/Directions";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import "../../media query/Cinemahallres.css";

const Hallmobile = () => {
  const [val, setVal] = useState("");
  const [arr, setArr] = useState([]);
  const [location, setLocation] = useState([]);

  const changehandle = (e) => {
    setVal(e.target.value);
  };

  const Search = () => {
    const filteredArray = data.filter((item) => {
      return item.hall.toLowerCase().includes(val.toLowerCase());
    });
    const filteredLocation = data.filter((item) => {
      return item.landmark.toLowerCase().includes(val.toLowerCase());
    });
    setArr(filteredArray);
    setLocation(filteredLocation);
  };

  const submitForm = (e) => {
    e.preventDefault();
    Search();
  };

  const allData = data.filter(
    (item) => !arr.includes(item) && !location.includes(item)
  );
  return (
    <>
      <div className="hallbottom_mobile">
        <div className="search_mobile">
          <form onSubmit={submitForm}>
            <input
              type="text"
              placeholder="Search here..."
              style={{ color: "black" }}
              value={val}
              onChange={changehandle}
            />
            <button type="submit" value={Search}>
              <p>Search</p>
            </button>
          </form>
          <div id="icon_mobile">
            <p>
              <FastfoodIcon style={{color:"black"}}/> Food
            </p>
            <p>
              <DirectionsIcon style={{ color: "rgb(241, 70, 70)" }} /> Direction
            </p>
          </div>
        </div>
        {arr.map((item, index) => (
          <Hall
            key={index}
            hallName={item.hall}
            hallAddress={item.address}
            hallLandmark={item.landmark}
            firstShow={item.show1}
            secondShow={item.show2}
            thirdShow={item.show3}
            location={item.Location}
          />
        ))}
        {location.map((item, index) => (
          <Hall
            key={index}
            hallName={item.hall}
            hallAddress={item.address}
            hallLandmark={item.landmark}
            firstShow={item.show1}
            secondShow={item.show2}
            thirdShow={item.show3}
            location={item.Location}
          />
        ))}
        {allData.map((item, index) => (
          <Hall
            key={index}
            hallName={item.hall}
            hallAddress={item.address}
            hallLandmark={item.landmark}
            firstShow={item.show1}
            secondShow={item.show2}
            thirdShow={item.show3}
            location={item.Location}
          />
        ))}
      </div>
    </>
  );
};

export default Hallmobile;
