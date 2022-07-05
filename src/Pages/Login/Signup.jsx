import React from 'react'
// import  fun1 ,{fun2, fun3} from './style.js' 
import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
// import Copyright from '@mui/material/Copyright'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey ,amber} from '@mui/material/colors';



export function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center"  sx={{my:10}}  style={{color:amber[500]}}>
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


export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name= data.get('firstName');
    const email= data.get('email');
    const password= data.get('password');
    const checked= data.get('checked');

    console.log(name,email,password,checked)
    
 
  
  if(email!==null){
    if(password!==null){
      window.location.replace("album")
      
    }
    else{
      console.log('please enter the password')
    }
  }else{
    console.error('enter details')
  }
};


  return (
    <ThemeProvider theme={outerTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:'black',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square  style={{background:grey[900]}}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1,bgcolor:grey[700]}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5"  style={{color:amber[500]}}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 ,mx:5  }} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  style={{ background:'#616161',color:amber[500]}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  style={{ background:'#616161',color:amber[500]}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  style={{ background:'#616161',color:amber[500]}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  style={{ background:'#616161',color:amber[500]}}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary"  name='checked'  style={{ border:'#616161'}}/>}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                  style={{ color:amber[500]}}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <a href='login'   style={{textDecoration:'none',color:'wheat'}}>
                  Already have an account? Sign in
                </a>
              </Grid>
            </Grid>
          </Box>
          </Box>
        <Copyright sx={{mt:4}}/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}




