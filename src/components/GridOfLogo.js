import React from "react";
import { Grid } from "@material-ui/core";
import Logo from "./Logo";

const GridOfLogo = () => {
  return (
    <>
      <div style={{ width: "330px", marginLeft: "110px", marginTop: "150px" }}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs>
            <Logo text="Github" linkto="https://github.com/falahsuta" />
          </Grid>
          <Grid item xs>
            <Logo
              text="Linkedin"
              linkto="https://www.linkedin.com/in/falah-sutawindaya/"
            />
          </Grid>
          <Grid item xs>
            <Logo
              text="Instagram"
              linkto="https://instagram.com/falahsutawindaya"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default React.memo(GridOfLogo);
