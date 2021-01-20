// #next :

import Image from "next/image";

// #contexts :

// #hooks :
import { MakeUrls } from "utils/MakeUrls";

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box } from "@material-ui/core";

// #other :

const useStyles = makeStyles({
  root: {},
});

const PostMedia = (props) => {
  const { classes, cover } = props;

  const localClasses = useStyles();

  return cover ? (
    <Box
      aria-label="cover-photo"
      width="100%"
      display="flex"
      justifyContent="center"
      style={{
        backgroundImage: `url(${MakeUrls(cover.formats.large)})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backdropFilter: "blur(100px)",
        maxHeight: 600,
        overflow: "hidden",
      }}
    >
      <Image
        src={MakeUrls(cover)}
        height={cover.formats.large.height}
        width={cover.formats.large.width}
        layout="fixed"
      />
    </Box>
  ) : null;
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PostMedia);
