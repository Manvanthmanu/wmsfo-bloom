import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { purple } from '@mui/material/colors';s
// import { createTheme } from '@mui/material/styles';
import { amber, grey ,green } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function ButtonAppBar() {
  const outerTheme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      },
      Typography: {
        body1: {
          main: amber[500],
        },
      }
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={outerTheme}>
      <AppBar position="static"  style={{color:"#ffab00"}} >
        
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="body1" component="div" sx={{ flexGrow: 1 }} >
            WMSFO
          </Typography>
          <Button color="inherit" href='login'>Login</Button>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}
