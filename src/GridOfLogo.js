import React from "react";
import { Icon, Grid } from "@material-ui/core";
import Acon from "./Acon";

export default () => {
  return (
    <div style={{ width: "330px", marginLeft: "110px", marginTop: "150px" }}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid items xs>
          <Acon text="Github" />
        </Grid>
        <Grid items xs>
          <Acon text="Linkedin" />
        </Grid>
        <Grid items xs>
          <Acon text="Instagram" />
        </Grid>
      </Grid>
    </div>
  );
};
