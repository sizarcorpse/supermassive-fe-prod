import PropTypes from "prop-types";

// #next :
import Link from "next/link";

// #contexts :

// #hooks :

// #components :
import { SMButton } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";

// #other :

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: "24px",
    left: "7%",
  },
});

const CardCategory = (props) => {
  const { categories } = props;
  const localClasses = useStyles();

  return (
    <Box
      aria-label="category"
      display="flex"
      alignItems="flex-start"
      className={localClasses.root}
    >
      {categories.map((category, i) => (
        <Box key={i} mr={1} style={{ zIndex: 100 }}>
          <SMButton>
            <Link
              href={{
                pathname: `/category/${category.slug}`,
              }}
            >
              <Typography variant="button" style={{ fontSize: 13 }}>
                {category.name}
              </Typography>
            </Link>
          </SMButton>
        </Box>
      ))}
    </Box>
  );
};

CardCategory.propTypes = {
  category: PropTypes.array,
};

export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(CardCategory);
