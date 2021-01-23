import { useState } from "react";
// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
import Link from "next/link";
import Image from "next/image";
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :
import { MakeUrls } from "utils/MakeUrls";
// #components :

import { Head } from "../Head";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Typography,
  ListItemSecondaryAction,
  IconButton,
  CssBaseline,
  Divider,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HelpIcon from "@material-ui/icons/Help";
import InfoIcon from "@material-ui/icons/Info";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
// #other :
import _ from "lodash";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ImageIcon from "@material-ui/icons/Image";
const useStyles = makeStyles({
  root: { height: "100vh", width: "100vw", backgroundColor: "#ffffff" },
  menu: { cursor: "pointer", "&:hover": { backgroundColor: "#f5f4f4" } },

  list: {
    // minWidth: 580,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    flex: "0 0 50%",
    cursor: "pointer",
    margin: "4px 0",
  },
  itemAlt: {
    flex: "0 0 50%",
    cursor: "pointer",
    "&:hover": {
      color: "#fc415e",
    },
  },
  avatar: {
    "& .MuiAvatar-root": {
      height: 45,
      width: 45,
    },
  },
});

const NavMobile = (props) => {
  const { classes, categories, handleNavSmallModalClose } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
  const [showCat, setShowCat] = useState(7);

  const variants = {
    hidden: { opacity: 1, backgroundColor: "#ffffff" },
    visible: { opacity: 1, backgroundColor: "#f5f4f4" },
  };
  const localClasses = useStyles();
  const navigation = [
    { name: "Home", icon: <HomeIcon />, url: "/", hint: "Go to Home page" },
    {
      name: "Popular Content",
      icon: <FiberNewIcon />,
      url: "/popular",
      hint: "Explore popular content",
    },
    {
      name: "Featured",
      icon: <FilterVintageIcon />,
      url: "/featured",
      hint: "Featured & Editor choice",
    },
    {
      name: "About",
      icon: <InfoIcon />,
      url: "/about",
      hint: "Learn about this development",
    },
    {
      name: "Contact",
      icon: <ContactMailIcon />,
      url: "/contact",
      hint: "Lets talk",
    },
    { name: "Help", icon: <HelpIcon />, url: "/help", hint: "help Forum" },
  ];

  return (
    <Grid container className={localClasses.root} style={{ overflow: "auto" }}>
      <CssBaseline />

      <Box width="100%">
        <Grid item xs={12} style={{ height: 50 }}>
          <Head
            closeMe={true}
            handleNavSmallModalClose={handleNavSmallModalClose}
          />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <Box height={370} width="100%">
            <List>
              {navigation.map((item, i) => (
                <Link href={`${item.url}`} key={i}>
                  <ListItem
                    className={localClasses.menu}
                    onClick={() => {
                      handleNavSmallModalClose(false);
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar>{item.icon}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="h2">{item.name}</Typography>
                      }
                    />
                    <ListItemSecondaryAction>
                      <ListItemText
                        primary={
                          <Typography variant="h1">{item.hint}</Typography>
                        }
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <List className={localClasses.list}>
              {_.slice(categories, 0, showCat).map((category, i) => (
                <motion.div
                  initial={variants.hidden}
                  whileHover={variants.visible}
                  key={i}
                >
                  <Link href={`/category/${category.slug}`}>
                    <ListItem
                      className={localClasses.item}
                      onClick={() => {
                        handleNavSmallModalClose(false);
                      }}
                    >
                      <ListItemAvatar className={localClasses.avatar}>
                        <Avatar>
                          {category.icon ? (
                            <Image
                              src={MakeUrls(category.icon)}
                              height={category.icon.height}
                              width={category.icon.width}
                            />
                          ) : (
                            <ImageIcon />
                          )}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="h2">{category.name}</Typography>
                        }
                        secondary={
                          <Typography variant="h1">
                            This is how it going go
                          </Typography>
                        }
                      />
                    </ListItem>
                  </Link>
                </motion.div>
              ))}
              {showCat === undefined ? (
                <Box
                  display="flex"
                  alignItems="center"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <ListItem
                    className={localClasses.itemAlt}
                    onClick={() => {
                      setShowCat(7);
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography variant="h2">
                          Show less Categories
                        </Typography>
                      }
                      secondary={
                        <Typography variant="h1">
                          Click here for less
                        </Typography>
                      }
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" size="small">
                        <ArrowForwardIcon fontSize="small" />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </Box>
              ) : (
                <Box
                  display="flex"
                  alignItems="center"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <ListItem
                    className={localClasses.itemAlt}
                    onClick={() => {
                      setShowCat(undefined);
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography variant="h2">
                          Show more Categories
                        </Typography>
                      }
                      secondary={
                        <Typography variant="h1">
                          Click here for more
                        </Typography>
                      }
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" size="small">
                        <ArrowForwardIcon fontSize="small" />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </Box>
              )}
            </List>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(NavMobile);
