import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import App from '@/App';
import { useStore, StoreContext } from '@/stores/useStore';

describe('App', () => {
  it('renders the app header', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MemoryRouter>,
    );
    const appTitle = screen.getByText('Restaurant Finder');
    expect(appTitle).toBeInTheDocument();
  });

  it('renders the HomePage component when the user navigates to the root URL', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MemoryRouter>,
    );
    const homePageElement = screen.getByTestId('home-page');
    expect(homePageElement).toBeInTheDocument();
  });

  it('renders the LoadingIndicator component when isLoading is true', () => {
    const stores = useStore();
    stores.setIsLoading(true);

    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider>
          <StoreContext.Provider value={stores}>
            <App />
          </StoreContext.Provider>
        </ThemeProvider>
      </MemoryRouter>,
    );

    const loadingIndicatorElement = screen.getByTestId('loading-indicator');
    expect(loadingIndicatorElement).toBeInTheDocument();
  });
});
