import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import fetch from "isomorphic-unfetch";
import { Provider } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../store/reducers";
import Header from "../components/header/index";
import Customers from "./customers";
import Head from "next/head";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1
  }
});

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunkMiddleware)
);

const Home = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Customers />
        </Grid>
      </Container>
    </Provider>
  );
};

export default Home;
