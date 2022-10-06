import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import Card from "../card/Card";

const EmailVerificationSuccess = function () {
  const navigate = useNavigate();
  return (
    <Grid
      item
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card title="Success!">
        <Typography variant="h3">Thanks for verifying your email.</Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/profile")}
        >
          Go to profile page
        </Button>
      </Card>
    </Grid>
  );
};

export default EmailVerificationSuccess;
