import { useTheme, useThemeUpdate } from 'src/themeContext.js';
import { IconButton } from '@mui/material';
import { Brightness2, Brightness7 } from '@mui/icons-material';

const ThemeToggleButton = () => {
  const theme = useTheme();
  const toggleTheme = useThemeUpdate();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <IconButton onClick={handleThemeToggle} color="inherit">
      {theme === 'dark' ? <Brightness7 /> : <Brightness2 />}
    </IconButton>
  );
};

export default ThemeToggleButton;

