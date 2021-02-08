import {Logo} from './styles.js';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];


const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#307060",
    color: "#ffffff",
    boxShadow: "none",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  menuButton: {
    color: "#ffffff",
    textTransform: "capitalize",
    fontWeight: 400,
    size: "25px",
    marginLeft: "38px",
     "&:hover": {
       color: "#307060",
       backgroundColor: "#fcfcfc",
     },
  },
  menuDraws: {
    color: "#000000",
    width: "100%",
    borderBottom: "0.05px solid #E4E4E4",
    fontWeight: 300,
    height: "50px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Quicksand, sans-serif",
  },
  mobiletoolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  toolMenu: {
    marginLeft: "auto",
  },
  drawerContainer: {
    backgroundColor: "white",
    paddingTop: "20px",
    height: "100%",
    width: "300px",
    "@media (max-width: 600px)": {
       width: "250px",
    },
  },
}));

function Nav() {
    const { header,
    menuButton,
    toolbar,
    drawerContainer,
    menuDraws,
    toolMenu ,
    mobiletoolbar} = useStyles();

    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

      useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());
      }, []);

      const displayDesktop = () => {
        return (
          <Toolbar className={toolbar}>
            {SELOGO}
            <div>{getMenuButtons()}</div>
          </Toolbar>
        );
      };


      const displayMobile = () => {
        const handleDrawerOpen = () =>
          setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
          setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
          <Toolbar className={mobiletoolbar} >
            <Drawer
              {...{
                anchor: "right",
                open: drawerOpen,
                onClose: handleDrawerClose,
              }}
            >
              <div className={drawerContainer}>
                {getDrawerChoices()}
              </div>
            </Drawer>

            <div>{SELOGO}</div>
            <IconButton
             className={toolMenu}
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        );
      };

      const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
          return (

            <Link
              {...{
                component: RouterLink,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
              }}
            >
              <MenuItem
              className={menuDraws} >{label} <ArrowForwardIosIcon  style={{marginLeft: "auto", color: "#307060" }} /> </MenuItem>
             </Link>
          );
        });
      };

      const SELOGO = (
        <Typography variant="h6" component="h1" >
          <Logo>
              Shelby El-rassi
          </Logo>
        </Typography>
      );

    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        );
      });
    };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}



export default Nav;
