export const restaurants = [
  {
    id: '1',
    name: 'Restaurant 1',
    categoryText: 'Test Category',
    location: {
      addressExtended: 'Test Address',
      address: '123 Test Street',
    },
    rating: 4.5,
    price: 2,
    hours: { openNow: false, regular: {} },
    website: 'https://www.test.com',
    menu: 'https://www.test.com/menu',
    stats: { totalRatings: 5 },
    tips: [
      {
        text: 'Test tip 1',
        createdAt: '2022-01-01T00:00:00.000Z',
      },
      {
        text: 'Test tip 2',
        createdAt: '2022-02-01T00:00:00.000Z',
      },
    ],
    distance: 500,
    photos: [],
  },
  {
    id: 2,
    name: 'Restaurant 2',
    categoryText: 'Chinese',
    location: {
      address: '六本木3丁目14-12',
      addressExtended: '456 Elm St',
    },
    rating: 3.5,
    price: 1,
    photos: [],
    menu: '',
    website: '',
    stats: { totalRatings: 5 },
    hours: { openNow: false, regular: {} },
    favorite: true,
    tips: [],
  },
];
export const mockupStore = {
  restaurants: restaurants,
  officeLocation: { lat: 51.5074, lng: 0.1278 },
  selectRestaurant: jest.fn(),
  getSelectedRestaurant: restaurants[0],
  isLoading: false,
  restaurantPhotos: [],
};
