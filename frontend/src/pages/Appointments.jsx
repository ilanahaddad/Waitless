import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class Appointments extends Component {
  render() {
    return (
      <Grid
        container
        justify="center"
        style={{ backgroundColor: "blue", marginTop: 100 }}
      >
        <h1>Appointments page</h1>
      </Grid>
    );
  }
}

export default Appointments;
