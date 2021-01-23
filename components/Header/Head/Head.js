import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  CssBaseline,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  Box,
  Hidden,
} from "@material-ui/core";
import { motion } from "framer-motion";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import { getDay, setDay, format } from "date-fns";
import { Search } from "../Search";

const Head = (props) => {
  const { classes, closeMe, handleNavSmallModalClose } = props;
  const router = useRouter();
  return (
    <Grid container component="main">
      <CssBaseline />

      <Box mx={4} width="100%">
        <AppBar position="static" className={classes.head_appBar} elevation={0}>
          <Toolbar className={classes.head_toolBar}>
            <Hidden xsDown>
              <Grid
                item
                xs={false}
                sm={5}
                md={3}
                lg={2}
                xl={2}
                style={{ borderRight: "1px solid #e3e3e3" }}
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <DateRangeIcon
                    color="primary"
                    className={classes.head_date_icon}
                  />

                  <Typography variant="h1" color="primary">
                    {format(new Date(), "iiii, MMMM dd")}
                  </Typography>
                </Box>
              </Grid>
            </Hidden>
            <Grid
              item
              xs={closeMe ? false : 3}
              sm={1}
              md={7}
              lg={7}
              xl={8}
              style={{ borderRight: "1px solid #e3e3e3" }}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <Hidden smDown>
                  <Box flexGrow={1} flexShrink={1}>
                    <Box display="flex">
                      {["Home", "Archive", "Contact"].map((m, i) => (
                        <Box key={i} mx={1}>
                          <Typography variant="h1" color="primary">
                            {m}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Hidden>
                <Hidden mdDown>
                  <Box display="flex" flexGrow={1}>
                    <Typography variant="h1" color="primary">
                      This is supermassive black hole aha!!
                    </Typography>
                  </Box>
                </Hidden>
              </Box>
            </Grid>

            <Grid item xs={closeMe ? 12 : 9} sm={6} md={3} lg={3} xl={2}>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                p={1}
              >
                {closeMe === true ? (
                  <Box display="flex" width="100%">
                    <Box flexGrow={1}>
                      <Search
                        handleNavSmallModalClose={handleNavSmallModalClose}
                        closeMe={true}
                      />
                    </Box>
                    <CloseIcon
                      color="primary"
                      onClick={() => {
                        handleNavSmallModalClose(false);
                      }}
                    />
                  </Box>
                ) : (
                  <Box display="flex" width="100%" justifyContent="start">
                    <Search />
                  </Box>
                )}
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Head);
