import { getFavoriteRestaurant } from '@/utils';

const CATEGORY_ICONSIZE = 64; //  32, 44, 64, 88, or 120

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

function parseHours(hours) {
  let regular = {};

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

  hours?.regular?.forEach((item) => {
    if (!regular[item.day]) regular[item.day] = [];

    regular[item.day].push({
      open: getTimeString(item.open),
      close: getTimeString(item.close),
    });
  });

  return {
    display: hours?.display,
    isLocalHoliday: hours?.is_local_holiday,
    openNow: hours.open_now,
    regular,
  };
}

export function parseGeocodeLocation(obj) {
  const geoCode = obj.geocodes?.main ?? obj.geocodes?.roof ?? {};
  return {
    lat: geoCode.latitude,
    lng: geoCode.longitude,
    addressExtended: obj.location?.address_extended,
    address: obj.location?.formatted_address,
  };
}
export function parseRestaurant(obj) {
  const categories =
    obj.categories?.map(({ id, name, icon }) => ({
      id,
      name,
      icon: icon && `${icon.prefix}${CATEGORY_ICONSIZE}${icon.suffix}`,
    })) ?? [];
  const categoryText = categories.map(({ name }) => name).join(' · ');

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
