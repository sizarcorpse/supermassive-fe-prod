// #next :
import getConfig from "next/config";
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :
import { getASinglePost } from "actions/FetchPosts";
// #components :
import { PostDetails } from "components/Post";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Grid, Box, Card } from "@material-ui/core";

// #other :

// #serverSideProps :
export async function getServerSideProps(context) {
  const slug = context.query.slug;
  const post = await getASinglePost({ context: context, slug: slug });
  return {
    props: { post },
  };
}

const useStyles = makeStyles({
  root: {},
});

const Post = (props) => {
  const { classes, post } = props;
  const localClasses = useStyles();

  return (
    <Grid
      container
      components="main"
      style={{ backgroundColor: "#f9f7f7", display: "flex" }}
    >
      <Grid item xs={false} sm={false} md={false} lg={false} xl={1} />
      <Grid item xl={6} lg={8} md={7} sm={12} xs={12}>
        <Box width="100%" height="100%">
          <PostDetails post={post} />
        </Box>
      </Grid>
      <Grid item xl={4} lg={4} md={5} sm={12} xs={12}>
        <Box width="100%" display="flex" justifyContent="center" mb={5}>
          <Card>{/* <Reactions postx={post} /> */}</Card>
        </Box>
      </Grid>
      <Grid item xs={false} sm={false} md={false} lg={false} xl={1} />
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Post);
