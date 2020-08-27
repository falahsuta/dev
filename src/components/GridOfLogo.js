import React from "react";
import { Grid } from "@material-ui/core";
import Logo from "./Logo";

export default () => {
  return (
    <>
      <div style={{ width: "330px", marginLeft: "110px", marginTop: "150px" }}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid items xs>
            <Logo text="Github" />
          </Grid>
          <Grid items xs>
            <Logo text="Linkedin" />
          </Grid>
          <Grid items xs>
            <Logo text="Instagram" />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
