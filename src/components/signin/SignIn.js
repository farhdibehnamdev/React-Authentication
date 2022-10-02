import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button, TextField } from "@mui/material";
import { toast } from "react-toastify";
import Card from "../card/Card";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import LockResetIcon from "@mui/icons-material/LockReset";
import axios from "axios";
import useToken from "../../hooks/useToken";
const SignIn = function () {
  const [token, setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();
  const loginHandler = async function () {
    const response = await axios.post("http://localhost:8080/api/signin", {
      email: emailValue,
      password: passwordValue,
    });
    const { token } = response.data;
    setToken(token);
  };
  return (
    <Grid
      item
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card title="Sign In">
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
          <Button
            size="large"
            variant="contained"
            fullWidth
            disabled={!emailValue || !passwordValue}
            onClick={() => loginHandler()}
            color="success"
            endIcon={<HowToRegIcon />}
          >
            Sign In
          </Button>
        </Grid>

        <Grid item className="mb">
          <Button
            fullWidth
            onClick={() => navigate("/signin")}
            size="large"
            variant="contained"
            endIcon={<LoginIcon />}
          >
            Already have an account ? Log In
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
