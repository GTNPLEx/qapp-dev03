import { Button } from "@mui/material";
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleLogin = () => {
    // Update this URL to point to your own backend Google OAuth2 URL
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Navbar
          </Typography>

          <Link href="/contacts">
            <Button color="inherit">Contacts</Button>
          </Link>
          <Button color="inherit" startIcon={<GoogleIcon />} onClick={handleLogin}>
            Login with Google
          </Button>

          <IconButton edge="end" color="inherit" onClick={handleThemeToggle}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box>{/* Insert the Contacts component or any other components here */}</Box>
    </ThemeProvider>
  );
};

export default Navbar;
