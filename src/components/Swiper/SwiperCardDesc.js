import PropTypes from "prop-types";
// #next :

// #contexts :

// #hooks :

// #components :

// #validations :

// #material-ui :
import withWidth from "@material-ui/core/withWidth";
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, Box } from "@material-ui/core";

// #other :

const SwiperCardDesc = (props) => {
  const { classes, content, width } = props;

  const handleBodyCharLimit = (text) => {
    let texts = [];
    for (let i = 0; i <= 200; i++) {
      texts.push(text[i]);
    }
    return texts.join("") + "...";
  };

  return (
    <Box
      aria-label="body-preview"
      my={2}
      width={width === "xs" ? "100%" : "50%"}
    >
      <div
        dangerouslySetInnerHTML={{ __html: `${handleBodyCharLimit(content)}` }}
        className={classes.try2}
      />
    </Box>
  );
};

SwiperCardDesc.propTypes = {
  content: PropTypes.string,
};

export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(SwiperCardDesc)
);
