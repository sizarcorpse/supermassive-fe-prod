import PropTypes from "prop-types";
// #next :

// #contexts :

// #hooks :
import { handleBodyCharLimit } from "utils/handleBodyCharLimit";
// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, Box } from "@material-ui/core";

// #other :

const CardDesc = (props) => {
  const { classes, content } = props;

  return (
    <Box aria-label="body-preview" mx={3} my={3}>
      <div
        dangerouslySetInnerHTML={{ __html: `${handleBodyCharLimit(content)}` }}
        className={classes.try}
      />
    </Box>
  );
};

CardDesc.propTypes = {
  content: PropTypes.string,
};

export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(CardDesc);
