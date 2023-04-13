import React from 'react';
import { render, screen } from '@testing-library/react';
import RestaurantList from '@/components/RestaurantList/RestaurantList';
import { restaurants } from '../mocukup';

describe('RestaurantList', () => {
  it('should render a list of restaurants', () => {
    render(<RestaurantList restaurants={restaurants} />);

    const restaurantListingsTitle = screen.getByText('Restaurant Listings');
    const numResults = screen.getByText('2 results');
    const restaurant1 = screen.getByText('Restaurant 1');
    const restaurant2 = screen.getByText('Restaurant 2');

    expect(restaurantListingsTitle).toBeInTheDocument();
    expect(numResults).toBeInTheDocument();
    expect(restaurant1).toBeInTheDocument();
    expect(restaurant2).toBeInTheDocument();
  });
});
