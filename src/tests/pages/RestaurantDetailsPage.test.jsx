import { render, screen } from '@testing-library/react';
import RestaurantDetailsPage from '@/pages/RestaurantDetailsPage/RestaurantDetailsPage';
import { mockupStore } from '../mocukup';
import { useStore } from '@/stores/useStore';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme/theme';

jest.mock('@/stores/useStore');

describe('RestaurantDetailsPage', () => {
  it('renders restaurant details', () => {
    useStore.mockImplementation(() => mockupStore);
    const restaurant = mockupStore.getSelectedRestaurant;

    render(
      <ThemeProvider theme={theme}>
        <RestaurantDetailsPage />,
      </ThemeProvider>,
    );

    expect(screen.getByText(restaurant.name)).toBeInTheDocument();
    expect(screen.getByText(`${restaurant.rating}`)).toBeInTheDocument();
    expect(screen.getByText(`(${restaurant.stats.totalRatings})`)).toBeInTheDocument();
    expect(screen.getByText('$'.repeat(restaurant.price))).toBeInTheDocument();
    expect(screen.getByText(restaurant.location.addressExtended)).toBeInTheDocument();
    expect(screen.getByText(restaurant.categoryText)).toBeInTheDocument();
    expect(screen.getByText(restaurant.location.address)).toBeInTheDocument();
    expect(screen.getByText('Delivery')).toBeInTheDocument();
    expect(screen.getByText(`${restaurant.distance} m`)).toBeInTheDocument();
    expect(screen.getByText('Menu')).toHaveAttribute('href', restaurant.menu);
    expect(screen.getByText(new URL(restaurant.website).hostname)).toHaveAttribute(
      'href',
      restaurant.website,
    );
    expect(screen.getByText(restaurant.tips[0].text)).toBeInTheDocument();
    expect(screen.getByText(restaurant.tips[1].text)).toBeInTheDocument();
  });
});
