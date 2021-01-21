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
                    Wednesday, December 23
                  </Typography>
                </Box>
              </Grid>
            </Hidden>
            <Grid
              item
              xs={6}
              sm={7}
              md={9}
              lg={9}
              xl={9}
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

            <Grid item xs={6} sm={2} md={1} lg={1} xl={1}>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                p={1}
              >
                {closeMe === true ? (
                  <CloseIcon
                    color="primary"
                    onClick={() => {
                      handleNavSmallModalClose(false);
                    }}
                  />
                ) : (
                  <SearchIcon color="primary" />
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
