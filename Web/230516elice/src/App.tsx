import React from "react";
import { Counter1 } from "./Counter1";
import { Counter2 } from "./Counter2";
import {
  Container,
  Grid,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import { grey } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    primary: grey,
  },
});

function App() {
  return (
    <Container>
      <Button variant="contained">Login</Button>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Counter1 />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ThemeProvider theme={darkTheme}>
            <Counter2 />
          </ThemeProvider>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
