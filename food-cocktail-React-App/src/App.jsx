import "./App.css";
import NavBar from "./components/NavBar";
import { UserProvider } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "@mui/material/styles";
import { pastelTheme } from "./themes/pastelTheme";

function App() {
  return (
    <>
      <UserProvider>
        <ThemeProvider theme={pastelTheme}>
          <NavBar />
          <AppRoutes />
        </ThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
