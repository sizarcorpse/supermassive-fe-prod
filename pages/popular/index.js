import { useState } from "react";
import Masonry from "react-masonry-css";

// #next :
import Head from "next/head";
import getConfig from "next/config";
import { useRouter } from "next/router";
// import Link from 'next/link';

import useSWR, { useSWRInfinite } from "swr";
// #hooks :
import { getPostsByPopular } from "actions/FetchPosts";

// #components :
import { PostsCard } from "components/Card";
import SwiperRoot from "components/Swiper/Swiper";
// #validations :

// #material-ui :
import { ThemeDistributor } from "../../styles/ThemeDistributor.js";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  Button,
  CircularProgress,
  Card,
  Typography,
} from "@material-ui/core";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import AutorenewIcon from "@material-ui/icons/Autorenew";
// #other :
import _ from "lodash";

const useStyles = makeStyles({
  backgroundColor: {
    backgroundColor: "#f9f7f7",
  },
  title: {
    fontFamily: "Ubuntu",
    fontSize: "3.5em",
    letterSpacing: -1.4,
    wordSpacing: 0,
    fontWeight: 300,
    textTransform: "capitalize",
    fontStyle: "normal",
    fontVariant: "normal",
    textAlign: "center",
    lineHeight: 1.3,
  },
  subtitle: {
    fontFamily: "Ubuntu",
    fontSize: "1.2em",
    letterSpacing: 1,
    wordSpacing: 1,
    fontWeight: 300,
    textTransform: "capitalize",
    fontStyle: "normal",
    fontVariant: "normal",
    textAlign: "center",
  },
});

// #serverSideProps :
const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
  const posts = await getPostsByPopular({
    context: context,
  });
  return {
    props: {
      posts,
    },
  };
}

const Popular = (props) => {
  const { classes, posts, width } = props;
  const localClasses = useStyles();

  const breakpointColumnsObj = {
    default: 4,
    700: 1,
    1100: 2,
    1500: 3,
  };

  // * this code will be needed when i overwrite strapi default and make page and new route..
  //   let items = 4;
  //   const { data, error, isValidating, mutate, size, setSize } = useSWRInfinite(
  //     (index) =>
  //       `${publicRuntimeConfig.ROOT_API_URL}/posts/page?_limit=${items}&_page=${
  //         index + 1
  //       }`,

  //     {
  //       revalidateOnFocus: false,
  //       initialData: posts,
  //     }
  //   );

  //   const allComments = data ? [].concat(...data) : [];
  //   const isLoadingInitialData = !data && !error;
  //   const isLoadingMore =
  //     isLoadingInitialData ||
  //     (size > 0 && data && typeof data[size - 1] === "undefined");
  //   const isEmpty = data?.[0]?.length === 0;
  //   const isReachingEnd =
  //     isEmpty || (data && data[data.length - 1]?.length < items);

  return (
    <Grid container components="main" className={localClasses.backgroundColor}>
      <Grid item xs={12}>
        <Box width={"100%"} display="flex" justifyContent="center">
          <Box mx={7} maxWidth={1700} width="100%">
            <Card style={{ padding: "32px 0px" }}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                flexShrink={1}
              >
                <Typography className={localClasses.title}>Popular</Typography>
                <Typography className={localClasses.subtitle}>
                  Posts in this page is featured and Popular.
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {posts.map((post, i) => (
            <div key={i}>
              <PostsCard post={post} />
            </div>
          ))}
        </Masonry>
      </Grid>
      {/* <Grid item xs={12}>
        <Box
          height={50}
          width="100%"
          display="flex"
          justifyContent="center"
          my={2}
        >
          <Button
            onClick={() => {
              setSize(size + 1);
            }}
            disabled={isReachingEnd}
          >
            {isLoadingMore ? (
              <CircularProgress />
            ) : isReachingEnd ? (
              "No More Post"
            ) : (
              <AutorenewIcon />
            )}
          </Button>
        </Box>
      </Grid> */}
    </Grid>
  );
};

export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(Popular)
);
