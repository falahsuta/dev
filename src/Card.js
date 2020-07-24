import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    height: "200px",
    width: "240px",
    borderRadius: "15px",
    marginBottom: "20px",
    border: "solid 1px lightgrey",
    marginLeft: "30px",
    marginRight: "30px",
  },
});

export default () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}></div>
    </div>
  );
};
