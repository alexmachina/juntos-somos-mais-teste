import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import grey from "@material-ui/core/colors/grey";
import { makeStyles } from "@material-ui/styles";
import ClientCard from "./components/clientCard";

const useStyles = makeStyles({
  results: {}
});

const Results = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.results}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ClientCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ClientCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ClientCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ClientCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ClientCard />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Results;
