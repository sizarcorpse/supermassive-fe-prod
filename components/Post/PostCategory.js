// #next :

import Link from "next/link";

// #contexts :

// #hooks :
import { SMButton } from "components/UI";

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Typography, Box } from "@material-ui/core";

// #other :

const useStyles = makeStyles({
  root: {},
});

const PostCategory = (props) => {
  const { categories } = props;

  const localClasses = useStyles();

  return (
    <Box
      aria-label="category-button"
      display="flex"
      alignItems="center"
      my={4}
      mx={4}
    >
      {categories.map((category, i) => (
        <Box key={i} mx={1}>
          <SMButton>
            <Link href={`/category/${category.slug}`}>
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
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PostCategory);
