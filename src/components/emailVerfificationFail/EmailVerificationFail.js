import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import Card from "../card/Card";

const EmailVerificationFail = function () {
  const navigate = useNavigate();

  return (
    <Grid
      item
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card title="Fail!">
        <Typography variant="h3">Something went wrong!!!.</Typography>
        <Button
          variant="contained"
          color="error"
          onClick={() => navigate("/signup")}
        >
          Go to sign up page
        </Button>
      </Card>
    </Grid>
  );
};
export default EmailVerificationFail;
