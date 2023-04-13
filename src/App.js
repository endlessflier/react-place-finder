import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Stack, ThemeProvider } from '@mui/material';
import HomePage from './pages/HomePage/HomePage';
import { theme } from './theme/theme';
import LoadingIndicator from './components/LoadingIndicator';
import { useStore } from './stores/useStore';
import './App.css';

function App() {
  const { isLoading } = useStore();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} padding={1}>
          <img src="logo192.png" width="40" height="40" alt="" />
          <h1 className="app-title">Restaurant Finder</h1>
        </Stack>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        {isLoading && <LoadingIndicator fullScreen />}
      </div>
    </ThemeProvider>
  );
}

export default observer(App);
