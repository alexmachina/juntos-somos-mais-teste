import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Set } from "immutable";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import grey from "@material-ui/core/colors/grey";
import { makeStyles } from "@material-ui/styles";
import UserTypeFilter from "./components/filters/userTypeFilter";
import Results from "./components/results";
import Filters from "./components/filters";
import Controls from "./components/controls";
import { fetchData } from "../../store/customers/api";
import fetch from "isomorphic-unfetch";
import { applyAllFilters } from "../../store/customers/filters";

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
  const [totalPages, setTotalPages] = useState(0);
  const [regionFilters, setRegionFilters] = useState(Set());
  const [customerFilters, setCustomerFilters] = useState(Set());
  const [results, setResults] = useState(data);

  useEffect(() => {
    const from = currentPage * resultsPerPage;
    const to = from + resultsPerPage;
    const filtered = applyAllFilters(data, regionFilters, customerFilters);
    const nextResults = filtered.slice(from, to);
    const nextTotalPages = filtered.length / resultsPerPage;
    setResults(nextResults);
    setTotalPages(Math.ceil(nextTotalPages));
  }, [regionFilters, currentPage, customerFilters]);

  const toggleRegionFilter = filter => {
    setCurrentPage(0);
    setRegionFilters(
      regionFilters.has(filter)
        ? regionFilters.delete(filter)
        : regionFilters.add(filter)
    );
  };

  const toggleCustomerFilter = filter => {
    setCurrentPage(0);
    setCustomerFilters(
      customerFilters.has(filter)
        ? customerFilters.delete(filter)
        : customerFilters.add(filter)
    );
  };

  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
          Usuários Por Região
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Controls
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Grid>
      <Grid item xs={12} className={classes.content}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={3}>
            <Filters
              toggleCustomerFilter={toggleCustomerFilter}
              toggleRegionFilter={toggleRegionFilter}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <Results data={results} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Customers.propTypes = {
  data: PropTypes.array
};

Customers.defaultProps = {
  data: []
};
export default Customers;
