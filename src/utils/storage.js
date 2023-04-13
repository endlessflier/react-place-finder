const FaboriteRestaurantKey = 'favorite_restaurants';

export const getFavoriteRestaurantList = () => {
  return JSON.parse(localStorage.getItem(FaboriteRestaurantKey)) || [];
};

export const saveFavoriteRestaurant = (restanratntId, isFavorite) => {
  let restaurants = getFavoriteRestaurantList();
  restaurants = restaurants.filter((id) => id !== restanratntId);
  if (isFavorite) restaurants = [restanratntId, ...restaurants];
  localStorage.setItem(FaboriteRestaurantKey, JSON.stringify(restaurants));
};

export const getFavoriteRestaurant = (restanratntId) => {
  const restaurants = getFavoriteRestaurantList();
  return restaurants.includes(restanratntId);
};

export const removeFavoriteRestaurants = () => {
  return localStorage.removeItem(FaboriteRestaurantKey);
};
