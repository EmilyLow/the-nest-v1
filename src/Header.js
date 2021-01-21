import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import logo from './images/origami_bird_icon.svg';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        fontStyle: 'oblique',
        fontSize: "80px"
    }
  }));

  const Header = () => {
    const classes = useStyles();
    return (
      <AppBar position="static">
        <Toolbar>
            <img style={{ height: "100px" }} src={logo} alt="logo" />
          <Typography className={classes.typographyStyles} variant="h3" align="center"  gutterBottom>
            The Nest
          </Typography>
    
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Header;