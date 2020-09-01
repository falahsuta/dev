import React, { useState } from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import { Dialog, Paper, Slide } from "@material-ui/core";

import DialProj from "./DialProj";
import { detailData } from "./data-detail-proj";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
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
    width: 320,
    [breakpoints.up("md")]: {
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
    [breakpoints.up("md")]: {
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

  return (
    <>
      <div style={{ userSelect: "none" }}>
        <Paper elevation={0} className={cx(styles.root, shadowStyles.root)}>
          <CardMedia
            className={styles.media}
            image={
              // "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
              // "a.gif"
              // "https://images.unsplash.com/photo-1598809344414-6c892e77a6c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              "https://thumbs.gfycat.com/HeavyEasygoingAfricanelephant.webp"
            }
          />
          <CardContent>
            <TextInfoContent
              classes={contentStyles}
              heading={props.header}
              body={props.text}
            />
            <Button onClick={() => setOpenClick(true)} className={buttonStyles}>
              Documentation
            </Button>
          </CardContent>
        </Paper>
      </div>
      <Dialog
        open={openClick}
        TransitionComponent={Transition}
        onClose={() => handleClickClose()}
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
