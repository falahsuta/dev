import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(55),
      // boxShadow: "0px 8px 45px 0 rgba(31, 31, 31, 0.15)",
      height: (props) => theme.spacing(props.height),
      borderRadius: "14px",
      fontFamily: "Recursive",
      fontSize: "14px",
      userSelect: "none",
      marginBottom: "20px",
    },
  },
}));

const DialProj = (props) => {
  const { data } = props;
  const classes = useStyles(data);

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <div
            style={{
              width: "85%",
              margin: "0 auto",
              marginTop: "16px",
              marginLeft: "32px",
            }}
          >
            <h2 style={{ color: "rgba(61, 61, 61, 0.82)" }}>{props.header}</h2>
            <h4 style={{ color: "rgba(61, 61, 61, 0.79)" }}>
              {`Stacks: ${data.stacks}`}
            </h4>
            <div style={{ height: "180px" }}>
              <img
                style={{
                  borderRadius: "8px",
                  marginLeft: "25px",
                  marginBottom: "-5px",
                  cursor: "pointer",
                }}
                onClick={() => window.open(data.giflink, "_blank")}
                src={data.gif}
              />
            </div>
            <p
              style={{
                color: "rgba(61, 61, 61, 0.70)",
                marginLeft: "98px",
                marginBottom: "-5px",
                fontSize: "11px",
              }}
            >
              (Click the image for clarity)
            </p>

            <h3
              style={{ color: "rgba(61, 61, 61, 0.82)", marginBottom: "-5px" }}
            >
              Descriptions
            </h3>
            <p
              style={{
                lineHeight: 1.1,
                color: "rgba(61, 61, 61, 0.62)",
                fontSize: "13px",
              }}
            >
              {data.descriptions}
            </p>
            <h3
              style={{ color: "rgba(61, 61, 61, 0.82)", marginBottom: "-8px" }}
            >
              Features
            </h3>
            <p
              style={{
                lineHeight: 1.1,
                color: "rgba(61, 61, 61, 0.62)",
                fontSize: "13px",
              }}
            >
              {data.features}
            </p>

            <div
              style={{
                marginLeft: "255px",
                marginTop: data.header === "15-Puzzle Solver" ? "30px" : "25px",
              }}
            >
              {/* <div style={{ marginLeft: "255px", marginTop: "32px" }}> */}
              <Logo text="Github" rep="Repository" linkto={data.linkto} />
            </div>
          </div>
        </Grid>
      </Paper>
    </div>
  );
};

export default React.memo(DialProj);
