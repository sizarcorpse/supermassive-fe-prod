import { ThemeDistributor } from "styles/ThemeDistributor";
import withWidth from "@material-ui/core/withWidth";
import { makeStyles } from "@material-ui/core/styles";
import {
  withStyles,
  Box,
  Grid,
  Divider,
  Typography,
  IconButton,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";
const useStyles = makeStyles((theme) => ({
  ScuiIcon: {
    fontSize: 22,
    margin: "auto 16px",
    color: "#132743",
  },
  ScuiIconSingle: {
    fontSize: 20,
  },
  neckText: {
    fontSize: 13,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#132743",
    margin: theme.spacing(1),
  },
  bg: { backgroundColor: "#f9f7f7" },
}));

const Footer = (props) => {
  const { width } = props;

  const localClasses = useStyles();
  return (
    <Grid container component="main" className={localClasses.bg}>
      <Grid
        item
        xs={12}
        display="flex"
        style={{ marginTop: 24, marginBottom: 40 }}
      >
        <Divider style={{ marginTop: 24, marginBottom: 24 }} />

        <Box
          display="flex"
          mx={width !== "xs" ? 10 : 1}
          flexDirection={width !== "xs" ? "row" : "column"}
          className={localClasses.bg}
        >
          <Box display="flex" flexDirection="row" flexGrow={1} margin="auto">
            <Typography className={localClasses.neckText}>
              💀 2021, SizarCorpse
            </Typography>
            <Typography className={localClasses.neckText}> License</Typography>
            <Typography className={localClasses.neckText}> Terms</Typography>
            <Typography className={localClasses.neckText}> Privacy</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            mx={width !== "xs" ? 0 : "auto"}
          >
            <IconButton>
              <FacebookIcon className={localClasses.ScuiIconSingle} />
            </IconButton>

            <IconButton>
              <GitHubIcon className={localClasses.ScuiIconSingle} />
            </IconButton>

            <IconButton>
              <TwitterIcon className={localClasses.ScuiIconSingle} />
            </IconButton>

            <IconButton>
              <LinkedInIcon className={localClasses.ScuiIconSingle} />
            </IconButton>

            <IconButton>
              <LanguageIcon className={localClasses.ScuiIconSingle} />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(Footer)
);
