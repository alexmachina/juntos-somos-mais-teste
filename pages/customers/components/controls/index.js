import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  container: {
    marginTop: "20px"
  },
  root: {},
  stepperContainer: {
    justifyContent: "center"
  }
});

const Controls = () => {
  const classes = useStyles();

  const maxSteps = 10;
  const activeStep = 1;
  const handleBack = () => {};
  const handleNext = () => {};
  return (
    <Grid container className={classes.container} justify="center">
      <Grid item xs={12} className={classes.stepperContainer}>
        <MobileStepper
          variant="dots"
          steps={6}
          position="static"
          activeStep={activeStep}
          className={classes.root}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 5}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </Grid>
    </Grid>
  );
};

export default Controls;
