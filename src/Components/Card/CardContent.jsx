import React from "react";
import {
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
    Box
} from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const CardContents = (props) => {
    //console.log(name)
    if (props.loading) return <h1>Loading...</h1>

    return <Grid container rowSpacing={5} columnSpacing={15} >
        {props.cards.map(card => {
            const { "Course Id": id, "Course Name": name, "Provider": provider, "Child Subject": child, "Universities/Institutions": university,
                "Url": url, "Video(Url)": video, "Parent Subject": parent, "Next Session Date": date } = card
            return <Grid item key={id} xs={12} md={6} lg={4}  >
                <Box
                    sx={{
                        '&:hover': {
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <Card elevation={10} style={{
                        maxHeight: '500px',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        borderRadius: '10px',
                    }} >
                        <CardContent >
                            <Typography
                                variant='h5'
                                fontWeight='light'
                                component="div"
                                display="block"
                                align="left"
                                color='text.primary'
                                fontFamily="Courier New"

                            >
                                <Box
                                    component='span'
                                    display='flex'
                                    justifyContent='space-between'

                                >{card['Course Id']}
                                    <Box
                                        display='flex'
                                        alignItems='flex-start'>
                                        <CalendarMonthIcon />{date}
                                    </Box>
                                </Box>

                                Course Name:
                                <Typography variant="h5" gutterBottom fontWeight='normal' color='secondary.main'>
                                    {name}
                                </Typography>
                                Provider:
                                <Typography variant="h5" gutterBottom fontWeight='normal' color='error.main'>
                                    {provider}
                                </Typography >
                                University:
                                <Typography variant="h5" gutterBottom fontWeight='normal' color='info.main'>
                                    {university}
                                </Typography>

                                <Box component="span" sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    <Typography variant="div">Parent:<Typography variant="h6" gutterBottom fontWeight='normal' color='warning.main'>{parent}</Typography></Typography>

                                    <Typography variant="div">Child:<Typography variant="h6" gutterBottom fontWeight='normal' color='warning.main'>{child}</Typography></Typography>

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
                </Box>
            </Grid>



        })}



    </Grid >


}

export default CardContents;
