import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, Box } from "@mui/material";
import AppRoutes from "./routes/Routes";
import boxStyle from "./App.style";
const theme = createTheme({
  palette: {
    background: {
      default: "#F5F8FA",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
        },
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={boxStyle}>
        <AppRoutes />
      </Box>
    </ThemeProvider>
  );
}

export default App;
