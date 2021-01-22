// #next :
import getConfig from "next/config";
import Image from "next/image";
// #contexts :

// #hooks :

// #components :
import SwiperCardMedia from "./SwiperCardMedia";
import SwiperCardTitle from "./SwiperCardTitle";
import SwiperCardAuthor from "./SwiperCardAuthor";
import SwiperCardDesc from "./SwiperCardDesc";
import SwiperCardCategory from "./SwiperCardCategory";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, Box, Card } from "@material-ui/core";

// #other :

// #mainFunction :

const SwiperCard = (props) => {
  const { publicRuntimeConfig } = getConfig();
  const { editorChoice: post, classes } = props;

  return (
    <Card
      aria-label="main-card"
      style={{
        position: "relative",
        maxWidth: 1700,
        maxHeight: 860,
      }}
    >
      <Box aria-label="main-content-area">
        <SwiperCardMedia cover={post.cover} />
        <Box aria-label="details" className={classes.swiper_card_details}>
          <SwiperCardCategory categories={post.categories} />
          <SwiperCardTitle title={post.title} />
          <SwiperCardDesc content={post.content} />
          <SwiperCardAuthor
            author={post.author}
            views={post.views}
            createdAt={post.createdAt}
            commentCounts={post.commentCounts}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default withStyles(
  (theme) => ({
    // ...MuiNav(theme),
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(SwiperCard);
