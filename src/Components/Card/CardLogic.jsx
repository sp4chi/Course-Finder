import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios'
import CardContents from "./CardContent";
import CustomPPagination from '../MyPagination/CustomPPagination'
import BarData from "../Chart/BarData";


const url = 'https://nut-case.s3.amazonaws.com/coursessc.json';


const CardLogic = () => {

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(url);
      const data = response.data;
      setCards(data)
      setLoading(false)

    }

    catch (error) {
      console.log(error.response)
    }


  }
  useEffect(() => {
    fetchData()
  }, [])



  //get index of current post
  const indexOfLastPost = currentPage * cardsPerPage
  const indexOfFirstPost = indexOfLastPost - cardsPerPage
  const currentCards = cards.slice(indexOfFirstPost, indexOfLastPost)

  //change page
  const paginate = pageNumber => setCurrentPage(pageNumber)


  return (
    <Box m={8}  >

      <CardContents
        loading={loading}
        cards={currentCards}
      />

      <Box m={8}>
        <Typography variant="h4" gutterBottom fontWeight='normal' color='info.main'>Charts</Typography>
        <BarData
          barData={cards}
        />
      </Box>


      <CustomPPagination
        totalCount={cards.length}
        currentPage={currentPage}
        pageSize={cardsPerPage}
        onPageChange={paginate} />


    </Box >)


}

export default CardLogic;