import { createTheme } from "@mui/material/styles";

export const pastelTheme = createTheme({
  palette: {
    primary: { main: "#ddbea9", contrastText: "#4a5759 " },
    secondary: { main: "#ffe8d6 ", contrastText: "#b7b7a4" },
  },
  typography: {
    fontFamily: "PT Sans",
    fontSize: 14,
    h1: { fontSize: 30 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { color: #4A5759; }`,
    },
    MuiTextField: { defaultProps: { variant: "filled" } },
  },
});

