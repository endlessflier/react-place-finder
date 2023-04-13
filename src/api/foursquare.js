import { parseAutoComplete, parsePhotos, parseRestaurant } from '@/api/dataParser';
import * as fetchApi from './fetch';

const FOURSQUARE_API_MAIN_URL = 'https://api.foursquare.com/v3';
const PLACE_DETAIL_FIELDS =
  'fsq_id,name,geocodes,distance,location,categories,description,email,website,hours,rating,stats,popularity,price,menu,date_closed,photos,tips,tastes,features';

function generateRandomSessionToken(length = 32) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from(
    { length },
    () => characters[Math.floor(Math.random() * characters.length)],
  ).join('');
}

export const getPlacePhotos = (placeId, classifications = '') => {
  const searchParams = new URLSearchParams({
    fsq_id: placeId,
    // classifications,
    limit: 50,
  }).toString();
  return fetchApi
    .get(`${FOURSQUARE_API_MAIN_URL}/places/${placeId}/photos?${searchParams}`)
    .then((data) => parsePhotos(data));
};

export const searchPlaces = (nearbyLocation, query, radius, categoryId, limit = 50) => {
  let session_token = generateRandomSessionToken();
  const searchParams = new URLSearchParams({
    query,
    ll: `${nearbyLocation.lat},${nearbyLocation.lng}`,
    radius,
    fields: PLACE_DETAIL_FIELDS,
    categories: `${categoryId}`,
    limit,
    session_token,
  }).toString();

  return fetchApi
    .get(`${FOURSQUARE_API_MAIN_URL}/places/search?${searchParams}`)
    .then((data) => data)
    .then((data) => data.results.map(parseRestaurant));
};

export const findNearbyPlaces = async (nearbyLocation, query, radius, limit = 50) => {
  const searchParams = new URLSearchParams({
    query,
    ll: `${nearbyLocation.lat},${nearbyLocation.lng}`,
    radius,
    fields: PLACE_DETAIL_FIELDS,
    limit,
  }).toString();
  return fetchApi
    .get(`${FOURSQUARE_API_MAIN_URL}/places/nearby?query=${searchParams}`)
    .then((data) => data.results.map(parseRestaurant));
};

export const getAutoComplete = async (nearbyLocation, query, radius, limit = 50) => {
  if (query?.length < 3) return [];
  let sessionToken = generateRandomSessionToken();
  const searchParams = new URLSearchParams({
    query,
    types: 'place,address',
    ll: `${nearbyLocation.lat},${nearbyLocation.lng}`,
    radius: radius,
    limit,
    session_token: sessionToken,
  }).toString();
  return fetchApi
    .get(`${FOURSQUARE_API_MAIN_URL}/autocomplete?${searchParams}`)
    .then((data) => data.results.map(parseAutoComplete));
};
