// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :
import { Privacy } from "components/TermsAndCondition";
// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Grid } from "@material-ui/core";

// #other :

const useStyles = makeStyles({
  root: {},
});

const PrivacyPage = (props) => {
  const { classes } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();

  return (
    <>
      <Grid container style={{ backgroundColor: "#f9f7f7" }}>
        <Grid item xl={3} />
        <Grid item xl={6}>
          <div
            dangerouslySetInnerHTML={{ __html: `${Privacy}` }}
            className={classes.try}
            style={{ background: "none" }}
          />
        </Grid>
        <Grid item xl={3} />
      </Grid>
    </>
  );
};
export default withStyles(
  (theme) => ({
    //   ...(theme)
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PrivacyPage);
