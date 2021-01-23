import React from "react";
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 400,
    marginRight: 24,
    marginBottom: 24,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SkillCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Meet the community
        </Typography>

        <Typography className={classes.pos} style={{ fontWeight: 500 }}>
          adjective
        </Typography>
        <Typography variant="h4" style={{ fontWeight: 400 }}>
          Get in touch with a vibrant community of enthusiast and builders.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
