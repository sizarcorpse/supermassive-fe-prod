import PropTypes from "prop-types";

// #next :

// #contexts :

// #hooks :

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, Box, IconButton, Typography } from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";

// #other :

const CardDesc = (props) => {
  const { views, commentCounts } = props;

  return (
    <Box aria-label="foot" mx={3} my={3} display="flex">
      <Box
        aria-label="popup-reactions"
        display="flex"
        flexGrow={1}
        alignItems="center"
      >
        <IconButton>
          <VisibilityOutlinedIcon />
        </IconButton>
        <Typography variant="h4">{views}</Typography>
      </Box>

      <Box aria-label="view-comment" display="flex" alignItems="center">
        <Box aria-label="comment" display="flex" alignItems="center" mx={1}>
          <IconButton>
            <CommentOutlinedIcon />
          </IconButton>
          <Typography variant="h4">{commentCounts}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

CardDesc.propTypes = {
  views: PropTypes.number,
  commentCounts: PropTypes.number,
};

export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(CardDesc);
