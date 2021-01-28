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
    fontFamily: "Quicksand, sans-serif",
    backgroundColor: "#fcfcfc",
    color: "#000000",
    boxShadow: "none",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  menuButton: {
    fontFamily: "Quicksand, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  fontFamily: "Quicksand, sans-serif",
  },
  drawerContainer: {
    fontFamily: "Quicksand, sans-serif",
    padding: "20px 30px",
  },
}));

function Nav() {
    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

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
            {shelbyLogo}
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
          <Toolbar>
            <IconButton
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

            <Drawer
              {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,
              }}
            >
              <div className={drawerContainer}>{getDrawerChoices()}</div>
            </Drawer>

            <div>{shelbyLogo}</div>
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
              <MenuItem>{label}</MenuItem>
            </Link>
          );
        });
      };

      const shelbyLogo = (
        <Typography variant="h6" component="h1" >
          <Logo>
              SE
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
