import React from 'react';
import { Toolbar, Typography, Stack, Button } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';


export default function Navbar(){
  return (<AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <AutoStoriesIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow:10 }} align='left'>
          Course Finder
        </Typography>
        <Stack direction="row" spacing={2}>
            <Button color="inherit">Courses</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
  </AppBar>)
}
