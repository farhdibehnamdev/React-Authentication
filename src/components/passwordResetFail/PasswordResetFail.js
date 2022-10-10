import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import Card from "../card/Card";

const PasswordResetFail = function () {
  const navigate = useNavigate();
  return (
    <Grid
      item
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card title="Fail!">
        <Typography variant="h3">
          Your password has not been reset.Please try again later.
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={() => navigate("/signin")}
        >
          Back to Sign In
        </Button>
      </Card>
    </Grid>
  );
};

export default PasswordResetFail;
