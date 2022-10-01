import React from "react";
import {
  CardContent,
  CardHeader,
  Avatar,
  Box,
  Card as CardMui,
} from "@mui/material";
import cardStyle from "./Card.style";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const Card = function ({ title, children }) {
  return (
    <Box sx={cardStyle()}>
      <CardMui variant="outlined" sx={{ minWidth: 600 }} className="cardMui">
        <CardHeader sx={{ backgroundColor: "#F5F8FA" }} title={title} />
        <hr />
        <CardContent>{children}</CardContent>
      </CardMui>
    </Box>
  );
};
export default Card;
