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
import { withStyles, Box } from "@material-ui/core";

// #other :

const SwiperCardCategory = (props) => {
  const { categories } = props;

  return (
    <Box
      aria-label="category-button"
      display="flex"
      alignItems="flex-start"
      my={2}
    >
      {categories.map((category, i) => (
        <Link href={`/category/${category.slug}`} key={i}>
          <Box mr={1}>
            <SMButton>{category.name}</SMButton>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

SwiperCardCategory.propTypes = {
  categories: PropTypes.array,
};

export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(SwiperCardCategory);
