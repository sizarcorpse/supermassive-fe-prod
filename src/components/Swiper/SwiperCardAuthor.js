import PropTypes from "prop-types";
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
  IconButton,
  Typography,
  Avatar,
} from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";

// #other :
import { formatDistanceToNow } from "date-fns";

const useStyles = makeStyles({
  root: {},
});

const SwiperCardAuthor = (props) => {
  const { classes, author, views, commentCounts, createdAt } = props;

  const localClasses = useStyles();

  return (
    <Box aria-label="view-comment" display="flex" alignItems="center">
      <Box display="flex" alignItems="center" mx={1}>
        <Avatar>
          <Image
            src={MakeUrls(author.photo.formats.small)}
            width={40}
            height={40}
          />
        </Avatar>
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="h6">{author.username}</Typography>
        <Typography variant="h6" style={{ margin: "0px 5px" }}>
          |
        </Typography>
        <Typography variant="h6">
          {formatDistanceToNow(new Date(createdAt))}
        </Typography>
      </Box>
      <Box aria-label="view" display="flex" alignItems="center" mr={3}>
        <IconButton>
          <VisibilityOutlinedIcon style={{ color: "white" }} />
        </IconButton>
        <Typography variant="h6">{views}</Typography>
      </Box>
      <Box aria-label="comment" display="flex" alignItems="center" mr={3}>
        <IconButton>
          <CommentOutlinedIcon style={{ color: "white" }} />
        </IconButton>
        <Typography variant="h6">{commentCounts}</Typography>
      </Box>
    </Box>
  );
};

SwiperCardAuthor.propTypes = {
  author: PropTypes.object,
  views: PropTypes.number,
  commentCount: PropTypes.number,
  createdAt: PropTypes.string,
};

export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(SwiperCardAuthor);
