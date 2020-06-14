import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   logocontainer: {
// flexGrow: 1,
// marginLeft: 20,
// backgroundColor: theme.color.black,
//   },
// }));

const Navbar = () => {
  // const classes = useStyles();
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  const handleIndexChange = (e, newValue) => {
    setIndex(newValue);
  };
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div
            style={{
              flexGrow: 1,
              marginLeft: 20,
              // backgroundColor: theme.color.black,
            }}
          >
            <Typography variant="h6">LOGO</Typography>
          </div>
          <Tabs
            value={index}
            onChange={handleIndexChange}
            indicatorColor="primary"
          >
            <Tab label="Home"></Tab>
            <Tab label="Product"></Tab>
            <Tab label="Users"></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
