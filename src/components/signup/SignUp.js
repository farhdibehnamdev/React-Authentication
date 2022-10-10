import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button, TextField } from "@mui/material";
import axios from "axios";
import useToken from "../../hooks/useToken";
import { toast } from "react-toastify";
import Card from "../card/Card";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import { BASE_URL } from "../../config/axios";
const SignUp = function () {
  const [, setToken] = useToken();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const navigate = useNavigate();
  const signupHandler = async function () {
    const response = await axios.post(`${BASE_URL}/api/signup`, {
      email: emailValue,
      password: passwordValue,
    });
    const { token } = response.data;
    setToken(token);
    navigate("/verify-email");
  };
  return (
    <Grid
      item
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card title="Sign Up">
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
            onChange={(e) => setConfirmPasswordValue(e.target.value)}
            value={confirmPasswordValue}
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
            disabled={
              !emailValue ||
              !passwordValue ||
              passwordValue !== confirmPasswordValue
            }
            onClick={() => signupHandler()}
            color="success"
            endIcon={<LoginIcon />}
          >
            Sign Up
          </Button>
        </Grid>

        <Grid item className="mb">
          <Button
            fullWidth
            onClick={() => navigate("/signin")}
            size="large"
            variant="contained"
            endIcon={<HowToRegIcon />}
          >
            Already have an account ? Log In
          </Button>
        </Grid>
      </Card>
    </Grid>
  );
};

export default SignUp;
