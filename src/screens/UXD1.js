import React, { useState } from "react";
import Validator from "validator";

// Material UI
import { Typography, Paper, InputBase, Button, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Icons
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";

// Assets
import SVG3 from "../assets/SVG3.svg";
import SVG4 from "../assets/SVG4.svg";

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      flex: 1,
      textAlign: "-webkit-center",
    },
    cardLogin: {
      width: "500px",
      textAlign: "center",
      marginTop: "20px",
    },
    welcomeSVGDiv: {
      padding: "10px 0px",
    },
    welcomeSVG: {
      height: "145px",
    },
    designSVG1Div: {
      position: "absolute",
      bottom: 0,
    },
    designSVG1: {
      height: "300px",
    },
    cardTitleDiv: {},
    cardTitle: {
      letterSpacing: "8px",
      fontWeight: "500",
      fontFamily: "'Quicksand', sans-serif",
    },
    cardFormDiv: {
      padding: "20px 0px",
    },
    inputRoot: {
      color: "#00bfa6",
      background: "#00bfa61a",
      borderRadius: "5px",
      padding: "10px",
      marginTop: "15px",
      fontWeight: "600",
      fontFamily: "'Quicksand', sans-serif",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "250px",
        "&:hover": {
          width: "300px",
        },
        "&:focus": {
          width: "300px",
        },
      },
      [theme.breakpoints.down("sm")]: {
        width: "250px",
        "&:hover": {
          width: "300px",
        },
        "&:focus": {
          width: "300px",
        },
      },
    },
    searchIcon: {
      paddingLeft: "20px",
    },
    buttonDiv: {
      marginTop: "35px",
      marginBottom: "20px",
    },
    button: {
      padding: "10px",
      margin: "0px 15px",
      fontWeight: "700",
      fontFamily: "'Quicksand', sans-serif",
      letterSpacing: "3px",
      padding: "10px 25px",
    },
    buttonLogin: {
      padding: "10px",
      margin: "0px 15px",
      fontWeight: "700",
      fontFamily: "'Quicksand', sans-serif",
      letterSpacing: "3px",
      backgroundColor: "#00bfa6",
      "&:hover": {
        backgroundColor: "#0e8272",
      },
      padding: "10px 25px",
    },
    errorDiv: {
      margin: "10px",
    },
    error: {
      color: "#e91e63",
    },
    modal: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      marginTop: "25vh",
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "none",
      borderColor: "#fff",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: "none",
      width: "500px",
    },
    titleModal: {
      letterSpacing: "5px",
      fontWeight: "500",
      fontFamily: "'Quicksand', sans-serif",
    },
    body: {
      margin: "20px 0px",
    },
    modalBody: {
      letterSpacing: "5px",
      fontWeight: "500",
      fontFamily: "'Quicksand', sans-serif",
    },
    modalSVG: {
      height: "130px",
    },
    modalSVGDiv: {
      marginBottom: "20px",
    },
  };
});

const userData = {
  email: "sujit@gmail.com",
  password: "123456789",
};

const UXD1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleLogin = (event) => {
    event.preventDefault();

    // Check if empty
    if (email === "") {
      return setError("Email is empty");
    }
    if (password === "") {
      return setError("Password is empty");
    }

    // Validation
    if (!Validator.isEmail(email)) {
      return setError("Invalid Email Address");
    }
    if (!Validator.isLength(password, { min: 8 })) {
      return setError("Password length must be minimum 8 characters");
    }

    // Login Validation
    if (userData.email !== email) {
      return setError("User not found");
    }
    if (userData.password !== password) {
      return setError("Incorrect Password");
    }

    handleOpen(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.cardLogin} elevation={3}>
        <div className={classes.welcomeSVGDiv}>
          <img alt="welcome-svg" src={SVG3} className={classes.welcomeSVG} />
        </div>
        <div className={classes.cardTitleDiv}>
          <Typography variant="h4" component="h4" className={classes.cardTitle}>
            LOGIN
          </Typography>
        </div>
        <div className={classes.errorDiv}>
          <span className={classes.error}>{error}</span>
        </div>
        <form
          className={classes.cardFormDiv}
          onSubmit={(event) => {
            handleLogin(event);
          }}
        >
          <InputBase
            placeholder="Email"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "email" }}
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            startAdornment={<PersonIcon className={classes.searchIcon} />}
            autoComplete="false"
          />
          <InputBase
            placeholder="Password"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "password" }}
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            startAdornment={<LockIcon className={classes.searchIcon} />}
            autoComplete="false"
          />
          <div className={classes.buttonDiv}>
            <Button
              variant="contained"
              className={classes.buttonLogin}
              type="submit"
            >
              Login
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => {
                setEmail("");
                setPassword("");
                setError("");
              }}
            >
              Reset
            </Button>
          </div>
        </form>
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <Paper className={classes.paper}>
          <div className={classes.modalSVGDiv}>
            <img alt="success-svg" src={SVG4} className={classes.modalSVG} />
          </div>
          <div>
            <Typography
              variant="h4"
              component="h4"
              className={classes.titleModal}
            >
              Login Successful!
            </Typography>
          </div>
          <div className={classes.body}>
            <Typography
              variant="p"
              component="span"
              className={classes.modalBody}
            >
              Email: {userData.email}
            </Typography>
          </div>
        </Paper>
      </Modal>
    </div>
  );
};

export default UXD1;
