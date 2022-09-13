import { Box, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios'


const url = 'https://nut-case.s3.amazonaws.com/coursessc.json';


const CardLogic = () => {

  const [cards, getCards] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      //console.log(data)
      getCards(data)
    }
    catch (error) {
      console.log(error.response)
    }


  }

  useEffect(() => {
    fetchData()

  }, [])


  return (
    <Box m={3}>
      <Grid container rowSpacing={1} columnSpacing={1} >
        {cards.map(obj => {
          const { "Course Id": id, "Course Name": name, "Provider": provider, "Child Subject": child, "Universities/Institutions": university,
            "Url": url, "Video(Url)": video, "Parent Subject": parent } = obj
          return (<Grid item xs={4} key={id}>
            <Card>
              <CardHeader
                title={id} />
              <CardContent>
                <Typography >
                  Course Name: {name}
                </Typography>
                <Typography>
                  Provider: {provider}
                </Typography>
                <Typography>
                  University: {university}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                  }}
                >
                  <Typography>Parent:{parent}</Typography>
                  <Typography>Child:{child}</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                  }}
                >
                  <Typography>Visit Site:{url}</Typography>
                  <Typography>Video Link:{video}</Typography>
                </Box>

              </CardContent>
            </Card>
          </Grid>)
        })}
      </Grid>
    </Box >
  );
}

export default CardLogic;