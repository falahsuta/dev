import React from "react";
import { Icon, Grid } from "@material-ui/core";
import MiniIcon from "./MiniIcon";

export default () => {
  return (
    <div style={{ width: "330px", marginLeft: "110px", marginTop: "150px" }}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid items xs>
          <MiniIcon text="Github" />
        </Grid>
        <Grid items xs>
          <MiniIcon text="Linkedin" />
        </Grid>
        <Grid items xs>
          <MiniIcon text="Instagram" />
        </Grid>
      </Grid>
    </div>
  );
};
