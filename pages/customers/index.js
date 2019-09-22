import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import grey from "@material-ui/core/colors/grey";
import { makeStyles } from "@material-ui/styles";
import UserTypeFilter from "./components/filters/userTypeFilter";
import Results from "./components/results";
import Filters from "./components/filters";
import Controls from "./components/controls";
import { fetchData } from "../../store/api";
import fetch from "isomorphic-unfetch";
const useStyles = makeStyles({
  root: {},
  container: {
    marginTop: 40
  },
  content: {
    backgroundColor: grey[100],
    padding: 20
  }
});

const resultsPerPage = 10;

const Customers = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const from = currentPage * resultsPerPage;
  const to = from + resultsPerPage;
  const slice = data.slice(from, to);

  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
          Usuários Por Região
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Controls currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </Grid>
      <Grid item xs={12} className={classes.content}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={3}>
            <Filters />
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <Results data={slice} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Customers;
