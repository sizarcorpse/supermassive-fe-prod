// #next :
import Head from "next/head";
import { useRouter } from "next/router";
// import Link from 'next/link';
// import useSWR, { useSWRInfinite } from "swr";

// #hooks :
import { getPostsByCategory } from "actions/FetchPosts";
import { FlexColumn } from "utils/FlexColumn";
// #components :
import { PostsCard } from "components/Card";
import { NoContent } from "components/NoContent";
// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor.js";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  Card,
  Typography,
} from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";

// #other :
import _ from "lodash";
import Masonry from "react-masonry-css";

const useStyles = makeStyles({
  backgroundColor: {
    backgroundColor: "#f9f7f7",
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
  const { classes, posts, categoryDetails, width } = props;
  const localClasses = useStyles();

  return (
    <Grid container components="main" className={localClasses.backgroundColor}>
      <Head>
        <title>
          This is a personal blog website site. Developed by sizarcorpse.
        </title>
        <meta
          name="description"
          content="This is a personal blog website site. Developed by sizarcorpse. Developer used Strapi as Headless cms, Nextjs as front-end, Vercel as cloud platform and mongodb as database"
        />
      </Head>

      <Grid item xs={12}>
        <Box width={"100%"} display="flex" justifyContent="center">
          <Box mx={width === "xs" ? 1 : 7} maxWidth={1700} width="100%">
            <Card style={{ padding: "32px 0px" }}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                flexShrink={1}
              >
                <Typography className={classes.page_title}>
                  Category : {categoryDetails.categoryName}
                </Typography>
                <Typography className={classes.page_subtitle}>
                  Posts in this category featured and editor choice.
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {posts && posts.length !== 0 ? (
          <Masonry
            breakpointCols={FlexColumn}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {posts.map((post, i) => (
              <div key={i}>
                <PostsCard post={post} />
              </div>
            ))}
          </Masonry>
        ) : (
          <NoContent />
        )}
      </Grid>
      <Grid item xs={12}>
        <Box
          height={50}
          width="100%"
          display="flex"
          justifyContent="center"
          my={2}
        ></Box>
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
