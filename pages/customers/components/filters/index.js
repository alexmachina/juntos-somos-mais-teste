import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import UserTypeFilter from "./userTypeFilter";
import UserRegionFilter from "./userRegionFilter";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1
  }
});

const Filters = ({ toggleRegionFilter, toggleCustomerFilter }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <UserTypeFilter toggleFilter={toggleCustomerFilter} />
      </Grid>
      <Grid item xs={12}>
        <UserRegionFilter toggleFilter={toggleRegionFilter} />
      </Grid>
    </Grid>
  );
};

export default Filters;
