



import { Route, Navigate, BrowserRouter, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LandingPage from './pages/landing-page/LandingPage';
import Marketplace from './pages/marketplace/Marketplace';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Layout from './components/layout/Layout';
import { selectIsAuthenticated } from './store/selectors/authSelectors';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { selectIsDarkMode } from './store/selectors/themeSelector';
import { themeSettings } from './theme';

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

const darkMode = useSelector(selectIsDarkMode);
const theme = useMemo(()=> createTheme(themeSettings(darkMode? "dark": "light")), [darkMode])


  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route element={<Layout />}>
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/" element={<Navigate to="/marketplace" replace />} />
          </Route>
        ) : (
          <React.Fragment>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </React.Fragment>
        )}
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
