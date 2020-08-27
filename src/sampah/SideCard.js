import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "100px",
    top: "70px",
    height: "200px",
    width: "240px",
    borderRadius: "10px",
    marginBottom: "220px",
    border: "solid 1px lightgrey",
    marginLeft: "15px",
    marginRight: "15px",
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
