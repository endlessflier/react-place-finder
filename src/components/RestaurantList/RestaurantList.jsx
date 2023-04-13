import React from 'react';
import { observer } from 'mobx-react';
import { Typography } from '@mui/material';
import { useStore } from '@/stores/useStore';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './RestaurentList.css';

const RestaurantList = observer(() => {
  const restaurantStore = useStore();
  const { restaurants, errorMessage } = restaurantStore;

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="restaurant-list-container">
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
});

export default RestaurantList;
