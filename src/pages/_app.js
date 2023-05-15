import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import store from 'store.js';
import Home from 'src/pages/Login.js';
import { useMode } from 'theme.js';
import '../styles/globals.css';
import 'src/styles/login.module.css';


const theme = createTheme();

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
