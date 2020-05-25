import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyCard from "./Card";
import MyCardTwo from "./CardTwo";
import MyCardThree from "./CardThree";
import MyCardFour from "./CardFour";
import MyCardFive from "./CardFive";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { spacing } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 10),
    marginRight: theme.spacing(30),
  },
  paper: {
    margin: `${theme.spacing(-10)}px auto`,
    padding: theme.spacing(10),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();
  return (
    <Grid pt={0}>
      <div className={classes.root}>
        <Grid
          alignContent="center"
          container
          wrap="nowrap"
          spacing={10}
          grid-xs-auto
        >
          >
          <Paper className={classes.paper}>
            <Grid item container wrap="nowrap">
              <Grid>
                <MyCard />
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper} container wrap="nowrap">
            <Grid>
              <MyCardTwo />
            </Grid>
          </Paper>
          <Paper className={classes.paper} container wrap="nowrap">
            <Grid>
              <MyCardThree />
            </Grid>
          </Paper>
          <Paper className={classes.paper} container wrap="nowrap">
            <Grid>
              <MyCardFour />
            </Grid>
          </Paper>
          <Paper className={classes.paper} container wrap="nowrap">
            <Grid>
              <MyCardFive />
            </Grid>
          </Paper>
        </Grid>
      </div>
    </Grid>
  );
}
