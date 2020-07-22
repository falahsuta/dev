import React, { useState, useEffect } from "react";
import "./style/Animate.css";
import { makeStyles } from "@material-ui/styles";
import { CSSTransition } from "react-transition-group";

const useStyles = makeStyles({
  root: (props) => ({
    height: "150px",
    width: "230px",
    borderRadius: "15px",
    position: "absolute",
    transition: "all 0.2s ease-out",
    transform: `translate(0.5em, 0)`,
  }),
});

export default () => {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div>
      <CSSTransition in={inProp} timeout={100} classNames="my-node">
        <div className="my-nodes"></div>
      </CSSTransition>
    </div>
  );
};

// export default () => {
//   const [show, setShow] = useState(false);

//   // const props = { Top, Left, translate };
//   const props = {};
//   const classes = useStyles(props);

//   useEffect(() => {
//     setTimeout(() => {
//       setShow(true);
//     }, 50);
//   }, []);

//   return (
//     <div>
//       <div className={show ? `${classes.root}` : ""}>ABC</div>
//     </div>
//   );
// };
