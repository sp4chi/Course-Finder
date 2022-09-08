import { Box, Card, CardContent, Typography, Grid } from "@mui/material";

export default function myCard() {
  return (
    <Box m={3}>
      <Grid container rowSpacing={1} columnSpacing={1} >
        <Grid item xs={4}>
          <Box p={1} borderRadius="10px" >
            <Card elevation={4} >
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Udacity
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Course
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  Introduction to Artificial Intelligence
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box p={1} borderRadius="10px">
            <Card elevation={4}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Udacity
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Course
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  Introduction to Artificial Intelligence
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box p={1} borderRadius="10px">
            <Card elevation={4}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Udacity
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Course
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  Introduction to Artificial Intelligence
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box p={1} borderRadius="10px">
            <Card elevation={4}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Udacity
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Course
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  Introduction to Artificial Intelligence
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box p={1} borderRadius="10px">
            <Card elevation={4}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Udacity
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Course
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  Introduction to Artificial Intelligence
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box p={1} borderRadius="10px">
            <Card elevation={4}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Udacity
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Course
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  Introduction to Artificial Intelligence
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
