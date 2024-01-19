import React, { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Drawer,
  Toolbar
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-scroll"; 


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0",
    fontFamily: "Poppins",
    width: "100vw",  
    position:"fixed",
    top:0,
    left:0,
    zIndex:999,
    backgroundColor:"white"
  },
  head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "97%",
    "@media(min-width:1200px)": {
      width: "85%",
    },
  },
  navlinks: {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    marginBottom:0,
    fontSize: "16px",
    lineHeight:"27px",
    gap:"40px",
    fontWeight: 500,
    "& > li": {
      position: "relative",
      "&::after": {
        content: "''",
        position: "absolute",
        left: 0,
        bottom: 0,
        width: 0,
        height: "2px",
        backgroundColor: "black",
        transition: "width 0.5s ease-in-out",
      },
      "&:hover::after": {
        width: "100%",
      },
    },
  },
  headerlinks: {
    display: "flex",
    justifyContent: "center",
    gap: "2em",
    cursor: "pointer",
    "@media(max-width:768px)": {
      display: "none",
    },
  },
  anchor: {
    textDecoration: "none",
    color: "black",
    fontWeight: 500,
    "&:hover": {
      textDecoration:"none",
      color:"black",
    }
  },
  buynow: {
    borderRadius: "0px",
    backgroundColor: "#ff2c54",
    width: "fit-content",
    padding: "4px 17px",
    color: "white",
    fontWeight:"400",
    transition: "background-position 0.3s ease",
    "&:hover": {
      backgroundColor: "#ff2c54",
      color: "white",
      textDecoration: "none",
    },
  },
  pandra: {
    alignSelf: "center",
    textTransform: "capitalize",
  },
  menu: {
    display: "none",
    "@media (max-width: 768px)": {
      display: "block",
      width:"6%",
      height:"100%",
      fontSize:"14px",
    },
  },
  popover: {
    marginTop: "8px",
  },
  drawer:{
    width:"100%",
    fontFamily:"poppins"
  },
  menuicon:{
    fontSize:"28px",
  },
  linkli:{
    display:"flex",
    alignItems:"center",
  }
}));

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const navigationLinks = [
    { id: "templates", text: "Templates" },
    { id: "features", text: "Features" },
    { id: "whyus", text: "Why Us" },
    { id: "buynow", text: <div className={`${classes.pandra} ${classes.buynow}`}>
      <ShoppingCartIcon />
      Buy Now
    </div> },
  ];

  return (
    <>
      <Box className={classes.root}>
        <Grid container className={classes.head}>
          <Grid item>
            <img src="images/logo-black.svg" alt="papr-logo" />
          </Grid>
          <Grid item className={classes.headerlinks}>
            <ul className={classes.navlinks}>
              {navigationLinks.map((link) => (
                <li key={link.id} className={classes.linkli}>
                  <Link
                    to={link.id} 
                    smooth={true} 
                    offset={-70} 
                    duration={800} 
                    className={classes.anchor}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

          <IconButton
            className={classes.menu}
            onClick={handleDrawerOpen}
          >
            {isDrawerOpen ? <CloseIcon /> : <MenuIcon className={classes.menuicon}/>}
          </IconButton>
        </Grid>
      </Box>

      <Drawer
        anchor="top"
        open={isDrawerOpen}
        fullWidth
        onClose={handleDrawerClose}
        classes={{ paper: classes.drawer }}
      >
        <Toolbar>
        <Grid container className={classes.head}>
          <Grid item>
            <img src="images/logo-black.svg" alt="papr-logo" />
          </Grid>
          <Grid item className={classes.headerlinks}>
            <ul className={classes.navlinks}>
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className={classes.anchor}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </Grid>
          </Grid>
        </Toolbar>
        <List>
          {navigationLinks.map((link) => (
            <ListItem button key={link.id} onClick={handleDrawerClose}>
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
