// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
import Link from "next/link";
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :

// #components :
import NavCategories from "./NavCategories";
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

const useStyles = makeStyles({
  root: { height: "100vh", width: "100vw", backgroundColor: "#ffffff" },
  menu: { cursor: "pointer", "&:hover": { backgroundColor: "#f5f4f4" } },
});

const NavMobile = (props) => {
  const { classes, categories, handleNavSmallModalClose } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
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
      <Box>
        <Grid item xs={12} style={{ height: 50 }}>
          <Head
            closeMe={true}
            handleNavSmallModalClose={handleNavSmallModalClose}
          />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <Typography variant="h5" color="primary">
              supermassive
            </Typography>
          </Box>

          <Box height={370}>
            <List>
              {navigation.map((item, i) => (
                <Link href={`${item.url}`} key={i}>
                  <ListItem className={localClasses.menu}>
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
          <Box my={2}>
            <NavCategories categories={categories} lessMe={true} />
          </Box>
        </Grid>
        <Divider />
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
