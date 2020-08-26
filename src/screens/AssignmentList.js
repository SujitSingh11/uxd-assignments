import React from "react";
import { Link } from "react-router-dom";

// Material UI
import { Paper, Typography, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "-webkit-center",
    marginTop: "20vh",
  },
  paper: {
    width: "500px",
    padding: "20px",
  },
  title: {
    letterSpacing: "2px",
    fontWeight: "500",
    fontFamily: "'Quicksand', sans-serif",
  },
  links: {
    textDecoration: "none",
    color: "black",
    fontWeight: "400",
    fontFamily: "'Quicksand', sans-serif",
    fontSize: "25px",
  },
  linksDiv: {
    marginTop: "10px",
  },
  paperLinks: {
    padding: "10px 0px",
    backgroundColor: "#4caf50",
  },
}));

const AssignmentList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <div>
          <Typography variant="h4" component="h4" className={classes.title}>
            Assignment List
          </Typography>
        </div>
        <div className={classes.linksDiv}>
          <CardActionArea component={Link} to="/assignment1">
            <Paper elevation={3} className={classes.paperLinks}>
              <Typography
                variant="p"
                component="span"
                className={classes.links}
              >
                Assignment 2 - Login Design
              </Typography>
            </Paper>
          </CardActionArea>
        </div>
      </Paper>
    </div>
  );
};

export default AssignmentList;
