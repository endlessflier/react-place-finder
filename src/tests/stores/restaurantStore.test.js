import { RestaurantStore } from '@/stores/restaurantStore';
import { findNearbyPlaces, getAutoComplete, searchPlaces } from '@/api';
import { saveFavoriteRestaurant } from '@/utils';
import { orderBy } from 'lodash';

jest.mock('@/api', () => ({
  findNearbyPlaces: jest.fn(),
  getAutoComplete: jest.fn(),
  getPlacePhotos: jest.fn(),
  searchPlaces: jest.fn(),
}));

const restaurants = [
  { id: 1, name: 'Restaurant 1', rating: 4.5, favorite: false },
  { id: 2, name: 'Restaurant 2', rating: 3.0, favorite: true },
];

describe('RestaurantStore', () => {
  let store;

  beforeEach(() => {
    store = new RestaurantStore();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('setRestaurantList', () => {
    it('should sort the restaurant list by the given key and direction', () => {
      store.restaurants = restaurants;
      store.setSort('favorite', 'asc');
      store.setRestaurantList(store.restaurants);
      expect(store.restaurants[0].id).toBe(1);
      expect(store.restaurants[1].id).toBe(2);
    });
  });

  describe('findNearbyRestaurants', () => {
    it('should call the findNearbyPlaces function with the correct parameters', async () => {
      await store.findNearbyRestaurants({ lat: 35.6646782, lng: 139.7378198 });
      expect(findNearbyPlaces).toHaveBeenCalledWith(
        { lat: 35.6646782, lng: 139.7378198 },
        'restaurant',
        1000,
      );
    });
  });

  describe('fetchAutoComplete', () => {
    it('should call the getAutoComplete function with the correct parameters', async () => {
      await store.fetchAutoComplete({ lat: 35.6646782, lng: 139.7378198 });
      expect(getAutoComplete).toHaveBeenCalledWith(
        { lat: 35.6646782, lng: 139.7378198 },
        'restaurant',
        1000,
      );
    });
  });

  describe('fetchRestaurantList', () => {
    it('should call the searchPlaces function with the correct parameters and set the restaurant list', async () => {
      searchPlaces.mockResolvedValue(restaurants);
      await store.fetchRestaurantList();
      expect(store.restaurants).toStrictEqual(
        orderBy(restaurants, store.sortKey, store.sortDirection),
      );
    });

    it('should select a random restaurant if isRandomSelect is true', async () => {
      searchPlaces.mockResolvedValue(restaurants);
      const spy = jest.spyOn(store, 'selectRandomRestaurant');
      await store.fetchRestaurantList(true);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('setFavoriteRestaurant', () => {
    it('should update the favorite status of a restaurant in the list', () => {
      store.restaurants = restaurants;
      const id = 1;
      const isFavorite = true;
      store.setFavoriteRestaurant(id, isFavorite);
      expect(store.restaurants[0].favorite).toBe(isFavorite);
    });
  });
});
