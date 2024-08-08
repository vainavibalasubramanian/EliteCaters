import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, Link } from 'react-router-dom';
import img from '../Login/loginimg.jpg';
import axios from 'axios';
const defaultTheme = createTheme();


function Login() {
  const navigate = useNavigate();
  const [name, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success,setSuccess]=useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.get('http://localhost:8080/api/admins');
      const user = response.data.find((user) => user.name === name);
      if (user) {
        if (user.password === password) {
          navigate('/home'); // Redirect to dashboard on successful login
          setError(false)
        } 
        else {
          setError('Invalid username or password');
          setSuccess(false);
        }
      } else {
        setSuccess(false);
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
     
    }
  };


  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage: `url(${img})`,
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'left',
          }}
        />
        <Grid item xs={12} sm={3} md={7} component={Paper} elevation={3} square sx={{ backgroundColor: "#ab988a" }}>
          <Box
            sx={{
              my: 0,
              mx: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <Typography component="h1" variant="h5" sx={{ mt: 15, fontSize: '80px', color: 'black' }}>
             Admin Sign in
            </Typography>
            <Link style={{paddingLeft:'45%' , fontSize:'20px' , color:'black'}} to='/Login'>User?</Link>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, flexDirection: 'column' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="name"
                value={name}
                onChange={(e) => setUserName(e.target.value)}  
                autoComplete="username"
                
                sx={{ backgroundColor: "white", borderRadius: '5px' }}
                error={error.username}
                helperText={error.username ? 'Username is required' : ''}
              />
              <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}

              autoComplete="current-password"
              sx={{ backgroundColor: "white", borderRadius: '5px' }}
              error={error.password}
              helperText={error.password ? 'Password is required' : ''}
            />
            {error && <p className="error">{error}</p>}

            <div style={{ paddingTop: '30px' }}>
              <Link href="#" variant="body2" style={{ color: "black" }}>
                Forgot password?
              </Link>
            </div>
            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 3, mb: 2, backgroundColor: 'black', color: 'white', '&:hover': {
                  backgroundColor: 'black',
                },
              }}
            >
            Sign In
            </Button>
            
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>



  );
}

export default Login;