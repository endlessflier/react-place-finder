import { findNearbyPlaces, getAutoComplete, getPlacePhotos, searchPlaces } from '@/api';
import { RESTAURANT_CATEGORY_ID } from '@/utils/constant';
import { saveFavoriteRestaurant } from '@/utils';
import { orderBy } from 'lodash';
import { action, computed, makeObservable, observable, reaction } from 'mobx';

export class RestaurantStore {
  restaurants = [];
  allPhotos = {};
  radius = 1000;
  searchTerm = '';
  isLoading = false;
  selectedRestaurant = null;
  officeLocation = { lat: 35.6646782, lng: 139.7378198 }; // Latitude, Longitude;
  sortKey = 'favorite';
  sortDirection = 'desc';

  constructor() {
    makeObservable(this, {
      // NOTE: Sort by
      isLoading: observable,
      setIsLoading: action,

      restaurants: observable,
      setRestaurantList: action,
      selectedRestaurant: observable,
      selectRandomRestaurant: action,
      setFavoriteRestaurant: action,
      restaurantPhotos: computed,

      allPhotos: observable,
      setPhotos: action,

      sortKey: observable,
      sortDirection: observable,
      setSort: action,

      searchTerm: observable,
      setSearchTerm: action,
    });
    this.fetchRestaurantList(true);
    this.disposeReloadPhotosReaction = reaction(
      () => [this.selectedRestaurant],
      () => this.fetchAllPhotos(this.selectedRestaurant?.id),
    );
  }

  setIsLoading(value) {
    this.isLoading = value;
  }

  selectRandomRestaurant() {
    if (this.restaurants.length) {
      const randomIndex = Math.floor(Math.random() * this.restaurants.length);
      this.selectedRestaurant = this.restaurants[randomIndex];
    }
  }

  setSort(key, direction) {
    this.sortKey = key;
    this.sortDirection = direction;
  }

  setSearchTerm(searchText) {
    this.searchTerm = searchText;
  }

  selectRestaurant(restaurant) {
    this.selectedRestaurant = restaurant;
  }

  get getRestaurants() {
    return this.restaurants;
  }

  get getSelectedRestaurant() {
    return this.selectedRestaurant;
  }

  setRestaurantList(restaurants) {
    this.restaurants = orderBy(restaurants, this.sortKey, this.sortDirection);
  }

  setFavoriteRestaurant(id, isFavorite) {
    const restaurants = this.restaurants.map((restaurant) =>
      restaurant.id === id ? { ...restaurant, favorite: isFavorite } : restaurant,
    );
    saveFavoriteRestaurant(id, isFavorite);
    this.setRestaurantList(restaurants);
  }

  async findNearbyRestaurants(nearbyLocation, query = 'restaurant') {
    return findNearbyPlaces(nearbyLocation, query, this.radius);
  }

  async fetchAutoComplete(nearbyLocation) {
    return getAutoComplete(nearbyLocation, 'restaurant', this.radius);
  }

  async fetchRestaurantList(isRandomSelect = false) {
    try {
      this.isLoading = true;
      const restaurants = await searchPlaces(
        this.officeLocation,
        this.searchTerm,
        this.radius,
        RESTAURANT_CATEGORY_ID,
      );
      this.setRestaurantList(restaurants);
      if (isRandomSelect) this.selectRandomRestaurant();
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  get restaurantPhotos() {
    if (this.selectedRestaurant) {
      return this.allPhotos[this.selectedRestaurant.id] || [];
    }
    return null;
  }

  setPhotos(placeId, placePhotos) {
    this.allPhotos[placeId] = placePhotos;
  }

  async fetchAllPhotos(placeId) {
    if (placeId) {
      try {
        this.isLoading = true;
        const photos = await getPlacePhotos(placeId);
        this.setPhotos(placeId, photos);
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    }
  }

  dispose() {
    // TBD
    // this.disposeReloadPhotosReaction();
  }
}
