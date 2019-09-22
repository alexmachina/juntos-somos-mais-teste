import React from "react";
import shortid from "shortid";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import grey from "@material-ui/core/colors/grey";
import { makeStyles } from "@material-ui/styles";
import ClientCard from "./components/clientCard";

const useStyles = makeStyles({
  results: {}
});

const Results = ({ data }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.results}>
      <Grid container spacing={3}>
        {data.map(customer => (
          <Grid key={shortid.generate()} item xs={12} md={6} lg={4}>
            <ClientCard
              avatar={customer.picture.large}
              name={customer.name}
              street={customer.location.street}
              postcode={customer.location.postcode}
              city={customer.location.city}
              state={customer.location.state}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Results;
