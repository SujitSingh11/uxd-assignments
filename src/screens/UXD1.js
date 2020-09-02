import React, { useState } from "react";
import Validator from "validator";

// Material UI
import {
  Typography,
  Paper,
  InputBase,
  Button,
  Modal,
  CircularProgress,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Icons
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";

// Assets
import Logo from "../assets/logo1.png";
import SVG4 from "../assets/SVG4.svg";
import SVG5 from "../assets/SVG5.svg";
import SVG6 from "../assets/SVG6.svg";

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    cardLogin: {
      width: "500px",
      textAlign: "center",
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
      margin: "0px 15px",
      fontWeight: "700",
      fontFamily: "'Quicksand', sans-serif",
      letterSpacing: "3px",
      padding: "10px 25px",
    },
    buttonLogin: {
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
      height: "10px",
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
      backgroundColor: theme.palette.background.paper,
      border: "none",
      background:
        "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);",
      boxShadow: theme.shadows[5],
      padding: "5px",
      outline: "none",
      width: "550px",
    },
    paperContainer: {
      background: "#fff",
      padding: "30px",
    },
    titleModal: {
      letterSpacing: "5px",
      fontWeight: "500",
      fontFamily: "'Quicksand', sans-serif",
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
    paperTop: {
      height: "6px",
      width: "100%",
      background: "rgb(63,94,251)",
      background:
        "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
      borderTopRightRadius: "4px",
      borderTopLeftRadius: "4px",
    },
    forgetPassDiv: {
      marginTop: "20px",
      textAlign: "left",
      marginLeft: "13%",
    },
    forgetPass: {
      color: "#00bfa6",
      fontWeight: "500",
      fontFamily: "'Quicksand', sans-serif",
    },
    loader: {
      color: "#00bfa6",
    },
  };
});

const userData = {
  email: "sujit@gmail.com",
  password: "123456789",
};

const UXD1 = () => {
  const [email, setEmail] = useState("");
  const [emailReset, setEmailReset] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [isloading, setIsloading] = useState(true);
  const [forget, setForget] = useState(false);
  const [forgetSent, setForgetSent] = useState(false);
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
    setIsloading(true);
    handleOpen(true);
    setTimeout(() => {
      setIsloading(false);
    }, 1500);
  };

  const handleForget = () => {
    setForget(true);
    handleOpen(true);
    setIsloading(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setForget(false);
    setForgetSent(false);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.cardLogin} elevation={3}>
        <div className={classes.paperTop}></div>
        <div className={classes.welcomeSVGDiv}>
          <img alt="welcome-svg" src={Logo} className={classes.welcomeSVG} />
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
          <div className={classes.forgetPassDiv}>
            <Link
              href="#"
              className={classes.forgetPass}
              onClick={() => {
                handleForget();
              }}
            >
              forget password?
            </Link>
          </div>
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
          {isloading ? (
            <div className={classes.paperContainer}>
              <CircularProgress className={classes.loader} size="60px" />
              <h3>Checking...</h3>
            </div>
          ) : forget ? (
            forgetSent ? (
              <div className={classes.paperContainer}>
                <div className={classes.modalSVGDiv}>
                  <img
                    alt="success-svg"
                    src={SVG6}
                    className={classes.modalSVG}
                  />
                </div>
                <div>
                  <Typography
                    variant="h4"
                    component="h4"
                    className={classes.titleModal}
                  >
                    Reset Mail Sent
                  </Typography>
                </div>
              </div>
            ) : (
              <form
                className={classes.paperContainer}
                onSubmit={() => {
                  setIsloading(true);
                  setForgetSent(true);
                  setTimeout(() => {
                    setIsloading(false);
                  }, 1500);
                }}
              >
                <div className={classes.modalSVGDiv}>
                  <img
                    alt="success-svg"
                    src={SVG5}
                    className={classes.modalSVG}
                  />
                </div>
                <div>
                  <InputBase
                    placeholder="Enter your email"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "password" }}
                    type="text"
                    value={password}
                    onChange={(e) => {
                      setEmailReset(e.target.value);
                    }}
                    startAdornment={<LockIcon className={classes.searchIcon} />}
                    autoComplete="false"
                  />
                </div>
                <div className={classes.buttonDiv}>
                  <Button
                    variant="contained"
                    className={classes.buttonLogin}
                    type="submit"
                  >
                    Send
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.button}
                    onClick={() => {
                      setEmailReset("");
                      handleClose();
                    }}
                  >
                    Cancle
                  </Button>
                </div>
              </form>
            )
          ) : (
            <div className={classes.paperContainer}>
              <div className={classes.modalSVGDiv}>
                <img
                  alt="success-svg"
                  src={SVG4}
                  className={classes.modalSVG}
                />
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
            </div>
          )}
        </Paper>
      </Modal>
    </div>
  );
};

export default UXD1;
