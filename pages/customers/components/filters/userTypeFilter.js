import React from "react";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import grey from "@material-ui/core/colors/grey";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  filters: {
    padding: "20px"
  }
});

const UserTypeFilter = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.filters}>
      <div>
        <header>
          <Typography variant="h6">Filtrar por usuário</Typography>
        </header>
        <article>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox value="special" />}
              label="Especial"
            />
            <FormControlLabel
              control={<Checkbox value="normal" />}
              label="Normal"
            />
            <FormControlLabel
              control={<Checkbox value="trabalhoso" />}
              label="Trabalhoso"
            />
          </FormGroup>
        </article>
      </div>
    </Paper>
  );
};

export default UserTypeFilter;
