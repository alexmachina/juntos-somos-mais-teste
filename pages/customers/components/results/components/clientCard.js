import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/styles";
import { capitalize, starCase } from "lodash";

const useStyles = makeStyles({
  card: {
    cursor: "pointer"
  },
  cardActionArea: {
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  avatar: {
    width: 96,
    height: 96,
    marginBottom: 10
  }
});

const ClientCard = ({ avatar, name, city, street, postcode, state }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardActionArea}>
        <Avatar className={classes.avatar} alt="Some Random Guy" src={avatar} />
        <Typography variant="subtitle1" gutterBottom>
          {displayName(name)}
        </Typography>
        <Typography variant="body2">
          {capitalize(city)} - {capitalize(state)}
        </Typography>
        <Typography variant="body2">{displayStreet(street)}</Typography>
        <Typography variant="body2">CEP {postcode}</Typography>
      </CardActionArea>
    </Card>
  );
};

const displayStreet = street => {
  const number = street.match(/\d+/)[0];
  const name = street.replace(/[0-9]/g, "").trim();
  const capitalizedName = name
    .split(" ")
    .map(capitalize)
    .join(" ");

  return `${capitalizedName}, ${number}`;
};
const displayName = ({ title, first, last }) =>
  `${capitalize(first)} ${capitalize(last)}`;

export default ClientCard;
