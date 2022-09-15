import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const CardContents = (props) => {
    //console.log(name)
    if (props.loading) return <h1>Loading...</h1>

    return <Grid container rowSpacing={5} columnSpacing={15} >
        {props.cards.map(card => {
            const { "Course Id": id, "Course Name": name, "Provider": provider, "Child Subject": child, "Universities/Institutions": university,
                "Url": url, "Video(Url)": video, "Parent Subject": parent, "Next Session Date": date } = card
            return <Grid item key={id} xs={12} md={6} lg={4}  >
                <Card elevation={10} >


                    <CardContent >

                        <Typography variant='h6' fontWeight='light' component="div" display="block" align="left" >
                            <Box
                                component='span'
                                display='flex'
                                justifyContent='space-between'
                            >{id}
                                <Box
                                    display='inline-flex'
                                    alignItems='flex-start'>
                                    <CalendarMonthIcon />{date}
                                </Box>
                            </Box>

                            Course Name:
                            <Typography variant="h5" gutterBottom fontWeight='medium'>
                                {name}
                            </Typography>
                            Provider:
                            <Typography variant="h5" gutterBottom fontWeight='medium'>
                                {provider}
                            </Typography >
                            University:
                            <Typography variant="h5" gutterBottom fontWeight='medium'>
                                {university}
                            </Typography>

                            <Box component="span" sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Typography variant="div">Parent:<Typography variant="h5" gutterBottom fontWeight='medium'>{parent}</Typography></Typography>

                                <Typography variant="div">Child:<Typography variant="h5" gutterBottom fontWeight='medium'>{child}</Typography></Typography>

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
