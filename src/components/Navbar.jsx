import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography align="left" sx={{ flexGrow: 2 }}>
            Blog App
          </Typography>
          <Button>
            <Link to="/Blog" style={{ color: "white" }}>
              Add Blog
            </Link>
          </Button>
          <Button>
            <Link to="/Home" style={{ color: "white" }}>
              Home
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
