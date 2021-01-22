import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import NavMobile from "./NavMobile";
import NavCategories from "./NavCategories";

import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  CssBaseline,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Hidden,
  MenuItem,
  Menu,
  Avatar,
  Modal,
  Fade,
  Backdrop,
} from "@material-ui/core";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import MenuIcon from "@material-ui/icons/Menu";
const Nav = (props) => {
  const { classes, categories, width } = props;

  // #action : category menu
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(null);

  const handleCategoryMenuOpen = (event) => {
    setCategoryMenuOpen(event.currentTarget);
  };
  const handleCategoryMenuClose = () => {
    setCategoryMenuOpen(null);
  };

  // #action : modal
  const [navSmallModalOpen, setNavSmallModalOpen] = useState(false);

  const handleNavSmallModalOpen = () => {
    setNavSmallModalOpen(true);
  };

  const handleNavSmallModalClose = () => {
    setNavSmallModalOpen(false);
  };

  // #handlers : mobileSmallModalClosed on size
  useEffect(() => {
    if (width === "lg") {
      setNavSmallModalOpen(false);
    }
  }, [width]);

  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid item xs={12}>
        <AppBar position="static" elevation={0} className={classes.nav_appBar}>
          <Toolbar className={classes.nav_toolBar}>
            <Grid item xs={4} sm={4} md={3} lg={2} xl={2}>
              <Box display="flex" justifyContent="center">
                <FreeBreakfastIcon color="primary" />
              </Box>
            </Grid>

            <Grid item xs={2} sm={4} md={6} lg={8} xl={8}>
              <Hidden mdDown>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Box display="flex">
                    <Box m={2}>
                      <Link
                        href="/"
                        className={classes.scui_link_underline_remove}
                      >
                        <Typography
                          variant="h2"
                          color="primary"
                          className={classes.nav_onHover}
                        >
                          Home
                        </Typography>
                      </Link>
                    </Box>
                    <Box m={2} onClick={handleCategoryMenuOpen}>
                      <Typography
                        variant="h2"
                        color="primary"
                        className={classes.nav_onHover}
                      >
                        Categories
                      </Typography>
                    </Box>
                    <Menu
                      id="simple-menu"
                      className={classes.nav_subCategory_menu}
                      anchorEl={categoryMenuOpen}
                      keepMounted
                      open={Boolean(categoryMenuOpen)}
                      onClose={handleCategoryMenuClose}
                    >
                      <MenuItem disableRipple onClick={handleCategoryMenuClose}>
                        <NavCategories
                          categories={categories}
                          handleNavSmallModalClose={handleNavSmallModalClose}
                        />
                      </MenuItem>
                    </Menu>
                    <Box m={2}>
                      <Link
                        href="/popular"
                        className={classes.scui_link_underline_remove}
                      >
                        <Typography
                          variant="h2"
                          color="primary"
                          className={classes.nav_onHover}
                        >
                          Popular
                        </Typography>
                      </Link>
                    </Box>
                    <Box m={2}>
                      <Link
                        href="/featured"
                        className={classes.scui_link_underline_remove}
                      >
                        <Typography
                          variant="h2"
                          color="primary"
                          className={classes.nav_onHover}
                        >
                          Featured
                        </Typography>
                      </Link>
                    </Box>
                    <Box m={2}>
                      <Link
                        href="/"
                        className={classes.scui_link_underline_remove}
                      >
                        <Typography
                          variant="h2"
                          color="primary"
                          className={classes.nav_onHover}
                        >
                          About
                        </Typography>
                      </Link>
                    </Box>
                    <Box m={2}>
                      <Link
                        href="/"
                        className={classes.scui_link_underline_remove}
                      >
                        <Typography
                          variant="h2"
                          color="primary"
                          className={classes.nav_onHover}
                        >
                          Contact Form
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Hidden>
              <Box
                display={{
                  xs: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "none",
                  xl: "none",
                }}
                justifyContent="flex-end"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <IconButton onClick={handleNavSmallModalOpen}>
                    <MenuIcon />
                  </IconButton>
                </Box>
                <Modal
                  className={classes.modal}
                  open={navSmallModalOpen}
                  onClose={handleNavSmallModalClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <NavMobile
                    handleNavSmallModalClose={handleNavSmallModalClose}
                    categories={categories}
                  />
                </Modal>
              </Box>
            </Grid>

            <Grid item xs={4} sm={4} md={3} lg={2} xl={2}>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Box display="flex" alignItems="center" mx={2}>
                  <Avatar>S</Avatar>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography variant="h1" color="primary">
                    sign in | sign up
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
};

export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(Nav)
);
