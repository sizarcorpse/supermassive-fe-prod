import { useState } from "react";
// #next :
import getConfig from "next/config";
// import {useRouter} from 'next/router';
import Link from "next/link";
import Image from "next/image";

// #contexts :
// #hooks :
import { MakeUrls } from "utils/MakeUrls";
// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Typography,
  ListItemSecondaryAction,
  IconButton,
  Box,
  MenuItem,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// #other :
import _ from "lodash";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    // minWidth: 580,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    flex: "0 0 50%",
    cursor: "pointer",
    margin: "4px 0",
  },
  itemAlt: {
    flex: "0 0 45%",
    cursor: "pointer",
    "&:hover": {
      color: "#fc415e",
    },
  },
  avatar: {
    "& .MuiAvatar-root": {
      height: 45,
      width: 45,
    },
  },
});

const NavCategories = (props) => {
  const { classes, categories } = props;
  const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();
  const [showCat, setShowCat] = useState(7);

  const variants = {
    hidden: { opacity: 1, backgroundColor: "#ffffff" },
    visible: { opacity: 1, backgroundColor: "#f5f4f4" },
  };

  return (
    <List className={localClasses.root}>
      {_.slice(categories, 0, showCat).map((category, i) => (
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
                primary={<Typography variant="h2">{category.name}</Typography>}
                secondary={
                  <Typography variant="h1">This is how it going go</Typography>
                }
              />
            </ListItem>
          </Link>
        </motion.div>
      ))}
      <Box
        display="flex"
        alignItems="center"
        style={{ backgroundColor: "#ffffff" }}
      >
        <ListItem className={localClasses.itemAlt}>
          <ListItemText
            primary={<Typography variant="h2">Show More Categories</Typography>}
            secondary={
              <Typography variant="h1">Click here for more</Typography>
            }
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" size="small">
              <ArrowForwardIcon fontSize="small" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Box>
    </List>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(NavCategories);
