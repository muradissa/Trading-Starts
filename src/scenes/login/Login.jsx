
// import React, { useRef, useState } from "react"
// // import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// // import Link from '@mui/material/Link';
// import { Link, useNavigate  } from "react-router-dom"
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// import { useAuth } from "../../contexts/AuthContext"



// const theme = createTheme();

// export default function Login() {

//   // const emailRef = useRef()
//   // const passwordRef = useRef()
//   const { login } = useAuth()
//   const { logout } = useAuth()
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate ()


//   async function handleSubmit (event) {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//     try {
//       setError("")
//       setLoading(true)
//       await login(data.get('email'), data.get('password'))
//       navigate("/")  
//     } catch {
//       setError("Failed to log in")
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: `url(${"../../assets/imgLogin.jpg "})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link to="/signup" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }

//////////////////////////////////////////////////




// import React, { useState } from 'react';
// import './login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     // Perform login action here
//     // After login, setIsLoading(false) to stop the spinner animation
//   };

//   return (
//     <div className="login-form-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//         <button type="submit" className={isLoading ? 'loading' : ''}>
//           {isLoading ? 'Loading...' : 'Log In'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;


///////////////////////////////////////////////////////////////////////////




import React, { useRef, useState } from "react"
// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import { Link, useNavigate  } from "react-router-dom"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useAuth } from "../../contexts/AuthContext"



const theme = createTheme();

export default function Login() {

  // const emailRef = useRef()
  // const passwordRef = useRef()
  const { login } = useAuth()
  const { logout } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate ()


  async function handleSubmit (event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    try {
      setError("")
      setLoading(true)
      await login(data.get('email'), data.get('password'))
      navigate("/")  
    } catch {
      setError("Failed to log in")
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' ,backgroundColor:"rgba(16, 22, 36,0.5)"}} >
        {/* <CssBaseline /> */}
        
        {/* <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square> */}
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              // width:'100%',
              margin:" auto auto"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
              // borderColor: 'green'
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
               style={{ borderColor: 'red'}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
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
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      {/* </Grid> */}
    </ThemeProvider>
  );
}