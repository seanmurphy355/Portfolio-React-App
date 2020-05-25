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
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 220,
    minWidth: 0,
    maxHeight: 700,
  },
  media: {
    paddingTop: "2%", // 16:9
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
  CardHeader: {
    color: "#fff",
  },
}));

export default function MyCardTwo() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div id="MyCard" className="headertext">
      <Card
        className={classes.root}
        style={{ backgroundColor: "#333333", color: "#fff" }}
      >
        <CardMedia
          style={{ backgroundColor: "#333333", color: "#fff" }}
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ marginBottom: 15 }}
          >
            Writing Samples
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
              backgroundColor: "#333333",
              color: "#fff",
              fontWeight: 50,
              fontSize: 14,
              marginBottom: 15,
            }}
          >
            Project Type: Writing/Tech Writing
          </Typography>
          <Typography variant="body2" color="textSecondary"></Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
              backgroundColor: "#333333",
              color: "#fff",
              fontWeight: 200,
              fontSize: 11,
              marginBottom: 15,
            }}
          >
            Check the description tab for what each link navigates to.
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
            style={{ backgroundColor: "#333333", color: "#fff" }}
          ></IconButton>
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
    </div>
  );
}
