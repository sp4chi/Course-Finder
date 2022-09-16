import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios'
import CardContents from "./CardContent";
//import MyPagination from "../MyPagination/MyPagination";
//import CustomPagination from "../MyPagination/Practice/CustomPagination";
import CustomPPagination from '../MyPagination/CustomPPagination'


const url = 'https://nut-case.s3.amazonaws.com/coursessc.json';


const CardLogic = () => {

  const [cards, getCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(url);
      const data = response.data;

      getCards(data)
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
    <Box m={8} pl={20} pr={20} >

      <CardContents
        loading={loading}
        cards={currentCards}
      />
      <CustomPPagination
        totalCount={cards.length}
        currentPage={currentPage}
        pageSize={cardsPerPage}
        onPageChange={paginate} />


      {/* <CustomPagination
        cardsPerPage={cardsPerPage}
        totalCards={cards.length}
        paginate={paginate} /> */}
      {/* <MyPagination /> */}

    </Box >)


}

export default CardLogic;