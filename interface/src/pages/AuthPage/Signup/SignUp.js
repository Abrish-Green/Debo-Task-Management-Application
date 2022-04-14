import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { useNavigate } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios'
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Input } from '@mui/material';

const queryClient = new QueryClient()

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme();

const SignUpTag = ()=>{

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [success,setSuccess] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [userType, setUserType] = useState(false)
  register.push({"isAdmin":userType});
  let navigate = useNavigate();
  console.log(register)
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccess(false);
  };

  const onSubmit = async(data) => {
      const user = { username: data.firstName+' '+data.lastName,email:data.email,password: data.password };
      const response = await axios.post('/api/user/sign_up', user,);
      console.log(response)
      if(response){
        setSuccess(true)
      } 
      
      
    }
  
  const { isLoading, error, data } = useQuery('repoData', () =>
  fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res => res.json()))

if (isLoading) return <LinearProgress color="primary" />


if (error) return 'An error has occurred: ' + error.message


  return (
   

      <ThemeProvider theme={theme}>
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    {...register("firstName", { required: true, maxLength: 40 })}
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />

                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    {...register("lastName", { required: true, maxLength: 20 })}
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    {...register("email", { required: true, maxLength: 30 })}
                    autoComplete="email"
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
                    {...register("password", { required: true, maxLength: 20 })}
                    autoComplete="new-password"
                  />
                </Grid>
                <FormControl fullWidth>
                <p>Select Member</p>

                  <Select
                    fullWidth
                    name="isAdmin"
                    label="User Type"  
                    id="isAdmin"
                    value={userType}
                    onChange={(e)=>{setUserType(userType)}}
                  >
                    <MenuItem value={false}>Member</MenuItem>
                    <MenuItem value={true}>Manager</MenuItem>
                  </Select>
                  

                </FormControl>
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
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
          <Stack spacing={2} sx={{ width: '100%' }}>

      <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          User Register Successfully
        </Alert>
      </Snackbar>
      
    </Stack>
        </Container>
      </ThemeProvider>
     

  );
}

export default function SignUp() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <SignUpTag />
    </QueryClientProvider>
  )
}