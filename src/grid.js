import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyCard from "./Card";
import MyCardTwo from "./CardTwo";
import MyCardThree from "./CardThree";
import MyCardFour from "./CardFour";
import MyCardFive from "./CardFive";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { spacing } from "@material-ui/system";
import GridBase from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";

const useStlyes = makeStyles({
  girdContainer: {
    paddingTop: 200,
  },
});

export default function SpacingGrid() {
  const classes = useStlyes();
  return (
    <div className={classes.root}>
      <Grid container spacing={10} justify="space-evenly">
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <MyCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <MyCardTwo />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <MyCardThree />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <MyCardFour />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <MyCardFive />
        </Grid>
      </Grid>
    </div>
  );
}
