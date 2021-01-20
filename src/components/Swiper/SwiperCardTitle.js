import PropTypes from "prop-types";
// #next :

// #contexts :

// #hooks :

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, Box, Typography } from "@material-ui/core";

// #other :

const SwiperCardTitle = (props) => {
  const { title } = props;

  return (
    <Box aria-label="title">
      <Typography variant="h5">{title}</Typography>
    </Box>
  );
};

SwiperCardTitle.propTypes = {
  title: PropTypes.string,
};

export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(SwiperCardTitle);
