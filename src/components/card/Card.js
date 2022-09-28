import React from "react";
import {
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  Box,
  Card as CardMui,
} from "@mui/material";
const Card = function () {
  return (
    <CardMui sx={{ minWidth: 600 }}>
      <CardContent>
        <Box>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />

          <Button size="small">Learn More</Button>
        </Box>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </CardContent>
      <CardActions></CardActions>
    </CardMui>
  );
};
export default Card;
