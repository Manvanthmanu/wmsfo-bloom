import React from 'react'

// import  fun1 ,{fun2, fun3} from './style.js' 
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
// import { Link } from "react-router-dom";s
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
// import Copyright from '@mui/material/Copyright'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { amber, grey ,green } from '@mui/material/colors';
import { InputProps } from '@mui/material';




export  function Login() {
  
  return (
    <Typography variant="body2" color="text.secondary" align="center"  style={{color:amber[500]}}>
      {'Copyright © '}
      <Link color="inherit" to="https://mui.com/" style={{textDecoration:'none',color:'wheat'}}>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const outerTheme = createTheme({
  palette: {
    primary: {
      main: amber[500],
    },
    secondary:{
      main:'#f5f5f5'
    }
  },
});

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var email= data.get('email')
    var password = data.get('password')
    console.log({
     email,password
     
    });

    if(email==='wmsfo@gmail.com'){
      if(password==='123456'){
        window.location.replace('album')
      }
      else{
        console.log('wrong password')
      }
    }else{
      console.error('wrong email')
    }
  };
  const styles = theme => ({
    multilineColor:{
        color:'red'
    }
});

const classes = styles();
  return (
    <ThemeProvider theme={outerTheme}>
      <Grid container component="main" sx={{ height: '100vh'  }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: 'url(https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:'black',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width:'400px'
            
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{background:grey[900]}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
            style={{background:grey[900]}}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' ,bgcolor:grey[700]}}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" style={{color:amber[500]}}>
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                className='hello'
                label="Email Address"
                name="email"
                inputProps={{ style: { fontFamily: 'Arial', color: amber[400]}}}
                autoComplete="email"
                autoFocus
                style={{ background:'#616161',color:amber[500] ,}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                inputProps={{ style: { fontFamily: 'Arial', color:  amber[400]}}}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                style={{ background:'#616161',color:amber[500]}}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" style={{ border:'#616161'}} />}
                style={{ color:amber[500]}}

                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <a href="/" style={{textDecoration:'none',color:'wheat'}}>
                    Forgot password?
                  </a>
                </Grid>
                <Grid item>
                  <a href='/signup'  style={{textDecoration:'none',color:'wheat'}}>
                    "Don't have an account? Sign Up"
                  </a>
                </Grid>
              </Grid>
            </Box>
          </Box>
              <Login sx={{ mt: 5 }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}



