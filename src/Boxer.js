import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container, Grid } from "@material-ui/core";

import Content from "./Content";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      borderRadius: "20px",
      width: theme.spacing(99),
      height: theme.spacing(55),
      boxShadow: "0px 8px 45px 0 rgba(31, 31, 31, 0.15)",
    },
  },
}));

export default function Boxer() {
  const classes = useStyles();

  const spacing = (num) => {
    return <div style={{ marginTop: "3px", width: "30px", height: num }}></div>;
  };

  return (
    <Container>
      {spacing(43)}

      <Grid container direction="row" justify="center" alignItems="center">
        <div className={classes.root}>
          <Paper elevation={0}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="flex-start"
            >
              <Grid items xs={9}>
                <div style={{ marginLeft: "60px" }}>
                  <Content />
                </div>
              </Grid>
              <Grid items xs={3}>
                <div style={{ marginRight: "100px", marginTop: "130px" }}>
                  <Sidebar />
                </div>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Grid>
    </Container>
  );
}
