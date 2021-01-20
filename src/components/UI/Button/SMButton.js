import _ from "lodash";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    zIndex: 2000,
    borderRadius: 50,
    backgroundColor: (props) => props.bgColor,
    color: "#ffffff",
    textDecoration: "none",
  },
});

const SMButton = (props) => {
  const { children, variant } = props;

  const colors = [
    "#2ECC71",
    "#C0392B",
    "#9B59B6",
    "#F39C12",
    "#16A085",
    "#E74C3C",
    "#27AE60",
    "#D35400",
    "#F1C40F",
    "#2980B9",
    "#8E44AD",
    "#3498DB",
    "#1ABC9C",
    "#27AE60",
    "#E67E22",
  ];

  const bgColor = _.sample(colors);

  const classes = useStyles({ bgColor });

  return (
    <Button variant="contained" className={classes.root} size="small">
      {children}
    </Button>
  );
};

export default SMButton;
