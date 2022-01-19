import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Stack } from "@mui/material";
import "./index.css";

const Navbar = () => {
  return (
    <AppBar sx={{ padding: 3 }} position="static">
      <Stack direction="row" justifyContent="space-between">
        <Typography>
          <Link to="/">Home</Link>
        </Typography>
        <Typography>
          <Link to="/about">About</Link>
        </Typography>
        <Typography>
          <Link to="/contact">Contact</Link>
        </Typography>
        <Typography>
          <Link to="/profile">Profile</Link>
        </Typography>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
