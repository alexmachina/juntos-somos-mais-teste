import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/styles";
import { capitalize, starCase } from "lodash";
import {
  displayStreet,
  displayName
} from "../../../../../../store/customers/functions/display";

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

const ClientCard = ({ id, avatar, name, city, street, postcode, state }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link href={`/customers/details/${id}`}>
        <CardActionArea className={classes.cardActionArea}>
          <Avatar
            className={classes.avatar}
            alt="Some Random Guy"
            src={avatar}
          />
          <Typography variant="subtitle1" gutterBottom>
            {displayName(name)}
          </Typography>
          <Typography variant="body2">
            {capitalize(city)} - {capitalize(state)}
          </Typography>
          <Typography variant="body2">{displayStreet(street)}</Typography>
          <Typography variant="body2">CEP {postcode}</Typography>
        </CardActionArea>
      </Link>
    </Card>
  );
};

ClientCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.object,
  street: PropTypes.string,
  postcode: PropTypes.number,
  state: PropTypes.string
};

ClientCard.defaultProps = {
  avatar: "",
  name: { title: "", first: "", last: "" },
  street: "",
  postcode: null,
  state: ""
};

export default ClientCard;
