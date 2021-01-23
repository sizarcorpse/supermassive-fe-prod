// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
import Link from "next/link";
import Image from "next/image";
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :
import { MakeUrls } from "utils/MakeUrls";
// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Card,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Typography,
  ListItemSecondaryAction,
  IconButton,
  Box,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
// #other :
import _ from "lodash";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    minWidth: 405,
    maxWidth: 405,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "0px 16px",
    marginBottom: "24px",
  },
  item: {
    minWidth: 168,
    flex: "0 0 50%",
    cursor: "pointer",
    margin: "4px 0",
    justifySelf: "center",
  },
  barTitle: {
    fontSize: "30px",
    letterSpacing: "0px",
    wordSpacing: "0px",
    fontWeight: 700,
    fontStyle: "normal",
    fontVariant: "normal",
    textTransform: "capitalize",
    lineHeight: 1,
    overflowWrap: "break-word",
    wordWrap: "break-word",
    hyphens: "auto",
    color: "#a39f9f",
  },
});

const CategoryBar = (props) => {
  const { classes, categories } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();
  const variants = {
    hidden: { opacity: 1, backgroundColor: "#ffffff" },
    visible: { opacity: 1, backgroundColor: "#f5f4f4" },
  };
  return (
    <Card>
      <Box display="flex" justifyContent="center" width="100%" my={5}>
        <Typography className={localClasses.barTitle}>Categories</Typography>
      </Box>
      <List className={localClasses.root}>
        {_.slice(categories, 0).map((category, i) => (
          <motion.div
            initial={variants.hidden}
            whileHover={variants.visible}
            key={i}
          >
            <Link href={`/category/${category.slug}`}>
              <ListItem className={localClasses.item}>
                <ListItemAvatar className={localClasses.avatar}>
                  <Avatar>
                    {category.icon ? (
                      <Image
                        src={MakeUrls(category.icon)}
                        height={category.icon.height}
                        width={category.icon.width}
                      />
                    ) : (
                      <ImageIcon />
                    )}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="h2">{category.name}</Typography>
                  }
                />
              </ListItem>
            </Link>
          </motion.div>
        ))}
      </List>
    </Card>
  );
};
export default withStyles(
  (theme) => ({
    //   ...(theme)
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(CategoryBar);
