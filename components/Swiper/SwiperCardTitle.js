import PropTypes from "prop-types";
// #next :
import Link from "next/link";
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
  const { title, width, slug } = props;

  return (
    <Box aria-label="title">
      <Link href={`posts/${slug}`}>
        <Typography
          variant={width === "xs" ? "caption" : "h5"}
          style={{ cursor: "pointer" }}
        >
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

SwiperCardTitle.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
};

export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(SwiperCardTitle)
);
