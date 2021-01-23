import { useRef, useState } from "react";
// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :

// #components :
import SearchArea from "./SearchArea";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  FormControl,
  TextField,
  InputAdornment,
  Backdrop,
  Fade,
  Modal,
  Button,
  Paper,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// #other :

const useStyles = makeStyles({
  EditTitleTextField: {
    "& .MuiInputBase-input": {
      maxHeight: 50,
      fontSize: "14px",
      letterSpacing: "0px",
      wordSpacing: "0px",
      fontWeight: 400,
      fontStyle: "normal",
      fontVariant: "normal",
      textTransform: "lowercase",
      lineHeight: 1,
      overflowWrap: "break-word",
      wordWrap: "break-word",
      hyphens: "auto",
      color: "#161616",
    },
  },

  paper: {
    backgroundColor: "#FFFFFF",
  },
});

const Search = (props) => {
  const { classes } = props;
  const localClasses = useStyles();
  const inputRef = useRef();
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handleSearchModalOpen = () => {
    setSearchModalOpen(true);
  };

  const handleSearchModalClose = () => {
    setSearchModalOpen(false);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box>
        <FormControl
          fullWidth
          onClick={(e) => {
            inputRef.current.click();
          }}
        >
          <TextField
            className={localClasses.EditTitleTextField}
            InputProps={{
              shrink: "false",
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),

              disableUnderline: true,
            }}
            multiline
            fullWidth
            name="galleryName"
            id="galleryName"
            placeholder="Type Anything"
          />
        </FormControl>
      </Box>
      <Box>
        <Button
          onClick={handleSearchModalOpen}
          ref={inputRef}
          style={{ visibility: "hidden" }}
        ></Button>
        <Modal
          open={searchModalOpen}
          onClose={handleSearchModalClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={searchModalOpen}>
            <Paper className={classes.paper}>
              <SearchArea handleSearchModalClose={handleSearchModalClose} />
            </Paper>
          </Fade>
        </Modal>
      </Box>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    //   ...(theme)
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Search);
