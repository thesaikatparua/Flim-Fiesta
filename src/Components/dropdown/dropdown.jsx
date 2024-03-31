import React from "react";
import "./dropdown.css";
import { Link } from "react-router-dom";
function dropdown() {
  return (
    <div className="dropdown">
      <div className="dropdown-btn"></div>
      <span className="fas fa-caret-down"></span>
      <div className="dropdown content"></div>
      <div className="dropdown item"></div>
      Kolkata
      <div className="dropdown item"></div>
      Hyderabad
      <div className="dropdown item"></div>
      Mumbai
      <div className="dropdown item"></div>
      Delhi
    </div>
  );
}
export default dropdown;
