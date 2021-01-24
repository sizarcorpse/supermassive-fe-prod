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
import { ContactForm, SkillCard } from "components/Contact";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  Typography,
  withWidth,
} from "@material-ui/core";

// #other :
import Lottie from "react-lottie";
import animationData from "utils/lottie/36431-support";

const useStyles = makeStyles({
  root: {},
});

const Contact = (props) => {
  const { classes, width } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container style={{ backgroundColor: "#f9f7f7" }}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <ContactForm />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="100%"
          mt={8}
        >
          <Box maxWidth={400} mt={2} mb={8}>
            <Typography
              variant="h4"
              style={{
                fontSize: 40,
                fontWeight: "bold",
              }}
            >
              How can we help?
            </Typography>
            <br />
            <Typography
              variant="h4"
              style={{
                fontSize: 18,
                fontWeight: 400,

                lineHeight: 1,
              }}
            >
              We’re here to help and answer any question you might have, We look
              forward to hearing from you
            </Typography>
          </Box>

          {[1, 2, 3].map((i) => (
            <SkillCard key={i} />
          ))}
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
  )(Contact)
);
