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
import PostMedia from "./PostMedia";
import PostTitle from "./PostTitle";
import PostAuthor from "./PostAuthor";
import PostGallery from "./PostGallery";
import PostDesc from "./PostDesc";
import PostCategory from "./PostCategory";

import { CreateComment } from "components/Comment";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Card,
  Grid,
  CssBaseline,
  Box,
  Divider,
} from "@material-ui/core";

// #other :

const useStyles = makeStyles({
  card: { margin: "0px 24px" },
});

const PostDetails = (props) => {
  const { post } = props;
  const localClasses = useStyles();

  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid item xs={12}>
        <Card className={localClasses.root}>
          <Box aria-label="main-content" width="100%">
            <PostMedia cover={post.cover} />
            <PostTitle title={post.title} />

            <PostAuthor
              author={post.author}
              createdAt={post.createdAt}
              views={post.views}
            />

            {post.photos.length > 0 && <PostGallery gallery={post.photos} />}

            <PostDesc content={post.content} />
            <Divider />
            <PostCategory categories={post.categories} />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <CreateComment />
      </Grid>
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PostDetails);
