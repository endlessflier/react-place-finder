// Importing the getFavoriteRestaurant function from the utils module
import { getFavoriteRestaurant } from '@/utils';

// Declaring a constant variable for the size of category icons
const CATEGORY_ICONSIZE = 64; // Can be set to 32, 44, 64, 88, or 120

// Defining a function that takes an array of photo objects and returns an array of parsed photo objects
export function parsePhotos(photos) {
  return (
    photos?.map(({ id, classifications, created_at, prefix, suffix, width, height }) => ({
      id,
      createdAt: created_at,
      classifications,
      prefix,
      suffix,
      width,
      height,
    })) || []
  );
}

// Defining a function to parse the opening hours of a restaurant
function parseHours(hours) {
  // Initializing an empty object for regular opening hours
  let regular = {};

  // Declaring a helper function to convert time strings to localized time strings
  const getTimeString = (timeString) => {
    const hours = parseInt(timeString.slice(0, 2));
    const minutes = parseInt(timeString.slice(2, 4));
    const dateObj = new Date();
    dateObj.setHours(hours);
    dateObj.setMinutes(minutes);
    return dateObj.toLocaleTimeString('ja-JP', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  // Parsing and organizing the opening hours into an object
  hours?.regular?.forEach((item) => {
    if (!regular[item.day]) regular[item.day] = [];

    regular[item.day].push({
      open: getTimeString(item.open),
      close: getTimeString(item.close),
    });
  });

  // Returning an object containing the display text, local holiday status, opening now status, and regular opening hours
  return {
    display: hours?.display,
    isLocalHoliday: hours?.is_local_holiday,
    openNow: hours.open_now,
    regular,
  };
}

// Defining a function to parse the location of a restaurant from a geocode object
export function parseGeocodeLocation(obj) {
  const geoCode = obj.geocodes?.main ?? obj.geocodes?.roof ?? {};
  return {
    lat: geoCode.latitude,
    lng: geoCode.longitude,
    addressExtended: obj.location?.address_extended,
    address: obj.location?.formatted_address,
  };
}

// Defining a function to parse a restaurant object
export function parseRestaurant(obj) {
  // Parsing categories and formatting them
  const categories =
    obj.categories?.map(({ id, name, icon }) => ({
      id,
      name,
      icon: icon && `${icon.prefix}${CATEGORY_ICONSIZE}${icon.suffix}`,
    })) ?? [];
  const categoryText = categories.map(({ name }) => name).join(' · ');

  // Returning a parsed restaurant object with various properties
  return {
    id: obj.fsq_id,
    name: obj.name,
    favorite: getFavoriteRestaurant(obj.fsq_id),
    distance: obj.distance,
    location: parseGeocodeLocation(obj),
    categories,
    categoryText,
    description: obj.description,
    email: obj.email,
    website: obj.website,
    hours: parseHours(obj.hours),
    rating: obj.rating && Number((obj.rating / 2).toFixed(1)),
    stats: {
      totalPhotos: obj.stats?.photos,
      totalRatings: obj.stats?.total_ratings,
      totalTips: obj.stats?.total_tips,
    },
    popularity: obj.popularity,
    price: obj.price,
    menu: obj.menu,
    dateClosed: obj.date_closed,
    photos: parsePhotos(obj.photos),
    tips: obj.tips?.map(({ created_at, text }) => ({ createdAt: created_at, text })) || [],
    tastes: obj.tastes || [],
    features: { deliveryService: obj.services?.delivery },
  };
}

// Defining a function to parse an autocomplete object
export function parseAutoComplete(obj) {
  const placeObj = obj.place;
  const textObj = obj.text;
  return {
    id: placeObj.fsq_id,
    name: placeObj.name,
    distance: placeObj.distance,
    location: parseGeocodeLocation(placeObj),
    highlight: textObj.highlight,
    primaryText: textObj.primary,
    secondaryText: textObj.secondary,
  };
}
