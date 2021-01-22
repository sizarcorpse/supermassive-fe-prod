// #components :
import { Head } from "../Head";
import { Nav } from "../Nav";

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles } from "@material-ui/core";

const Header = (props) => {
  const { classes, closeMe, handleNavSmallModalClose, categories } = props;

  return (
    <>
      <Head />
      <Nav categories={categories} />
    </>
  );
};

export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Header);
