import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button, TextField } from "@mui/material";
import { toast } from "react-toastify";
import Card from "../card/Card";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import LockResetIcon from "@mui/icons-material/LockReset";

const SignUp = function () {
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();
  const loginHandler = function () {
    console.log("login handler");
  };
  return (
    <Grid
      item
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card>
        <Grid item className="mb">
          <TextField
            fullWidth
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
            label="Email"
            type="email"
          />
        </Grid>
        <Grid item className="mb">
          <TextField
            fullWidth
            onChange={(e) => setPasswordValue(e.target.value)}
            value={passwordValue}
            label="Password"
            type="password"
            variant="outlined"
          />
        </Grid>
        <Grid item className="mb">
          <TextField
            fullWidth
            onChange={(e) => setPasswordValue(e.target.value)}
            value={passwordValue}
            label="Confirm Password"
            type="password"
            variant="outlined"
          />
        </Grid>
        <Grid item className="mb">
          <Button
            size="large"
            variant="contained"
            fullWidth
            disabled={!emailValue || !passwordValue}
            onClick={loginHandler}
            color="success"
            endIcon={<LoginIcon />}
          >
            Sign In
          </Button>
        </Grid>

        <Grid item className="mb">
          <Button
            fullWidth
            onClick={() => navigate("/signup")}
            size="large"
            variant="contained"
            endIcon={<HowToRegIcon />}
          >
            Don't have an account ? Sign Up
          </Button>
        </Grid>
        <Grid item className="mb">
          <Button
            size="large"
            variant="outlined"
            fullWidth
            color="error"
            onClick={() => navigate("/forgot-password")}
            endIcon={<LockResetIcon />}
          >
            Forgot your password ?
          </Button>
        </Grid>
      </Card>
    </Grid>
  );
};

export default SignIn;
