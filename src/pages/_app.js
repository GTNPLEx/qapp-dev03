import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import store from 'store.js';
import Home from 'src/pages/Home.js';
import Login from 'src/pages/Login.js';
import Profile from 'src/pages/Profile.js';
import { useMode } from 'theme.js';
import Navbar from 'src/components/Navbar.js';

const App = () => {
  const [user, setUser] = useState(null);
  const [currentTheme, setCurrentTheme] = useState(createTheme());
  const [themeMode, setThemeMode] = useMode();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/auth/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        });

        if (response.status === 200) {
          const { user } = await response.json();
          setUser(user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log(error);
        setUser(null);
      }
    };

    getUser();
  }, []);

  const handleToggleColorMode = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme.palette.mode === 'dark' ? createTheme() : createTheme({ palette: { mode: 'dark' } })
    );
  };

  const authenticated = !!user; // Check if user is authenticated

  const renderRoutes = () => {
    if (authenticated) {
      return (
        <>
          <Home />
          <Profile />
        </>
      );
    } else {
      return <Login />;
    }
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Navbar user={user} toggleColorMode={handleToggleColorMode} />
        {renderRoutes()}
      </ThemeProvider>
    </Provider>
  );
};

export default App;
