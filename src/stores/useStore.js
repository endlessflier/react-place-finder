import { createContext, useContext } from 'react';
import { RestaurantStore } from './restaurantStore';

const StoreContext = createContext(new RestaurantStore());

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('You have forgot to use StoreProvider, shame on you.');
  }
  return store;
};
