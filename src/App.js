import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, Box } from "@mui/material";
import AppRoutes from "./routes/Routes";
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <AppRoutes />
      </Box>
    </ThemeProvider>
  );
}

export default App;
