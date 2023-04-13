import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '@/pages/HomePage/HomePage';
import { mockupStore } from '../mocukup';
import { useStore } from '@/stores/useStore';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme/theme';

jest.mock('@/stores/useStore');

describe('HomePage', () => {
  test('renders top navigation', () => {
    useStore.mockImplementation(() => mockupStore);
    render(
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('top-navigation')).toBeInTheDocument();
  });

  test('renders restaurant list', () => {
    useStore.mockImplementation(() => mockupStore);
    render(
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('restaurant-list')).toBeInTheDocument();
  });

  test('does not render restaurant details page if no data available', () => {
    useStore.mockImplementation(() => mockupStore);
    render(
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>,
    );
    expect(screen.queryByTestId('restaurant-details-page')).not.toBeInTheDocument();
  });
});
