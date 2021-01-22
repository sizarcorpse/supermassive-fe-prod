// #next :

import Image from "next/image";

// #contexts :

// #hooks :
import { MakeUrls } from "utils/MakeUrls";
// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Typography,
  Avatar,
} from "@material-ui/core";

// #other :
import { formatDistanceToNow } from "date-fns";

const useStyles = makeStyles({
  root: {},
});

const PostAuthor = (props) => {
  const { classes, author, createdAt, views } = props;

  const localClasses = useStyles();

  return (
    <Box
      aria-label="uploader"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      mx={4}
      my={2}
    >
      <Box display="flex" alignItems="center" mr={1}>
        <Avatar style={{ verticalAlign: "top" }}>
          <Image src={MakeUrls(author.photo)} width={40} height={40} />
        </Avatar>
      </Box>
      <Box display="flex" alignItems="center" mx={1}>
        <Typography variant="h1" color="primary" style={{ fontSize: "1em" }}>
          {author.username}
        </Typography>
        <Typography
          variant="h1"
          color="primary"
          style={{ margin: "0px 16px", fontSize: "1em" }}
        >
          |
        </Typography>
        <Typography variant="h1" color="primary" style={{ fontSize: "1em" }}>
          {formatDistanceToNow(new Date(createdAt))}
        </Typography>
      </Box>
      <Typography
        variant="h1"
        color="primary"
        style={{ margin: "8px 8px", fontSize: "1em" }}
      >
        |
      </Typography>
      <Box aria-label="view-comment" display="flex" alignItems="center">
        <Box aria-label="view" display="flex" alignItems="center" mx={1}>
          <Typography variant="h4">{views} views</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PostAuthor);
