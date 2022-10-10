import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import Card from "../card/Card";

const PasswordResetSuccess = function () {
  const navigate = useNavigate();
  return (
    <Grid
      item
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card title="Success!">
        <Typography variant="h3">
          Your password has been reset. now please login with new password
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </Button>
      </Card>
    </Grid>
  );
};

export default PasswordResetSuccess;
