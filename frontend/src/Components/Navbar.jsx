import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BlogApp
            </Typography>
            <Link to="/" style={{ color: "white" }}>
              <HomeIcon />
            </Link>
            &nbsp; &nbsp;
            <Link to="/add" style={{ color: "white" }}>
              <LibraryAddIcon />
            </Link>
            &nbsp; &nbsp;
            <Link to="/" style={{ color: "white", marginLeft: "16px" }}>
              <LogoutIcon />
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;



