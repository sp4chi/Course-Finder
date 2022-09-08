import { Box, Stack, Grid, Paper } from "@mui/material";

export default function BoxDemo() {
    return (
        <Paper
            sx={{
                padding: "32px",
            }}
            elevation={4}
        >
            <Stack direction="row">
                <Box
                    component="span"
                    m={1}
                    sx={{
                        backgroundColor: "primary.main",
                        color: "white",
                        width: "100px",
                        padding: "16px",
                        borderRadius: "10px",
                    }}
                >
                    Demo Box
                </Box>
                <Box
                    component="span"
                    m={1}
                    sx={{
                        backgroundColor: "primary.main",
                        color: "white",
                        width: "100px",
                        padding: "16px",
                        borderRadius: "10px",
                    }}
                >
                    Another Box
                </Box>
            </Stack>
            <Grid container rowSpacing={1} columnSpacing={1}>
                <Grid item xs={6}>
                    <Box bgcolor="primary.light" p={1} borderRadius="10px">
                        Box 1
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor="primary.light" p={1} borderRadius="10px">
                        Box 2
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor="primary.light" p={1} borderRadius="10px">
                        Box 3
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor="primary.light" p={1} borderRadius="10px">
                        Box 4
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}
