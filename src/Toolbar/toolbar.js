import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

// This is the toolbar component for the application
const ToolbarComponent = () => {
  const navigate = useNavigate(); // useNavigate hook to programmatically navigate to different routes

  // Function to navigate to the Custom Order page
  const handleCustomOrder = () => {
    navigate('/Customorder');
  };

  // Function to navigate to the Home page
  const handleHome = () => {
    navigate('/home');
  };

  // Function to navigate to the Login page
  const handleLogin = () => {
    navigate('/Login');
  };

  // Function to navigate to the Signup page
  const handleSignup = () => {
    navigate('/Signup');
  };

  // Function to navigate to the Package List page
  const handlePackage = () => {
    navigate('/PackageList');
  };

  // Function to navigate to the About Us page
  const handleAbout = () => {
    navigate('/AboutUs');
  };

  return (
    <AppBar
      position="static" // Make the AppBar static positioned
      color="transparent" // Make the AppBar transparent
      elevation={0} // Remove the default elevation
      sx={{
        borderBottom: '1px solid #ddd', // Add a bottom border
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Add a custom shadow
        height:'10vh', // Set the height of the AppBar
      }}
    >
      <Toolbar>
        {/* Application title */}
        <h2 style={{ fontStyle: 'italic' }}>EliteCaters</h2>

        {/* Navigation links */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '43%' }}>
          <Typography variant="h6" sx={{ mx: 2, cursor: 'pointer' }} onClick={handleHome}>
            Home
          </Typography>
          <Typography variant="h6" sx={{ mx: 2, cursor: 'pointer' }} onClick={handlePackage}>
            Packages
          </Typography>
          <Typography variant="h6" sx={{ mx: 2, cursor: 'pointer' }} onClick={handleCustomOrder}>
            Custom Order
          </Typography>
          <Typography variant="h6" sx={{ mx: 2, cursor: 'pointer' }} onClick={handleAbout}>
            About us
          </Typography>
        </Box>

        {/* Login and Sign Up buttons */}
        <Button sx={{ justifyContent: 'space-between', fontWeight: 'bold' }} onClick={handleLogin}>
          Login
        </Button>
        <Button sx={{ fontWeight: 'bold' }} onClick={handleSignup}>
          Sign Up
        </Button>
      </Toolbar>
      <Outlet /> {/* Outlet to render nested routes */}
    </AppBar>
  );
};

export default ToolbarComponent;
