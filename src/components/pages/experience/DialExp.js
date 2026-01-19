import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import Logo from "../about/Logo";

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

  const hasBullets = Array.isArray(data?.descriptions);

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <Grid container direction="column" justify="center" alignItems="flex-start">
          <div
            style={{
              width: "85%",
              margin: "0 auto",
              marginTop: "16px",
              marginLeft: "32px",
            }}
          >
            <h2 style={{ color: "rgba(61, 61, 61, 0.82)" }}>
              My Experience in {props.header}
            </h2>
            <h4 style={{ color: "rgba(61, 61, 61, 0.79)" }}>
              {`Stacks: ${data.stacks}`}
            </h4>

            <h3 style={{ color: "rgba(61, 61, 61, 0.82)", marginBottom: "-5px" }}>
              Descriptions
            </h3>

            {!hasBullets && (
              <p
                style={{
                  lineHeight: 1.1,
                  color: "rgba(61, 61, 61, 0.62)",
                  fontSize: "13px",
                }}
              >
                {data?.descriptions || ""}
              </p>
            )}

            {hasBullets && (
              <ul
                style={{
                  marginTop: "8px",
                  paddingLeft: "18px",
                  lineHeight: 1.4,
                  color: "rgba(61, 61, 61, 0.62)",
                  fontSize: "13px",
                }}
              >
                {data.descriptions
                  .filter((item) => typeof item === "string" && item.trim())
                  .map((item) => (
                    <li key={item}>{item}</li>
                  ))}
              </ul>
            )}

            <div
              style={{
                marginLeft: "255px",
                marginTop: data.header === "15-Puzzle Solver" ? "30px" : "25px",
              }}
            >
              <Logo
                text="Resume"
                rep="Resume/CV"
                linkto="https://instagram.com/falahsutawindaya"
                iconClass={{line: "ri-suitcase-line", fill: "ri-suitcase-fill"}}
              />
            </div>
          </div>
        </Grid>
      </Paper>
    </div>
  );
};

export default React.memo(DialProj);
