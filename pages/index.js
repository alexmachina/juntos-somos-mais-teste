import React, { useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { setCustomers as setCustomersAction } from "../store/reducers";
import Header from "../components/header/index";
import Customers from "./customers/list";
import { fetchData } from "../store/customers/api";
import { List } from "immutable";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1
  }
});

const Home = ({ data }) => {
  const classes = useStyles();
  return (
    <Container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Customers data={data} />
      </Grid>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  setCustomers: data => dispatch(setCustomersAction(data))
});

const mapStateToProps = state => ({ data: state.data });

Home.getInitialProps = async ({ reduxStore }) => {
  const serverData = await fetchData();
  await reduxStore.dispatch(setCustomersAction(serverData));
  return { serverData };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
