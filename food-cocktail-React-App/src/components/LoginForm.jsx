import { useState } from "react";
import { useUserContext } from "../context/UserContext";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Icon } from '@iconify/react';

function LoginForm() {

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userFirstName, setuserFirstName] = useState("");

  const [submitResult, setSubmitResult] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);

  const { currentUser, handleUpdateUser } = useUserContext();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
      setLoginAttempts(loginAttempts + 1);
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
      setLoginAttempts(loginAttempts + 1);
    } else if (!emailRegex.test(userEmail)) {
      setSubmitResult("Email failed regular expression match");
      setLoginAttempts(loginAttempts + 1);
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ email: userEmail, name: userFirstName });
      setLoginAttempts(0);
    }
  };

  if (currentUser.email)
    return (
      <>
      <Container component="main" maxWidth="xl" style={{ minWidth: "100vw", minHeight: "100vh"}}>
      <div className="welcome">
        <p className="welcomeGreeting">Welcome {currentUser.name}!</p>
        <button className="logoutButton" onClick={() => handleUpdateUser({})}>LOG OUT</button>
        </div>
        </Container>
      </>
    );

  else if (loginAttempts >= 5) return <p>Login attempts exceeded</p>;

  return (
    <>
    <Container component="main" maxWidth="xl" style={{ minWidth: "100vw", minHeight: "100vh"}}>
    <CssBaseline />
    <Box
      sx={{
        marginTop: 2,
        marginBottom: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Icon className="lockIcon" icon="mingcute:lock-line" />
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
          margin="normal"
          required
          fullWidth
          id="first-name"
          label="First Name"
          name="first-name"
          autoComplete="first-name"
          autoFocus
          value={userFirstName}
          onChange={(e) => setuserFirstName(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
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
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <p>{submitResult}</p>
      </Box>
    </Box>
  </Container>
  </>
  );
}

export default LoginForm;
