// #next :

// #contexts :

// #hooks :

// #components :
import CardMedia from "./CardMedia";
import CardCategory from "./CardCategory";
import CardAuthor from "./CardAuthor";
import CardTitle from "./CardTitle";
import CardDesc from "./CardDesc";
import CardFooter from "./CardFooter";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Card, Box, Divider } from "@material-ui/core";

// #other :

const useStyles = makeStyles({
  card: { position: "relative", margin: "16px 16px", maxWidth: 405 },
});

const PostsCard = (props) => {
  const { post } = props;

  const localClasses = useStyles();

  return (
    <Card aria-label="main-card" className={localClasses.card}>
      <Box aria-label="main-content-area">
        <CardMedia cover={post.cover} photos={post.photos} />
        <CardCategory categories={post.categories} />
        <CardAuthor author={post.author} createdAt={post.createdAt} />
        <CardTitle title={post.title} id={post.id} slug={post.slug} />
        <CardDesc content={post.content} />
        <Divider style={{ margin: "0px 24px" }} />
        <CardFooter views={post.views} commentCounts={post.commentCounts} />
      </Box>
    </Card>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PostsCard);
