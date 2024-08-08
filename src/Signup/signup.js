import React, { useState } from 'react';
import './signup.css'; // Import CSS file for styling
import mexican from './mexican-food.jpg'; // Import image file
import Button from '@mui/material/Button'; // Import MUI Button component
import CssBaseline from '@mui/material/CssBaseline'; // Import MUI CssBaseline component
import TextField from '@mui/material/TextField'; // Import MUI TextField component
import Grid from '@mui/material/Grid'; // Import MUI Grid component
import Box from '@mui/material/Box'; // Import MUI Box component
import Typography from '@mui/material/Typography'; // Import MUI Typography component
import Container from '@mui/material/Container'; // Import MUI Container component
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import MUI ThemeProvider components
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom

const defaultTheme = createTheme(); // Create a default theme

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({}); // State for form errors
  const [showMessage, setShowMessage] = useState(false); // State to show success message
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate form inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.userName) newErrors.userName = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          userName: formData.userName,
          email: formData.email,
          password: formData.password,
        })
      });

      if (response.ok) {
        setShowMessage(true); // Show success message
        setTimeout(() => {
          setShowMessage(false);
          navigate('/Login'); // Navigate to login page after success
        }, 2000);
      } else {
        const data = await response.json();
        setErrors({ apiError: data.message }); // Show API error message
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setErrors({ apiError: 'An error occurred. Please try again later.' });
    }
  };

  return (
    <div>
      <div className='background'>
        <img id='bg' src={mexican} alt="Background" />
      </div>
      <div className='wrappersignup'>
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5" sx={{ color: '#e8c4a9', fontSize: '80px' }}>
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="Name"
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      sx={{ backgroundColor: 'white', borderRadius: '5px', color: 'black' }}
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="userName"
                      value={formData.userName}
                      onChange={handleChange}
                      autoComplete="username"
                      sx={{ backgroundColor: 'white', borderRadius: '5px' }}
                    />
                    {errors.userName && <p className="error-text">{errors.userName}</p>}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address / Phone number"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      sx={{ backgroundColor: 'white', borderRadius: '5px' }}
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      id="password"
                      autoComplete="new-password"
                      sx={{ backgroundColor: 'white', borderRadius: '5px' }}
                    />
                    {errors.password && <p className="error-text">{errors.password}</p>}
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  onClick={handleSubmit}
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: '#e6955c',
                    '&:hover': {
                      backgroundColor: '#e6955c',
                    },
                    color: 'black'
                  }}
                >
                  Sign Up
                </Button>
                {errors.apiError && <p className="error-text">{errors.apiError}</p>}
                {showMessage && <div className="pop-up-message active">Registered successfully!</div>}
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to='/Login' variant="body2" style={{ color: 'white' }}>
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
