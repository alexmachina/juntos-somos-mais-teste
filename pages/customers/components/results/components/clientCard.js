import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/styles";

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

const ClientCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardActionArea}>
        <Avatar
          className={classes.avatar}
          alt="Some Random Guy"
          src="https://randomuser.me/api/portraits/women/31.jpg"
        />
        <Typography variant="h6" gutterBottom>
          Jane Austen
        </Typography>
        <Typography variant="body2" gutterBottom>
          Rua Espirito Santo, 2096
        </Typography>
        <Typography variant="body2">São José de Ribamar</Typography>
        <Typography variant="body2" gutterBottom>
          Paraná - CEP: 96895
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default ClientCard;
