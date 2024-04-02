import React from 'react';
import { Link } from 'react-router-dom';

import classes from './foodcart.css';
export default function Foodcart({ foods }) {
  return (
    <ul className={classes.list}>
      {foods.map(food => (
        <link key={food.id}>
          <Link to={`/food/{food.id}`}></Link>
      }
            <img
              className={classes.image}
              src={`{food.imageUrl}`}
              alt={food.name}
            />
            </link>
          </ul>
      )
      