import React, { useState } from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import { Dialog, Paper, Slide } from "@material-ui/core";

import DialProj from "./DialProj";
import { detailData } from "./exp-data-detail";

const useStyles = makeStyles(({ breakpoints, spacing, palette, typography }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2),
    transition: "0.3s",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
    position: "relative",
    marginLeft: "auto",
    overflow: "initial",
    background: "rgba(249, 249, 249, 0.9)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 340,
    [breakpoints.up("xs")]: {
      flexDirection: "row",
    },
  },
  media: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "42%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("xs")]: {
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
      borderRadius: spacing(2),
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
  headingTight: {
    lineHeight: 1.25,
    marginBottom: -10,
  },
  meta: {
    color: palette.text.secondary,
    fontSize: typography.pxToRem(13),
    lineHeight: 1.25,
    marginTop: spacing(-1),
    marginBottom: spacing(1),
    whiteSpace: "pre-line",
  },
  desc: {
    marginTop: spacing(2),
    marginBottom: spacing(3.5),
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    minWidth: 0,
  },
  headerLogo: {
    width: 45,
    height: 45,
    objectFit: "contain",
    flex: "0 0 auto",
    marginLeft: spacing(0.2),
    marginTop: spacing(0.5),
    marginRight: spacing(1.0),
  },
  headerText: {
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PortoCard = (props) => {
  const styles = useStyles();
  const [openClick, setOpenClick] = useState(false);
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();

  const handleClickClose = () => {
    setOpenClick(false);
  };

  const metaText = props.splitMeta
    ? [props.role, props.tenure].filter(Boolean).join("\n")
    : [props.role, props.tenure].filter(Boolean).join(" | ");

  return (
    <>
      <div style={{ userSelect: "none" }}>
        <Paper elevation={0} className={cx(styles.root, shadowStyles.root)}>
          <CardContent>
            <TextInfoContent
              classes={contentStyles}
              heading={
                <span className={styles.headerRow}>
                  {props.logo && (
                    <img
                      src={props.logo}
                      alt={`${props.header} logo`}
                      className={styles.headerLogo}
                    />
                  )}
                  <span className={styles.headerText}>{props.header}</span>
                </span>
              }
              body={null}
              headingProps={{ className: styles.headingTight }}
            />
            {metaText && (
              <Typography variant="body2" className={styles.meta}>
                {metaText}
              </Typography>
            )}
            <TextInfoContent
              classes={contentStyles}
              heading={null}
              body={props.text}
              bodyProps={{ className: styles.desc }}
            />
            <Button onClick={() => setOpenClick(true)} className={buttonStyles}>
              Experience Details
            </Button>
          </CardContent>
        </Paper>
      </div>
      <Dialog
        open={openClick}
        TransitionComponent={Transition}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth="lg"
        scroll="paper"
        disableScrollLock
        PaperComponent={() => (
          <DialProj header={props.header} data={detailData[props.header]} />
        )}
      />
    </>
  );
};

export default React.memo(PortoCard);
