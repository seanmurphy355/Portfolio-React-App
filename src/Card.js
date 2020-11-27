import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { GitHub } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import "./styles.css";

import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 220,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  pos: {
    marginBottom: 12,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function My() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card
      className={classes.root}
      style={{ backgroundColor: "#333333", color: "#fff" }}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color=""
          gutterBottom
          style={{ marginBottom: 15, fontWeight: "360", fontSize: 24 }}
        >
          Writing Samples
        </Typography>
        <Typography variant="h5" component="h2"></Typography>
        <Typography
          className={classes.pos}
          color=""
          style={{ marginBottom: 15, fontWeight: 300, fontSize: 14 }}
        >
          Project Type: Writing/Tech Writing Samples
        </Typography>
        <Typography
          variant="body2"
          component="p"
          style={{ fontWeight: 50, fontSize: 12 }}
        >
          Check the description tab for what each link navigates to.
          <br />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="GitHub"
          style={{ backgroundColor: "#333333", color: "#fff" }}
          target="_blank"
          href="https://github.com/seanmurphy355/BioChemistrySeniorResearchPaper/blob/master/Catalytic%20Efficiency%20of%20E%20Coli.Catalase%20HPII.pdf"
        >
          <GitHub />
        </IconButton>
        <IconButton
          aria-label="GitHub"
          style={{ backgroundColor: "#333333", color: "#fff" }}
          target="_blank"
          href="https://github.com/seanmurphy355/Cogantive-WalkThrough-In-Regards-To-Solidity/blob/master/Usability%20Test%20Report.pdf"
        >
          <GitHub />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          style={{ backgroundColor: "#333333", color: "#fff" }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{ fontWeight: 50 }}>
            Moving from left to right!
          </Typography>
          <Typography paragraph style={{ fontWeight: 50 }}>
            Icon 1;Biochemitry Research paper.
          </Typography>
          <Typography paragraph style={{ fontWeight: 50 }}>
            Icon 2;Usability Evaluation of Solidity.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
