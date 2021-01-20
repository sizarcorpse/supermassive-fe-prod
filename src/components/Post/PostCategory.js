// #next :

// import Image from 'next/image';

// #contexts :

// #hooks :

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles } from "@material-ui/core";

// #other :

const useStyles = makeStyles({
  root: {},
});

const PostCategory = (props) => {
  const { classes } = props;

  const localClasses = useStyles();

  return <> null</>;
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PostCategory);
