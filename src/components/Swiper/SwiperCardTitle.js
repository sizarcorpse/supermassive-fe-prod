import PropTypes from "prop-types";
// #next :

// #contexts :

// #hooks :

// #components :

// #validations :

// #material-ui :
import withWidth from "@material-ui/core/withWidth";
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, Box, Typography } from "@material-ui/core";

// #other :

const SwiperCardTitle = (props) => {
  const { title, width } = props;

  return (
    <Box aria-label="title">
      <Typography variant={width === "xs" ? "caption" : "h5"}>
        {title}
      </Typography>
    </Box>
  );
};

SwiperCardTitle.propTypes = {
  title: PropTypes.string,
};

export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(SwiperCardTitle)
);
