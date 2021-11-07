import {
  BrowserRouter as Route,
  Link,
  Switch,
} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "./App.css";
import { AdditionalDetails } from "./AdditionalDetails";
import { EditMovie } from "./EditMovie";
import { MovieCollections } from "./MovieCollections";
import { AddMovie } from "./AddMovie";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{ minHeight: "100vh" }}>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar className="links">
                <Link to="/">Home</Link>
                <Link to="/movies">Movie Collection</Link>
                <Link to="/addMovies">Add Movies</Link>
                <Link to="/about">About</Link>
                <Button
                  style={{ marginLeft: "auto" }}
                  startIcon={
                    darkMode ? <Brightness7Icon /> : <Brightness4Icon />
                  }
                  onClick={() => setDarkMode(!darkMode)}
                  color="inherit"
                >
                  {darkMode ? "Light" : "Dark"} mode
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Switch>
            <Route exact path="/">
              <h1 className="title">
                Welcome to the Movies collections WEB APP
              </h1>
            </Route>
            <Route path="/movies/additionalInfo/:id">
              <AdditionalDetails />
            </Route>
            <Route path="/movies/editMovie/:id">
              <EditMovie />
            </Route>
            <Route path="/movies">
              <MovieCollections />
            </Route>
            <Route path="/addMovies">
              <AddMovie />
            </Route>
            <Route path="/about">
              {/* <About /> */}
              <h1 className="title">🐱‍💻</h1>
            </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}


