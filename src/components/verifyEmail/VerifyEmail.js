import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Card from "../card/Card";

const VerifyEmail = function () {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/profile");
    }, 3000);
  }, [navigate]);
  return (
    <Grid
      item
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card title="Email Verification">
        <Typography variant="h2" gutterBottom>
          Thanks for verifying your email.
        </Typography>
      </Card>
    </Grid>
  );
};

export default VerifyEmail;
