// #next :

// import Image from 'next/image';

// #contexts :

// #hooks :

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box } from "@material-ui/core";

// #other :
import EmbedContainer from "react-oembed-container";

const useStyles = makeStyles({
  root: {},
});

const PostDesc = (props) => {
  const { classes, content } = props;

  const localClasses = useStyles();

  return (
    <Box aria-label="body" my={2} mx={4}>
      <div
        dangerouslySetInnerHTML={{ __html: `${content}` }}
        className={classes.try}
      />
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PostDesc);
