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
import CardMedia from "components/Card/CardMedia";

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Card,
  Box,
  Typography,
  Divider,
} from "@material-ui/core";

// #other :
import _ from "lodash";
const useStyles = makeStyles({
  root: {
    minWidth: 405,
    maxWidth: 405,
  },
  barTitle: {
    fontSize: "30px",
    letterSpacing: "0px",
    wordSpacing: "0px",
    fontWeight: 700,
    fontStyle: "normal",
    fontVariant: "normal",
    textTransform: "capitalize",
    lineHeight: 1,
    overflowWrap: "break-word",
    wordWrap: "break-word",
    hyphens: "auto",
    color: "#a39f9f",
  },
});

const FeaturedBar = (props) => {
  const { classes, posts } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();

  return (
    <Card className={localClasses.root}>
      <Box display="flex" justifyContent="center" width="100%" my={5}>
        <Typography className={localClasses.barTitle}>You May Like</Typography>
      </Box>
      <Box>
        {_.slice(posts, 0, 3).map((post, i) => (
          <Box key={i} style={{ margin: "24px 0px" }}>
            <CardMedia cover={post.cover} />
            <Typography
              variant="h4"
              color="primary"
              style={{ margin: "4px 8px" }}
            >
              {post.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
};
export default withStyles(
  (theme) => ({
    //   ...(theme)
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(FeaturedBar);
