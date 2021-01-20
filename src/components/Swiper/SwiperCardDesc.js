import PropTypes from "prop-types";
// #next :

// #contexts :

// #hooks :

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, Box } from "@material-ui/core";

// #other :

const SwiperCardDesc = (props) => {
  const { classes, content } = props;

  const handleBodyCharLimit = (text) => {
    let texts = [];
    for (let i = 0; i <= 200; i++) {
      texts.push(text[i]);
    }
    return texts.join("") + "...";
  };

  return (
    <Box aria-label="body-preview" my={2} width="50%">
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

export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(SwiperCardDesc);
