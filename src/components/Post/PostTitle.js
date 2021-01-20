// #next :

// import Image from 'next/image';

// #contexts :

// #hooks :

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";

// #other :

const useStyles = makeStyles({
  root: { fontSize: "2.5em", fontWeight: "400" },
});

const PostTitle = (props) => {
  const { classes, title } = props;

  const localClasses = useStyles();

  return (
    <Box aria-label="title" my={2} mx={4}>
      <Typography variant="h3" className={localClasses.root}>
        {title}
      </Typography>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PostTitle);
