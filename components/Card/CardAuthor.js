import PropTypes from "prop-types";

// #next :
// import {useRouter} from 'next/router';
import Link from "next/link";
import Image from "next/image";
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :
import { MakeUrls } from "utils/MakeUrls";
// #components :
import { SMButton } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Typography,
  Avatar,
} from "@material-ui/core";

// #other :
import { formatDistanceToNow } from "date-fns";

const useStyles = makeStyles({
  root: {},
});

const CardAuthor = (props) => {
  const { classes, author, createdAt } = props;
  const localClasses = useStyles();

  return (
    <Box
      aria-label="uploader"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      height={50}
      mx={3}
      my={1}
    >
      <Box display="flex" alignItems="center" mx={1}>
        <Avatar>
          <Image
            src={MakeUrls(author.photo.formats.large)}
            width={500}
            height={500}
          />
        </Avatar>
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="h1" color="primary">
          {author.username}
        </Typography>
        <Typography variant="h1" color="primary" style={{ margin: "0px 8px" }}>
          |
        </Typography>
        <Typography variant="h1" color="primary">
          {formatDistanceToNow(new Date(createdAt))} ago
        </Typography>
      </Box>
    </Box>
  );
};

CardAuthor.propTypes = {
  author: PropTypes.object,
  createdAt: PropTypes.string,
};

export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(CardAuthor);
