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
import { withStyles, Box } from "@material-ui/core";

// #other :

const CardMedia = (props) => {
  const { cover, photos } = props;

  return (
    <Box aria-label="card-header">
      {photos.length > 0 ? (
        {
          /* <SwiperMini photos={post.gallery} /> */
        }
      ) : cover ? (
        <Box aria-label="card-image">
          <Image
            src={MakeUrls(cover)}
            width={cover.width}
            height={cover.height}
          />
        </Box>
      ) : (
        <Box aria-label="card-image" maxWidth={405} height={60}></Box>
      )}
    </Box>
  );
};

CardMedia.propTypes = {
  cover: PropTypes.object,
  photos: PropTypes.array,
};

export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(CardMedia);
