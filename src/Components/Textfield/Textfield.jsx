import React from "react";
import Box from "@mui/material/Box";

import { Button, Grid, TextField } from "@mui/material";
//import { createTheme, ThemeProvider } from "@mui/material/styles";
import Date from "./DatePickerDemo";
import Checkbox from './Checkbox'
// const theme = createTheme({
//   palette: {
//     neutral: {
//       main: "#B7C4CF",
//     },
//   },
// });

export default function BasicTextFields() {
  return (
    <Grid container rowSpacing={1} columnSpacing={1}>
      <Grid item xs>
        <Box
          p={1}
          borderRadius="10px"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Search Course"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Child Subject"
            variant="outlined"
          />
          <Date />
          <Checkbox />

          <Button variant="outlined" size="medium" color="primary">
            Reset
          </Button>

          <Button variant="contained" size="medium" sx={{ height: 55 }} color="primary">
            Search
          </Button>

        </Box>
      </Grid>
    </Grid>
  );
}
