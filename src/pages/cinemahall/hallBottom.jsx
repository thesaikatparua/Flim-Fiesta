import React, { useState } from "react";
import Hall from "./hall";
import "./hallBottom.css";
import data from "../../data/hallData.json";
import DirectionsIcon from '@mui/icons-material/Directions';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const HallBottom = () => {
  const [val, setVal] = useState("");
  const [arr, setArr]= useState([]);
  const [location, setLocation]= useState([]);

  const changehandle = (e) => {
    setVal(e.target.value);
  }

  
const Search=()=>{
  const filteredArray=data.filter((item)=>{
    return item.hall.toLowerCase().includes(val.toLowerCase());
  })
  const filteredLocation=data.filter((item)=>{
    return item.landmark.toLowerCase().includes(val.toLowerCase());
  })
  setArr(filteredArray);
  setLocation(filteredLocation);
}

const submitForm=(e)=>{
  e.preventDefault();
  Search();
}

const allData= data.filter(item => !arr.includes(item) && !location.includes(item));

  return (
    <>
      <div>
        <div className="search">
          <form onSubmit={submitForm}>
            <input type="text" placeholder="Search here..." style={{color:"black"}}value={val} onChange={changehandle} />
            <button type="submit" value={Search}>Search</button>
          </form>
          <div id="icon">
            <p><FastfoodIcon /> Food</p>
            <p><DirectionsIcon style={{ color: "rgb(241, 70, 70)" }} /> Direction</p>
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
        {/* {console.log()} */}
      </div>
    </>
  );
};

export default HallBottom;
