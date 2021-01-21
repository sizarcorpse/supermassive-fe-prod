import PropTypes from "prop-types";
// #next :

import Image from "next/image";

// #contexts :

// #hooks :
import { MakeUrls } from "utils/MakeUrls";

// #components :

// #validations :

// #material-ui :
import withWidth from "@material-ui/core/withWidth";
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box } from "@material-ui/core";

// #other :

const SwiperCardMedia = (props) => {
  const { cover, width } = props;

  return (
    <Box aria-label="card-header">
      {cover ? (
        <Box aria-label="card-image" minHeight={361}>
          <Image
            src={MakeUrls(cover)}
            width={width === "xs" ? undefined : cover.width}
            height={width === "xs" ? undefined : cover.height}
            layout={width === "xs" ? "fill" : undefined}
          />
        </Box>
      ) : (
        <Box aria-label="card-image" maxWidth={"100%"} height={60}></Box>
      )}
    </Box>
  );
};

SwiperCardMedia.propTypes = {
  cover: PropTypes.object,
};

export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(SwiperCardMedia)
);
