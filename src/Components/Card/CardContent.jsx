import React from "react";
import { Button, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";


const CardContents = (props) => {
    //console.log(name)
    if (props.loading) return <h1>Loading...</h1>

    return <Grid container rowSpacing={5} columnSpacing={15} >
        {props.cards.map(card => {
            const { "Course Id": id, "Course Name": name, "Provider": provider, "Child Subject": child, "Universities/Institutions": university,
                "Url": url, "Video(Url)": video, "Parent Subject": parent } = card
            return <Grid item key={id} xs={12} md={6} lg={4}  >
                <Card elevation={10} >
                    <CardHeader
                        title={id} align='left'
                    />
                    <CardContent >
                        <Typography variant="body" display="block" align="left" >
                            <Typography variant="h5" gutterBottom fontWeight='medium'>
                                Course Name:
                            </Typography>
                            {name}
                            <Typography variant="h5" gutterBottom fontWeight='medium'>
                                Provider:
                            </Typography >
                            {provider}
                            <Typography variant="h5" gutterBottom fontWeight='medium'>
                                University:
                            </Typography>
                            {university}
                            <Box component="span" sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Typography variant="h5" gutterBottom fontWeight='medium'>Parent:<Typography >{parent}</Typography></Typography>

                                <Typography variant="h5" gutterBottom fontWeight='medium'>Child:<Typography >{child}</Typography></Typography>

                            </Box>

                        </Typography>

                        <Box component="span"
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}
                        >
                            <Button variant="contained" href={url} color="primary"> Visit Site</Button>
                            <Button variant="contained" href={video} color="primary">Video Link</Button>
                        </Box>

                    </CardContent>
                </Card>
            </Grid>



        })}



    </Grid>


}

export default CardContents;
