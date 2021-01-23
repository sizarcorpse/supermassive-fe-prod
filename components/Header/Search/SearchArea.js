import { useState } from "react";
// #next :
// import getConfig from 'next/config';
import Router, { useRouter } from "next/router";
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :

// #components :
import { Footer } from "components/Footer";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import withWidth from "@material-ui/core/withWidth";
import {
  withStyles,
  makeStyles,
  Box,
  FormControl,
  TextField,
  InputAdornment,
  Button,
  Typography,
  Grid,
  CssBaseline,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import BackspaceIcon from "@material-ui/icons/Backspace";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";

// #other :
import Lottie from "react-lottie";
import animationData from "utils/lottie/lf30_editor_llojtmfj";
import animationData2 from "utils/lottie/37459-searching-contract";

const useStyles = makeStyles({
  SearchTitleTextField: {
    "& .MuiInputBase-input": {
      maxHeight: 100,
      fontSize: "30px",
      letterSpacing: "0px",
      wordSpacing: "0px",
      fontWeight: 700,
      fontStyle: "normal",
      fontVariant: "normal",
      textTransform: "capitalize",
      lineHeight: 1,
      overflowWrap: "break-word",
      wordWrap: "break-word",
      hyphens: "auto",
      color: "#161616",
    },
  },
  icon: {
    cursor: "pointer",
  },
  button: {
    margin: "24px 8px",
  },
  container: {
    height: "100vh",
    width: "100%",
  },
  textBox: { position: "relative", bottom: 0 },
  text: {
    color: "#20837e",
    fontFamily: "Ubuntu",
    fontSize: "1.4em",
    letterSpacing: -1,
    wordSpacing: 0,
    fontWeight: 500,
    textTransform: "capitalize",
    fontStyle: "normal",
    fontVariant: "normal",
    textAlign: "center",
  },
});

const SearchArea = (props) => {
  const { classes, handleSearchModalClose, width } = props;
  const [searchText, setSearchText] = useState("");
  const [lottiePause, setLottiePause] = useState(true);
  const router = useRouter();
  const localClasses = useStyles();

  const handleSearchTextValueChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearchTextValue = () => {
    setSearchText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLottiePause(false);
    router.push(`/search/${searchText}`);
    Router.events.on("routeChangeComplete", () => {
      console.log("starting");
      if ((router.pathname = "/search/[slug]")) {
        setLottiePause(true);
        handleSearchModalClose(false);
      }
    });
  };

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    initialSegment: [51.5, 200],
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container className={localClasses.container}>
      <CssBaseline />
      <Grid xl={4} lg={4} md={3} sm={2} xs={false} />
      <Grid item xl={4} lg={6} md={6} sm={8} xs={12}>
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mt={5}
        >
          <Box width="100%">
            <form onSubmit={handleSubmit}>
              <Box>
                <FormControl fullWidth>
                  <TextField
                    className={localClasses.SearchTitleTextField}
                    InputProps={{
                      shrink: "false",
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="start">
                          <BackspaceIcon
                            onClick={clearSearchTextValue}
                            fontSize="small"
                            className={localClasses.icon}
                          />
                        </InputAdornment>
                      ),
                      disableUnderline: true,
                    }}
                    fullWidth
                    name="search"
                    id="search"
                    placeholder="Type Anything"
                    value={searchText}
                    onChange={handleSearchTextValueChange}
                  />
                </FormControl>
              </Box>
              <Box my={1} display="flex" justifyContent="flex-end">
                <Button
                  onClick={() => {
                    handleSearchModalClose(false);
                  }}
                  variant="outlined"
                  color="primary"
                  className={localClasses.button}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={searchText.length === 0}
                  className={localClasses.button}
                >
                  Search Anything
                </Button>
              </Box>
            </form>
          </Box>
          <Box my={5}>
            {/* <FreeBreakfastIcon fontSize="large" /> */}
            <Lottie options={defaultOptions2} height={211} width={300} />
            <Box className={localClasses.textBox}>
              <Typography className={localClasses.text}>
                The earth is what we all have in common
              </Typography>
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  fontWeight: "400",
                  color: "#63bb94",
                }}
              >
                Save Earth
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid xl={4} lg={4} md={3} sm={2} xs={false} />
      <Grid item xs={12}>
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          height={150}
        >
          <Box>
            {/* <FreeBreakfastIcon fontSize="large" /> */}
            <Lottie
              options={defaultOptions}
              height={150}
              width={150}
              isPaused={lottiePause}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default withWidth()(
  withStyles(
    (theme) => ({
      //   ...(theme)
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(SearchArea)
);
