import { useState } from "react";

// #next :
import Head from "next/head";
import getConfig from "next/config";
import { useRouter } from "next/router";
// import Link from 'next/link';
// import Image from 'next/image';
import useSWR, { trigger } from "swr";
// #hooks :
import { getAllPosts, getEditorsChoicePost } from "actions/FetchPosts";
// import { useFlexGrid } from "utils/useFlexGrid";
// #components :
import { PostsCard } from "components/Card";
import SwiperRoot from "components/Swiper/Swiper";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

// #other :
import _ from "lodash";

const useStyles = makeStyles({
  backgroundColor: {
    backgroundColor: "#f9f7f7",
  },
});

// #serverSideProps :
const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
  const posts = await getAllPosts({ context });
  const editorChoices = await getEditorsChoicePost({ context });

  return {
    props: {
      posts,
      editorChoices,
    },
  };
}

const Home = (props) => {
  const { classes, posts, width, editorChoices } = props;
  const localClasses = useStyles();

  // const result = useFlexGrid(posts, posts.length / 4);

  const useFlexGrid = (givenArray, chunkSize) => {
    let index = 0;
    const arrayLength = givenArray.length;
    const rearrangeArray = [];
    for (index = 0; index < arrayLength; index += chunkSize) {
      let myChunk = givenArray.slice(index, index + chunkSize);
      rearrangeArray.push(myChunk);
    }
    return rearrangeArray;
  };

  const result = useFlexGrid(posts, posts.length / 4);

  return (
    <Grid container components="main" className={localClasses.backgroundColor}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center" width="100%">
          <SwiperRoot editorChoices={editorChoices} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box mx={5}>
          <Box
            aria-label="all-post"
            justifyContent="center"
            className={classes.flexBox_root}
          >
            {_.shuffle(result).map((subset, i) => (
              <Box className={classes.flexBox_column} key={i}>
                {subset.map((post, i) => (
                  <PostsCard post={post} key={i} />
                ))}
              </Box>
            ))}
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
  )(Home)
);
