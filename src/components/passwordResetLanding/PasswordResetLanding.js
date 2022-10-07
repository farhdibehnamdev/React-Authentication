import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PasswordResetSuccess from "../passwordResetSuccess/PasswordResetSuccess";
import PasswordResetFail from "../passwordResetFail/PasswordResetFail";
import { Button, Grid, TextField } from "@mui/material";
import Card from "../card/Card";
const PasswordResetLanding = function () {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const { passwordResetCode } = useParams();
  axios.defaults.baseURL = "http://localhost:8080";
  const resetPasswordHandler = async function () {
    try {
      await axios.put(`/api/users/${passwordResetCode}/reset-password`, {
        newPassword: passwordValue,
      });
      setIsSuccess(true);
    } catch (e) {
      setIsFailure(true);
    }
  };

  if (isFailure) <PasswordResetFail />;
  if (isSuccess) <PasswordResetSuccess />;

  return (
    <Grid
      item
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card title="Reset Password">
        <Grid item mb>
          <TextField
            fullWidth
            onChange={(e) => setPasswordValue(e.target.value)}
            value={passwordValue}
            label="Password"
            type="password"
            variant="outlined"
          />
        </Grid>
        <Grid item mb>
          <TextField
            fullWidth
            onChange={(e) => setConfirmPasswordValue(e.target.value)}
            value={confirmPasswordValue}
            label="Confirm Password"
            type="password"
            variant="outlined"
          />
        </Grid>
        <Grid item mb>
          <Button
            size="large"
            variant="contained"
            fullWidth
            disabled={!passwordValue || passwordValue !== confirmPasswordValue}
            onClick={resetPasswordHandler}
            color="primary"
          >
            Reset Password
          </Button>
        </Grid>
      </Card>
    </Grid>
  );
};

export default PasswordResetLanding;
