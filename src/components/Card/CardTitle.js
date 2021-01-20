import PropTypes from "prop-types";

// #next :
import Link from "next/link";

// #contexts :

// #hooks :

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";

// #other :

const useStyles = makeStyles({
  root: {},
});

const CardTitle = (props) => {
  const { title, id, slug } = props;

  return (
    <Box aria-label="title" mx={3} my={2}>
      <Link href={`/post/${id}`}>
        <Typography variant="h3" style={{ cursor: "pointer" }}>
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

CardTitle.propTypes = {
  author: PropTypes.object,
  id: PropTypes.string,
  slug: PropTypes.string,
};

export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(CardTitle);
