import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(48),
      // boxShadow: "0px 8px 45px 0 rgba(31, 31, 31, 0.15)",
      height: (props) => theme.spacing(props.height),
      borderRadius: "14px",
      fontFamily: "Recursive",
      fontSize: "14px",
      userSelect: "none",
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
            <h3
              style={{ color: "rgba(61, 61, 61, 0.82)", marginBottom: "-8px" }}
            >
              Descriptions
            </h3>
            <p
              style={{
                lineHeight: 1.0,
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
                lineHeight: 1.0,
                color: "rgba(61, 61, 61, 0.62)",
                fontSize: "13px",
              }}
            >
              {data.features}
            </p>

            <div style={{ marginLeft: "200px", marginTop: "30px" }}>
              <Logo text="Github" rep="Repository" />
            </div>
          </div>
        </Grid>
      </Paper>
    </div>
  );
};

export default React.memo(DialProj);
