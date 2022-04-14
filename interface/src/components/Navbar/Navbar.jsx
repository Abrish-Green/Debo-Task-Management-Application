import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button, Tooltip } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { connect } from 'react-redux'

const PrimarySearchAppBar = (props)=>{
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [isAuth, setIsAuth] = React.useState(false)
  console.log("status",props.auth.IsLoggedIn)
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = isAuth ? (
    <Menu sx={{ height: '40vh',display: { sx: 'block', md: 'none'} }}
      
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem>
        <Tooltip title="Logout">
            <IconButton 
                size="large"
                aria-label="Logout"
                color="inherit"
            >
                <ExitToAppIcon />
            </IconButton>
        </Tooltip>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  ) : (
    <Menu sx={{ height: '40vh',display: { sx: 'block', md: 'none'} }}
      
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem>
        <p>Sign Up</p>
      </MenuItem>

      <MenuItem>
        <p>Login</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ display: {xs: 'block',md:'none'}, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: 'block' }, fontSize: {xs: '15px', sm:'20px'} }}
          >
            Debo Task Management Platform
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           
          
          {
            props.auth.IsLoggedIn &&
            <React.Fragment>
              <Tooltip title="Notification">   
              <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  >
                  <Badge badgeContent={1} color="error">
                      <NotificationsIcon />
                  </Badge>
                  </IconButton>
              </Tooltip>

              <Tooltip title="Logout">
                <IconButton 
                    size="large"
                    aria-label="Logout"
                    color="inherit"
                >
                        <ExitToAppIcon />
                </IconButton>
            </Tooltip>
          </React.Fragment>
          }
             { !props.auth.IsLoggedIn && 
              <React.Fragment>
               <Button style={{ color: 'white' }} variant="outlined" href="/signup">
                Sign Up
              </Button>
              <Button style={{ color: 'white' }} variant="outlined" href="/login">
                Login
              </Button>
              </React.Fragment>
              }
            
            
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, null)(PrimarySearchAppBar)