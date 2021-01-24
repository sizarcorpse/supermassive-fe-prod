// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  withWidth,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Grid,
  Box,
  Typography,
  Container,
  Link,
  Card,
  TextareaAutosize,
} from "@material-ui/core";

// #other :

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.up("xs")]: {
      justifyContent: "center",
    },
  },
  paper: {
    [theme.breakpoints.down("xl")]: {
      maxWidth: "75%",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "75%",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "80%",
    },
    [theme.breakpoints.up("xs")]: {
      maxWidth: "95%",
    },

    padding: theme.spacing(4),
    marginTop: theme.spacing(8),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ContactForm = (props) => {
  const { classes, width } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();

  return (
    <Container
      component="main"
      maxWidth="md"
      className={localClasses.container}
    >
      <CssBaseline />
      <Card className={localClasses.paper}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="100%"
        >
          <Typography
            variant="h4"
            style={{
              fontSize: 28,
              fontWeight: "bold",
              lineHeight: 2.5,
            }}
          >
            Lets Talk
          </Typography>
          <Typography
            variant="h4"
            style={{ fontSize: 18, fontWeight: 400, lineHeight: 1.5 }}
          >
            Any question ? Please contact us.
          </Typography>
        </Box>
        <Box my={3}>
          <form className={localClasses.form} noValidate>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="companyName"
                  label="Company Name"
                  name="companyName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="website"
                  label="website"
                  name="website"
                />
              </Grid>

              <Grid item xs={12}>
                <TextareaAutosize
                  className={classes.TextAreaLarge}
                  required
                  label="Comment Body"
                  variant="outlined"
                  rowsMin={16}
                  aria-label="maximum height"
                  placeholder="Give me a nice cool review. (max 500 words)"
                  name="commentBody"
                  variant="outlined"
                  id="commentBody"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  style={{ fontWeight: 450, lineHeight: 1.5 }}
                >
                  By submitting this form you consent to us emailing you
                  occasionally about our products and services.You can
                  unsubscribe from emails at any time, and we will never pass
                  your email onto third parties. Privacy Policy
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Card>
    </Container>
  );
};
export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(ContactForm)
);
