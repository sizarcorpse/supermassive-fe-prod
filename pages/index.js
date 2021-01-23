import Masonry from "react-masonry-css";

// #next :
import Head from "next/head";
import getConfig from "next/config";
// import { useRouter } from "next/router";
// import Link from 'next/link';
import { useSWRInfinite } from "swr";
// #hooks :
import { getAllPosts, getEditorsChoicePost } from "actions/FetchPosts";
import { FlexColumn } from "utils/FlexColumn";
// #components :
import { PostsCard } from "components/Card";
import SwiperRoot from "components/Swiper/Swiper";
import { NoContent } from "components/NoContent";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor.js";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  Button,
  CircularProgress,
} from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import AutorenewIcon from "@material-ui/icons/Autorenew";
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
  const posts = await getAllPosts({ context: context, limit: 4, page: 1 });
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

  // #handlers : Infinity Scroll
  let items = 4;
  const { data, error, isValidating, mutate, size, setSize } = useSWRInfinite(
    (index) =>
      `${publicRuntimeConfig.ROOT_API_URL}/posts/page?_limit=${items}&_page=${
        index + 1
      }`,

    {
      revalidateOnFocus: false,
      initialData: posts,
    }
  );
  const concatPostsData = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < items);

  return (
    <Grid container components="main" className={localClasses.backgroundColor}>
      <Grid item xs={12}>
        {editorChoices || editorChoices.length > 0 ? (
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <SwiperRoot editorChoices={editorChoices} />
          </Box>
        ) : null}
      </Grid>
      <Grid item xs={12}>
        {data && data.length !== 0 ? (
          <Masonry
            breakpointCols={FlexColumn}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {concatPostsData.map((post, i) => (
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
