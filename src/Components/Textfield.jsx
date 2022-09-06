import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack, Button } from '@mui/material';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Course" variant="outlined" />
      <TextField id="outlined-basic" label="Child Subject" variant="outlined" />
      <TextField id="outlined-basic" label="Enter Date" variant="outlined" />
      
      
    </Box>
  );
}