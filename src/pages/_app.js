import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMode } from 'theme.js';
import store from 'store.js';
import Home from 'src/pages/Login.js';

export default function MyApp() {
  const [theme, colorMode] = useMode();

  const handleToggleColorMode = () => {
    colorMode.toggleColorMode();
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home toggleColorMode={handleToggleColorMode} />
      </ThemeProvider>
    </Provider>
  );
}
