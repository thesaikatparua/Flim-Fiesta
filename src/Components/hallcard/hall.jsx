import React from 'react';
import { useParams, Link } from "react-router-dom";
import "./hall.css";
import DirectionsIcon from '@mui/icons-material/Directions';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import "../../media query/Cinemahallres.css";

const Hall = (props) => {
  const { id } = useParams();

  return (
    <>
      <div className="hall">
        <div className="hall-left">
            <h3>{props.hallName}</h3>
            <p>{props.hallAddress}</p>
        </div>
        <div className="time-table">
            <Link to={`/movie/${id}/booking/ticket`} style={{textDecoration:"none"}}>
              <div className="time">{props.firstShow}</div>
            </Link>
            <Link to={`/movie/${id}/booking/ticket`} style={{textDecoration:"none"}}>
              <div className="time">{props.secondShow}</div>
            </Link>
            <Link to={`/movie/${id}/booking/ticket`} style={{textDecoration:"none"}}>
              <div className="time">{props.thirdShow}</div>
            </Link>
        </div>
        <div className="hall-right">
           <Link to={`/movie/${id}/booking/food`} style={{textDecoration:"none", color:"black"}}><FastfoodIcon style={{fontSize:"30px"}}/></Link>
          <Link to={props.location} target="_blank"><DirectionsIcon style={{marginTop:"0.5rem", color:"rgb(241, 70, 70)"}}/></Link> 
        </div>
      </div>

    
    </>
  )
}

export default Hall;
