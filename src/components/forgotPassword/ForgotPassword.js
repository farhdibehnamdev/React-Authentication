import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import Card from "../card/Card";
import { BASE_URL } from "../../config/axios";
const ForgotPassword = function () {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const navigate = useNavigate();
  const onSubmitClicked = async function () {
    try {
      await axios.put(`${BASE_URL}/api/forgot-password/${emailValue}`);
      alert("hi");

      setSuccess(true);

      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    } catch (e) {
      console.log(e.message);
      setErrorMessage(e.message);
    }
  };
  return success ? (
    <Grid>
      <Card title="Success">
        <Typography variant="p">Check your email for a reset link</Typography>
      </Card>
    </Grid>
  ) : (
    <Grid
      item
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card title="Forgot Password">
        <Grid item mb>
          {errorMessage && (
            <Alert variant="outlined" severity="error">
              {errorMessage}
            </Alert>
          )}
        </Grid>
        <Grid item mb>
          <Typography variant="p">
            Enter your email and we'll send you a reset link
          </Typography>
        </Grid>

        <Grid item mb>
          <TextField
            fullWidth
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="someone@gmail.com"
            label="Email"
            type="email"
            variant="outlined"
          />
        </Grid>
        <Grid item mb>
          <Button
            variant="contained"
            disabled={!emailValue}
            onClick={() => onSubmitClicked()}
            color="primary"
          >
            Send Reset Link
          </Button>
        </Grid>
      </Card>
    </Grid>
  );
};

export default ForgotPassword;
