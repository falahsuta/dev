import React, { useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import Logo from "../../about/Logo";
import logoContentLink from "../../about/logo-content-link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(55),
      height: (props) => theme.spacing(props.mobileHeight ?? props.height),
      borderRadius: "14px",
      fontFamily: "Recursive",
      fontSize: "14px",
      userSelect: "none",
      marginBottom: "20px",
      "@media (max-width:430px)": {
        width: theme.spacing(54),
        height: (props) => theme.spacing(((props.mobileHeight ?? props.height) || 0) + 4),
      },
    },
  },
}));

const MobileDialExpContent = (props) => {
  const { data } = props;
  const classes = useStyles(data);

  const rawDescriptions = data?.descriptions;

  const bulletItems = useMemo(() => {
    if (!Array.isArray(rawDescriptions)) return [];
    return rawDescriptions
      .filter((item) => typeof item === "string")
      .map((item) => item.trim())
      .filter(Boolean);
  }, [rawDescriptions]);

  const hasBullets = bulletItems.length > 0;

  const pageSize = 4;
  const totalPages = hasBullets && bulletItems.length > pageSize ? 2 : 1;
  const shouldPaginate = totalPages > 1;

  const [page, setPage] = useState(0);

  const visibleBullets = useMemo(() => {
    if (!hasBullets) return [];
    if (!shouldPaginate) return bulletItems;
    const start = page * pageSize;
    return bulletItems.slice(start, start + pageSize);
  }, [bulletItems, hasBullets, page, shouldPaginate]);

  const resumeLogo = logoContentLink.find((item) => item.key === "resume");

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
            <h4 style={{ color: "rgba(61, 61, 61, 0.79)" }}>{`Stacks: ${data.stacks}`}</h4>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              <h3 style={{ color: "rgba(61, 61, 61, 0.82)", marginBottom: "-3px" }}>
                Descriptions
              </h3>
            </div>

            {!hasBullets && (
              <p
                style={{
                  lineHeight: 1.1,
                  color: "rgba(61, 61, 61, 0.62)",
                  fontSize: "13px",
                }}
              >
                {typeof rawDescriptions === "string" ? rawDescriptions : ""}
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
                {visibleBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {shouldPaginate && (
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "18px",
                  color: "rgba(61, 61, 61, 0.62)",
                  fontSize: "13px",
                  userSelect: "none",
                }}
              >
                <button
                  type="button"
                  aria-label="Previous page"
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={page === 0}
                  style={{
                    border: 0,
                    padding: 0,
                    background: "transparent",
                    cursor: page === 0 ? "default" : "pointer",
                    opacity: page === 0 ? 0 : 1,
                    pointerEvents: page === 0 ? "none" : "auto",
                    color: "inherit",
                    fontSize: "22px",
                    lineHeight: 1,
                  }}
                >
                  <i className="ri-arrow-left-s-line" />
                </button>

                <span style={{ minWidth: "44px", textAlign: "center" }}>
                  {page + 1}/{totalPages}
                </span>

                <button
                  type="button"
                  aria-label="Next page"
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={page >= totalPages - 1}
                  style={{
                    border: 0,
                    padding: 0,
                    background: "transparent",
                    cursor: page >= totalPages - 1 ? "default" : "pointer",
                    opacity: page >= totalPages - 1 ? 0 : 1,
                    pointerEvents: page >= totalPages - 1 ? "none" : "auto",
                    color: "inherit",
                    fontSize: "22px",
                    lineHeight: 1,
                  }}
                >
                  <i className="ri-arrow-right-s-line" />
                </button>
              </div>
            )}

            <div
              style={{
                marginLeft: "255px",
                marginTop: data.header === "15-Puzzle Solver" ? "30px" : "25px",
              }}
            >
              <Logo
                text={resumeLogo?.text}
                rep={resumeLogo?.rep}
                linkto={resumeLogo?.href}
                iconClass={resumeLogo?.iconClass}
              />
            </div>
          </div>
        </Grid>
      </Paper>
    </div>
  );
};

export default React.memo(MobileDialExpContent);
