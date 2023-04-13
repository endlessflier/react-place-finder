import RestaurantCard from '@/components/RestaurantCard/RestaurantCard';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('RestaurantCard', () => {
  const restaurant = {
    id: '1',
    name: 'Test Restaurant',
    categoryText: 'Test Category',
    location: {
      addressExtended: 'Test Address',
    },
    rating: 3.5,
    price: 2,
    photos: [],
    menu: '',
    website: '',
    stats: {
      totalRatings: 100,
    },
    hours: {
      openNow: true,
    },
    features: {
      deliveryService: true,
    },
    favorite: false,
  };

  it('should render restaurant name, rating, and location', () => {
    render(<RestaurantCard restaurant={restaurant} />);
    expect(screen.getByText('Test Restaurant')).toBeInTheDocument();
    expect(screen.getByText('3.5')).toBeInTheDocument();
    expect(screen.getByText('(100)')).toBeInTheDocument();
    expect(screen.getByText('Test Address')).toBeInTheDocument();
  });
});
