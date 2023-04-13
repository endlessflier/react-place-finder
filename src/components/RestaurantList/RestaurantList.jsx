import React from 'react';
import { Typography } from '@mui/material';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './RestaurentList.css';

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list-container" data-testid="restaurant-list">
      {!!restaurants.length && (
        <>
          <Typography>Restaurant Listings</Typography>
          <Typography>{`${restaurants.length} results`}</Typography>
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </>
      )}
    </div>
  );
};

export default RestaurantList;
