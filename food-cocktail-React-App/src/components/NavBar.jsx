import React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@iconify/react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import RoseLogo from "../assets/RoseLogo.png";
import { NavLink } from 'react-router-dom';

const pages = [{link: '/', label: 'HOME'}, {link: '/recipe/', label: 'RECIPE'}, 
    {link: '/cocktail/', label: 'COCKTAILS'}];

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="false">
        <Toolbar disableGutters>
          <img className="roseLogo" src={RoseLogo} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "block", md: "none" },
              fontFamily: 'Qwitcher Grypen',
              fontWeight: 700,
              fontSize: "1.5em",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BMG
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontSize: "2.3em",
              fontFamily: 'Qwitcher Grypen',
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Be My Guest
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <MenuItem key={page.link} component={NavLink} to={page.link}>{page.label}</MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              component={NavLink} to={'/'}
             sx={{ my: 2, color: "#4a5759", display: "block"}}
            >
              <Icon icon="line-md:home" />
            </IconButton>
            <IconButton
               component={NavLink} to={'/recipe/'}
              sx={{ my: 2, color: "#4a5759", display: "block" }}
            >
              <Icon icon="ph:bowl-food-light" />
            </IconButton>
            <IconButton
               component={NavLink} to={'/cocktail/'}
              sx={{ my: 2, color: "#4a5759", display: "block" }}
            >
              <Icon icon="fluent-emoji-high-contrast:cocktail-glass" />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Please Login to access everything!">
              <IconButton
              component={NavLink} to={'/login/'}
                sx={{ my: 2, color: "#4a5759", display: "block" }}
              >
                <Icon className="signinIcon" icon="fluent:person-20-regular" />
              </IconButton>
            </Tooltip>
        
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
