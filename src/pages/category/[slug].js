import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";

// #next :
import Head from "next/head";
import getConfig from "next/config";
import { useRouter } from "next/router";
// import Link from 'next/link';
import useSWR, { useSWRInfinite } from "swr";

// #hooks :
import { getPostsByCategory } from "actions/FetchPosts";

// #components :
import { PostsCard } from "components/Card";
import SwiperRoot from "components/Swiper/Swiper";

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
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
export async function getServerSideProps(context) {
  const res = await getPostsByCategory({
    context: context,
    limit: 10,
    page: 1,
  });

  return {
    props: {
      posts: res.posts,
      categoryDetails: {
        categoryName: res.name,
        categoryId: res._id,
      },
    },
  };
}

const Category = (props) => {
  const { classes, posts, width, categoryDetails } = props;
  const localClasses = useStyles();
  const router = useRouter();

  const breakpointColumnsObj = {
    default: 4,
    700: 1,
    1100: 2,
    1500: 3,
  };

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
                <Typography className={localClasses.title}>
                  Category : {categoryDetails.categoryName}
                </Typography>
                <Typography className={localClasses.subtitle}>
                  Posts in this category featured and editor choice.
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
      <Grid item xs={12}>
        <Box
          height={50}
          width="100%"
          display="flex"
          justifyContent="center"
          my={2}
        >
          {/* <Button
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
          </Button> */}
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
  )(Category)
);
