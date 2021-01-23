// #next :
import Head from "next/head";
// import getConfig from "next/config";
// import { useRouter } from "next/router";
// import Link from 'next/link';
// import useSWR, { useSWRInfinite } from "swr";
// #hooks :
import { getPostsByPopular } from "actions/FetchPosts";
import { FlexColumn } from "utils/FlexColumn";
// #components :
import { PostsCard } from "components/Card";
import { NoContent } from "components/NoContent";
// #validations :

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
import Masonry from "react-masonry-css";

const useStyles = makeStyles({
  backgroundColor: {
    backgroundColor: "#f9f7f7",
  },
});

// #serverSideProps :
// const { publicRuntimeConfig } = getConfig();

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
                <Typography className={classes.page_title}>Popular</Typography>
                <Typography className={classes.page_subtitle}>
                  Posts in this page is featured and Popular.
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
