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

const UserTypeFilter = ({ toggleFilter }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.filters}>
      <div>
        <header>
          <Typography variant="h6">Usuário</Typography>
        </header>
        <article>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  value="special"
                  onChange={() => toggleFilter("special")}
                />
              }
              label="Especial"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="normal"
                  onChange={() => toggleFilter("normal")}
                />
              }
              label="Normal"
            />
            <FormControlLabel
              control={
                <Checkbox value="hard" onChange={() => toggleFilter("hard")} />
              }
              label="Trabalhoso"
            />
          </FormGroup>
        </article>
      </div>
    </Paper>
  );
};

export default UserTypeFilter;
